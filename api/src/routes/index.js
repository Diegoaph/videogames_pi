const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getAllVideogames = require("../controllers/getAllVideogames");
const getVideogameById = require("../controllers/getVideogameById");
const getVideogameByName = require("../controllers/getVideogameByName");
const postVideogame = require("../controllers/postVideogame");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/",getAllVideogames);
router.get("/name",getVideogameByName);
router.get("/:idVideogame",getVideogameById);

module.exports = router;
