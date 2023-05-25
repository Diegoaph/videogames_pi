const {Videogame,Genre} = require("../db");
const axios = require("axios");
const idSolicitado = require("../handlers/getVideogameByIdHandler")
require('dotenv').config();
const {VG_URL,GNR_URL,API_KEY} = process.env;

const getVideogameById = async (idSolicitado) => {
    const url = `${VG_URL}/${idSolicitado}?key=${API_KEY}`;
    const apiResponse = await axios.get(url);

    const { id, name, description, platforms, background_image, released, rating_top , genres} = apiResponse.data;

    const plataformas = platforms.map(platform => platform.platform.name);
    const generos = genres.map(gen => gen.name);

    const videogameSolicitado= {
        id,
        name,
        description,
        platforms: plataformas,
        image: background_image,
        released,
        rating: rating_top,
        genres: generos
    }
    return videogameSolicitado;
};
  
module.exports = getVideogameById;