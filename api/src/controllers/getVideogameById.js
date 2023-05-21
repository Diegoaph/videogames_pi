const {Videogame,Genre} = require("../db");
const axios = require("axios")


// GET | /videogames/:idVideogame
// Esta ruta obtiene el detalle de un videojuego específico. Es decir que devuelve un objeto con la información pedida en el detalle de un videojuego.
// El videojuego es recibido por parámetro (ID).
// Tiene que incluir los datos del género del videojuego al que está asociado.
// Debe funcionar tanto para los videojuegos de la API como para los de la base de datos. 

const getVideogameById = async (req, res) => {
  
};
module.exports = getVideogameById;