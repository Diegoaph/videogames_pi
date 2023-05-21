const {Videogame,Genre} = require("../db");
const axios = require("axios")


const getVideogameByName = async (req, res) => {
    console.log(Videogame,Genre);

    //GET | /videogames/name?="..."
    // aqui debe ir la logica para obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query.
    // Debe poder buscarlo independientemente de mayúsculas o minúsculas.
    // Si no existe el videojuego, debe mostrar un mensaje adecuado.
    // Debe buscar tanto los de la API como los de la base de datos.
};
module.exports = getVideogameByName;