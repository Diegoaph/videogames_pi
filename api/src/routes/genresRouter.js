const { Router } = require('express');

const getAllGenres = require("../handlers/getAllGenresHandler");


const genresRouter = Router();

genresRouter.get("/",getAllGenres);

module.exports = genresRouter;
