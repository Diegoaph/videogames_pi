//getAllVideoGamesHandler
const getAllVideogames = require('../controllers/getAllVideogames')

const getAllVideogamesHandler = async(req,res)=>{
    try {
        console.log("buscando todos los vgs");
        const videogames = await getAllVideogames();
        res.status(200).json(videogames)
        
    } catch (error) {
        res.status(405).json({error:error.message})
    }
}

module.exports = getAllVideogamesHandler;