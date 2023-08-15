//postVideogame.js
const { Videogame, Genre } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");

const postVideogame = async ({
    name,
    description,
    platforms,
    image,
    released,
    genres,
    rating,
}) => {
    return await Videogame.findOrCreate({
        where: { name: { [Op.iLike]: `%${name}%` } },
        defaults: {
            name,
            description,
            platforms,
            image,
            released,
            genres,
            rating,
        },
    });
    //! deberia agregar un throw error si el juego ya esta
};
module.exports = postVideogame;
