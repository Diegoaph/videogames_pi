//getAllVideogames.js
const { Videogame } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { VG_URL, API_KEY } = process.env;

const getAllVideogames = async () => {
    try {
        let allVideogamesArray = [];
        let pageNum = 1;

        while (allVideogamesArray.length < 100) {
            let page = `&page=${pageNum}`;
            const url = `${VG_URL}?key=1c2a137230ce410497693405f5f9f015${page}`;
            const response = await axios.get(url);
            console.log(response.data);
            const { results, next } = response.data;
            // de todo lo que devuelve la api, me quedo solo con el array de 20 resultados y la url de los siguientes 20
            allVideogamesArray = allVideogamesArray.concat(results);

            if (!next) {
                break;
                // en caso de que no haya mas paginas, corta el ciclo
            }

            pageNum++;
        }
        const DBVideogames = await Videogame.findAll();
        const allVideogames = DBVideogames.concat(allVideogamesArray);
        return allVideogames;
    } catch (error) {
        console.error({ error: error.message });
    }
};

module.exports = getAllVideogames;
