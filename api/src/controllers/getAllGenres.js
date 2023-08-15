//getAllGenres.js
require("dotenv").config();
const { GNR_URL, API_KEY } = process.env;
const { Genre } = require("../db");
const axios = require("axios");

const getAllGenres = async () => {
    let genres = await Genre.findAll();
    if (genres.length === 0) {
        console.log("filling DB");
        let allGenresArray = [];
        const url = `${GNR_URL}?key=${API_KEY}`;
        const response = await axios.get(url);
        const { results } = response.data;
        allGenresArray = results.map((gnr) => {
            return {
                id: gnr.id,
                name: gnr.name,
                image: gnr.image_background,
            };
        });
        allGenresArray.forEach(async (genre) => {
            await Genre.findOrCreate({
                where: {
                    id: genre.id,
                },
                defaults: {
                    name: genre.name,
                    image: genre.image,
                },
            });
        });
        let genres = await Genre.findAll();
        return genres;
    } else {
        console.log("reading DB");
        return genres;
    }
};

module.exports = getAllGenres;
