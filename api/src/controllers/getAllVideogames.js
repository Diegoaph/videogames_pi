//getAllVideogames
const {Videogame,Genre} = require("../db");
const axios = require("axios")


const getAllVideogames = async () => {
    let allVideogamesArray = [];
    let page = 1;
    
    while (allVideoGamesArray.length < 100) {
      const url = `https://api.rawg.io/api/games?key=1c2a137230ce410497693405f5f9f015&page=${page}`;
      const response = await axios.get(url);
      const { results, next } = response.data;
       // de todo lo que devuelve la api, me quedo solo con el array de 20 resultados y la url de los siguientes 20
      allVideogamesArray = allVideogamesArray.concat(results); 
      
      if (!next) {
        break;
         // en caso de que no haya mas paginas (dificil), corta el ciclo
      }
      
      page++;
    }
    const DBVideogames = await Videogame.findAll();
    const allVideogames = DBVideogames.concat(allVideogamesArray);
    return allVideogames;
  };
  
module.exports = getAllVideogames;