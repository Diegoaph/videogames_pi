const { Videogame, Genre } = require("../db");
const axios = require("axios");
require('dotenv').config();
const { VG_URL, API_KEY } = process.env;

const getVideogameByName = async (nameSolicitado) => {
  const url = `${VG_URL}/?search[]=${nameSolicitado}&key=${API_KEY}`;
  const apiResponse = await axios.get(url);
  const arrayResultApi = apiResponse.data.results;
  console.log(arrayResultApi);
  return arrayResultApi;
};

module.exports = getVideogameByName;
