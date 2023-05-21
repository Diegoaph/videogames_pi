//getAllVideoGamesHandler
const getAllVideogames = require('../controllers/getAllVideogames')

const getAllVideogamesHandler = (req,res)=>{
    try {
        const videogames = getAllVideogames();
        res.status(200).json(videogames)
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = getAllVideogamesHandler;