// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getAllGenres = require("../controllers/getAllGenres");
const { Router } = require('express');


const genrerouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

genrerouter.get("/",getAllgenres);

module.exports = router;
