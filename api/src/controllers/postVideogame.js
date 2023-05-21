const {Videogame,Genre} = require("../db");
const axios = require("axios")


const postVideogame = async (req, res) => {
    console.log(Videogame,Genre);
};
module.exports = postVideogame;