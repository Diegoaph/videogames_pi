const {Videogame,Genre} = require("../db");
const axios = require("axios")


const getAllGenres = async (req, res) => {
    console.log(Videogame,Genre);
};
module.exports = getAllGenres;