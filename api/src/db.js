require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

let sequelize;

// Configuración para producción (usando DATABASE_URL)
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // Necesario para Neon
      }
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
} else {
  // Configuración para desarrollo local (usando variables individuales)
  const requiredEnvVars = ['DB_USER', 'DB_PASSWORD', 'DB_NAME', 'DB_HOST', 'DB_PORT'];
  requiredEnvVars.forEach((varName) => {
    if (!process.env[varName]) {
      throw new Error(`Falta la variable de entorno: ${varName}`);
    }
  });

  const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT } = process.env;

  sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {
      logging: process.env.NODE_ENV === 'development' ? console.log : false,
      native: false
    }
  );
}

const basename = path.basename(__filename);
const modelDefiners = [];

// Cargar modelos dinámicamente desde la carpeta "models"
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Inyectar la conexión Sequelize en los modelos
modelDefiners.forEach((model) => model(sequelize));

// Capitalizar nombres de modelos
const entries = Object.entries(sequelize.models);
const capsEntries = entries.map(([key, value]) => [key[0].toUpperCase() + key.slice(1), value]);
sequelize.models = Object.fromEntries(capsEntries);

// Relaciones entre modelos
const { Videogame, Genre } = sequelize.models;

Videogame.belongsToMany(Genre, {
  through: 'videogame_genres',
  timestamps: false
});
Genre.belongsToMany(Videogame, {
  through: 'videogame_genres',
  timestamps: false
});

// Función para probar la conexión
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a la base de datos establecida correctamente.');
  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error);
    throw error;
  }
}

// Sincronizar base de datos
async function syncDatabase() {
  try {
    await testConnection();
    await sequelize.sync({ force: false });
    console.log('✅ Base de datos sincronizada correctamente.');
  } catch (error) {
    console.error('❌ Error al sincronizar la base de datos:', error);
    throw error;
  }
}

// Ejecutar sincronización
syncDatabase();

module.exports = {
  ...sequelize.models, // Exportar modelos
  conn: sequelize // Exportar conexión
};
