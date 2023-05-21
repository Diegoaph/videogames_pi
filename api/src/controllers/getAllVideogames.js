//getAllVideogames
const {Videogame,Genre} = require("../db");
const axios = require("axios")


const getAllVideogames = async () => {
    let allVideoGamesArray = [];
    let page = 1;
    
    while (allVideoGamesArray.length < 100) {
      const url = `https://api.rawg.io/api/games?key=1c2a137230ce410497693405f5f9f015&page=${page}`;
      const response = await axios.get(url);
      const { results, next } = response.data;
       // de todo lo que devuelve la api, me quedo solo con el array de 20 resultados y la url de los siguientes 20
      allVideoGamesArray = allVideoGamesArray.concat(results); 
      
      if (!next) {
        break;
         // en caso de que no haya mas paginas (dificil), corta el ciclo
      }
      
      page++;
    }
    //retorna el array cuando llegue a 100 posiciones, incluso si falta alguna posicion en alguna pagina 
    
    return allVideoGamesArray;
  };
  
module.exports = getAllVideogames;