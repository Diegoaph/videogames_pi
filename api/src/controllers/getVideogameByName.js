//getVideogameByName.js
const axios = require("axios");
require("dotenv").config();
const { Op } = require("sequelize");
const { Videogame } = require("../db");

const getVideogameByName = async (nameSolicitado) => {
    const { VG_URL, API_KEY } = process.env;
    const url = `${VG_URL}?search=${nameSolicitado}&key=${API_KEY}`;

    const response = await axios.get(url);
    const arrayResultApi = response.data.results.map((vg) => ({
        id: vg.id,
        name: vg.name,
        released: vg.released,
        image: vg.background_image,
        rating: vg.rating_top,
        platforms: vg.platforms.map((plat) => plat.name),
        description: vg.description,
    }));

    const DBVideogames = await Videogame.findAll({
        where: {
            name: { [Op.iLike]: `%${nameSolicitado}%` },
        },
    });
    const allVideogames = DBVideogames.concat(arrayResultApi);
    if (allVideogames.length === 0) {
        return console.error("No videogames with this name where found ");
    } else {
        return allVideogames.slice(0, 15);
    }
};

module.exports = getVideogameByName;
