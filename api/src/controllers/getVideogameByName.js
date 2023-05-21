const {Videogame,Genre} = require("../db");
const axios = require("axios")


const getVideogameByName = async (req, res) => {
    console.log(Videogame,Genre);
};
module.exports = getVideogameByName;