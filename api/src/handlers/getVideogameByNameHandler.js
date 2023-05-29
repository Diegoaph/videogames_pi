const getVideogameByName = require('../controllers/getVideogameByName');

const getVideogameByNameHandler = async (req, res) => {
  try {
    console.log("busqueda por nombre")
    const {name} = req.query;
    console.log("buscando"+name);
    const arrayResult = await getVideogameByName(name);
    res.status(200).json(arrayResult);
  } catch (error) {
    res.status(408).json({ error: error.message });
  }
};

module.exports = getVideogameByNameHandler;
