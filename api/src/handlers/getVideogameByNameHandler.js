const getVideogameByName = require('../controllers/getVideogameByName');

const getVideogameByNameHandler = async (req, res) => {
  try {
    const { name } = req.params.nameVideogame;
    const arrayResult = await getVideogameByName(name);
    res.status(200).json(arrayResult);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getVideogameByNameHandler;
