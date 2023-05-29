const axios = require("axios");
require('dotenv').config();
const {Op}=require("sequelize")
const {Videogame,Genre} = require("../db");

const getVideogameByName = async (nameSolicitado) => {
  const { VG_URL, API_KEY } = process.env;
  const url = `${VG_URL}?search=${nameSolicitado}&key=${API_KEY}`;

  const response = await axios.get(url);
  const arrayResultApi = response.data.results.map(vg => ({
    name: vg.name,
    released: vg.released,
    image: vg.background_image,
    rating: vg.rating_top,
    platforms: vg.platforms.map(plat => plat.name),
    description: vg.description
  }));

  const DBVideogames = await Videogame.findAll({
    where: {
      name: { [Op.iLike]: `%${nameSolicitado}%`, }
    },
  });
  

    const allVideogames = DBVideogames.concat(arrayResultApi);
    console.log(DBVideogames+"&/&/&/&"+arrayResultApi);
    return allVideogames;
};

module.exports = getVideogameByName;
