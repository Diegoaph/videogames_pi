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

//     /genres
// Obtiene un arreglo con todos los géneros existentes de la API.
// En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los géneros que encuentres en la API.
// Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.
// api/genres devuelve un objeto con la propiedad count igual al numero de resultados(genres) y results igual a un array de objetos, cada objeto es un genre que contiene ID name games_count y games que contiene 6 games, cada uno con id y name


