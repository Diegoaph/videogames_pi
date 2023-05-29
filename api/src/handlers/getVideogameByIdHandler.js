//getVideoGameByIdHandler
const getVideogameById = require('../controllers/getVideogameById')
const getVideogameByIdHandler = async(req,res)=>{
    try {
        console.log("busqueda por id");
        const {idVideogame} = req.params;
        const videogameSolicitado = await getVideogameById(idVideogame);

        res.status(200).json(videogameSolicitado)
        
    } catch (error) {
        res.status(403).json({error:error.message})
    }
}

module.exports = getVideogameByIdHandler;