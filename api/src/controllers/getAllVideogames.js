const {Videogame,Genre} = require("../db");
const axios = require("axios")


const getAllVideogames = async (req, res) => {
    console.log(Videogame,Genre);
};
module.exports = getAllVideogames;