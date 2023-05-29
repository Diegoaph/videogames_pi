const { Router } = require('express');

const getAllVideogames = require("../handlers/getAllVideogamesHandler");
const getVideogameById = require("../handlers/getVideogameByIdHandler");
const getVideogameByName = require("../handlers/getVideogameByNameHandler.js");
const postVideogame = require("../handlers/postVideogameHandler");



const videogamesRouter = Router();

    videogamesRouter.get("/id/:idVideogame",getVideogameById);

    videogamesRouter.get("/search/",getVideogameByName);
    
    videogamesRouter.get("/",getAllVideogames);
    
    videogamesRouter.post("/create",postVideogame)

module.exports = videogamesRouter;
