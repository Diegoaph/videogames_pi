const {Videogame,Genre} = require("../db");
const axios = require("axios");
const idSolicitado = require("../handlers/getVideogameByIdHandler")

const getVideogameById = async (idSolicitado) => {
    const apiResponse = await axios.get(`https://api.rawg.io/api/games/${idSolicitado}?key=1c2a137230ce410497693405f5f9f015`);

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