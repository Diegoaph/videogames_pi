const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
    platforms: {
      type: DataTypes.JSONB,
    },
    image: {
      type: DataTypes.STRING,
    },
    released: {
      type: DataTypes.DATE,
    },
    genres: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    rating: {
      type: DataTypes.INTEGER,
    }
  });
};
