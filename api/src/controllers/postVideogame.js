const {Videogame,Genre} = require("../db");
const axios = require("axios")
const { Op } = require('sequelize');



const postVideogame = async ({
    name,
    description,
    platforms,
    image,
    released,
    genres,
    rating
}) => {
    return await Videogame.findOrCreate({
    where: {name:{[Op.iLike]: `%${name}%`}},
    defaults: {
        name,
        description,
        platforms,
        image,
        released,
        genres,
        rating
    }})
    //! deberia agregar un throw error si el juego ya esta
};
module.exports = postVideogame;
    // POST | /videogames
    // Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros solicitados.
    // Toda la información debe ser recibida por body.
    // Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados (al menos uno).
