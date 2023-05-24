//postVideogamesHandler
const postVideogame = require('../controllers/postVideogame')

const postVideogameHandler = async (req,res)=>{
    try {
        const videogameEnviado = req.body;
        const videogameCreado = await postVideogame(videogameEnviado);
        res.status(200).json(videogameCreado)
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = postVideogameHandler;