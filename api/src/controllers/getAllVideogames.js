const {Videogame,Genre} = require("../db");
const axios = require("axios")


const getAllVideogames = async (req, res) => {
    console.log(Videogame,Genre);

//     GET | /videogames
// Obtiene un arreglo de objetos, donde cada objeto es un videojuego con su información.

};
module.exports = getAllVideogames;