//getVideogamesById.js
const { Videogame, Genre } = require("../db");
const axios = require("axios");
const idSolicitado = require("../handlers/getVideogameByIdHandler");
require("dotenv").config();
const { VG_URL, GNR_URL, API_KEY } = process.env;

const getVideogameById = async (idSolicitado) => {
    if (idSolicitado.includes("-")) {
        console.log("buscando en DB");
        const DBResponse = await Videogame.findByPk(idSolicitado);
        if (DBResponse) {
            const {
                name,
                description,
                platforms,
                image,
                released,
                rating,
                genres,
            } = DBResponse;
            const videogameSolicitado = {
                name,
                description,
                platforms,
                image,
                released,
                rating,
                genres,
            };
            console.log(videogameSolicitado);
            return videogameSolicitado;
        } else {
            return console.error(
                "no videogames with this id where found in database"
            );
        }
    } else {
        console.log("buscando en api");
        const url = `${VG_URL}/${idSolicitado}?key=${API_KEY}`;
        const apiResponse = await axios.get(url);

        const {
            id,
            name,
            description,
            platforms,
            background_image,
            released,
            rating_top,
            genres,
        } = apiResponse.data;

        const plataformas = platforms.map((platform) => platform.platform.name);
        const generos = genres.map((gen) => gen.name);

        const videogameSolicitado = {
            id,
            name,
            description,
            platforms: plataformas,
            image: background_image,
            released,
            rating: rating_top,
            genres: generos,
        };
        return videogameSolicitado;
    }
};

module.exports = getVideogameById;
