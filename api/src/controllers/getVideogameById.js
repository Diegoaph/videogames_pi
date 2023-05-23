const {Videogame,Genre} = require("../db");
const axios = require("axios");
const IdSolicitado = require("../handlers/getVideogameByIdHandler")


// GET | /videogames/:idVideogame
// Esta ruta obtiene el detalle de un videojuego específico. Es decir que devuelve un platform con la información pedida en el detalle de un videojuego.
// El videojuego es recibido por parámetro (ID).
// Tiene que incluir los datos del género del videojuego al que está asociado.
// Debe funcionar tanto para los videojuegos de la API como para los de la base de datos. 



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