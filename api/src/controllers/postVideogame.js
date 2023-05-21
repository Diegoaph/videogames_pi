const {Videogame,Genre} = require("../db");
const axios = require("axios")


const postVideogame = async (req, res) => {
    console.log(Videogame,Genre);

    // POST | /videogames
    // Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros solicitados.
    // Toda la información debe ser recibida por body.
    // Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados (al menos uno).

};
module.exports = postVideogame;