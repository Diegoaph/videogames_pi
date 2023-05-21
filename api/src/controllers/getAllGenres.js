
const {Videogame,Genre} = require("../db");
const axios = require("axios")


const getAllGenres = async () => {
    let allGenresArray = [];
    const url = `https://api.rawg.io/api/genres?key=1c2a137230ce410497693405f5f9f015`;
    const response = await axios.get(url);
    const { count, results } = response.data;
    
     
    return allGenresArray;
  };
  
module.exports = getAllGenres;

//     /genres
// Obtiene un arreglo con todos los géneros existentes de la API.
// En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los géneros que encuentres en la API.
// Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.
// api/genres devuelve un objeto con la propiedad count igual al numero de resultados(genres) y results igual a un array de objetos, cada objeto es un genre que contiene ID name games_count y games que contiene 6 games, cada uno con id y name