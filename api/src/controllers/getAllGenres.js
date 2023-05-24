require('dotenv').config();
const {GNR_URL,API_KEY} = process.env;
const {Videogame,Genre} = require("../db");
const axios = require("axios")


const getAllGenres = async () => {
    let allGenresArray = [];
    const url = `${GNR_URL}?key=${API_KEY}`;
    const response = await axios.get(url);
    const { results } = response.data;
    allGenresArray = results.map((gnr)=>{
      return{
        id:gnr.id,
        name:gnr.name
      }
    });
    allGenresArray.forEach(async (genre) => {
      await Genre.findOrCreate({
        where: {
          id: genre.id,
        },
        defaults: {
          name: genre.name,
        },
      });
    });
    let genres = await Genre.findAll();
    return genres;
  };
  
module.exports = getAllGenres;
