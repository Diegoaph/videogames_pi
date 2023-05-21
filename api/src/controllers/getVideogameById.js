const {Videogame,Genre} = require("../db");
const axios = require("axios")


// GET | /videogames/:idVideogame
// Esta ruta obtiene el detalle de un videojuego específico. Es decir que devuelve un objeto con la información pedida en el detalle de un videojuego.
// El videojuego es recibido por parámetro (ID).
// Tiene que incluir los datos del género del videojuego al que está asociado.
// Debe funcionar tanto para los videojuegos de la API como para los de la base de datos. 

const getVideogameById = async (req, res) => {
  try {
    const {idVideogame} = req.params;
    const apiResponse = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=1c2a137230ce410497693405f5f9f015`);
    const { name, id, description, platforms, image, released, genres, rating } = apiResponse.data;
    const {Genres} = apiResponse.data
    const VG = {
        id:id,
        name:pokeName,
        image:front_default,
        hp,
        attack,
        defense,
        speed,
        height:heightString,
        weight:weightString,
        // genres: genres devuelve un array de objetos con propiedad id y propiedad name
      }
    res.json(poke);
  } catch (error) {
    const {idVideogame} = req.params;
    const poke = await Videogame.findOne({
      where: {
        id: idVideogame,
      },
      include: [{ 
        model: Type, 
       }],
    });
   
    const dbVideogameDetail= {
      name: poke.name,
      image: poke.image,
      hp: poke.hp,
      attack: poke.attack,
      defense: poke.defense,
      speed: poke.speed,
      weight: poke.weight,
      height: poke.height,
      types: poke.Types?.map((type) => {
        const typeName = type.name.charAt(0).toUpperCase() + type.name.slice(1);
      return typeName})
    }
  
    if(dbVideogameDetail){
      res.json(dbVideogameDetail);
    }else{
    res.status(500).json({ message: 'Internal server error' });
  }}
};
module.exports = getVideogameById;