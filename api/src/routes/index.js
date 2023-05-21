const { Router } = require('express');
const videogames = require("./videogamesRouter");
//const genres = require("./genresRouter");




const router = Router();
router.use("/videogames",videogames);
//router.use("/genres",genres);




module.exports = router;
