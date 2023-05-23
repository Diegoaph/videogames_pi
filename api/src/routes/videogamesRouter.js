const { Router } = require('express');

const getAllVideogames = require("../handlers/getAllVideogamesHandler");
const getVideogameById = require("../handlers/getVideogameByIdHandler");
const getVideogameByName = require("../handlers/getVideogameByNameHandler");
const postVideogame = require("../handlers/postVideogameHandler");



const videogamesRouter = Router();


    videogamesRouter.get("/",getAllVideogames);

// videogamesRouter.get("/name",getVideogameByName);
    videogamesRouter.get("/:idVideogame",getVideogameById);

// videogamesRouter.post("/create",postVideogame)



module.exports = videogamesRouter;
