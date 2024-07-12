const tables = require("../tables");

const browse = async (req, res) => {
  try {
    const getAllVideoGames = await tables.video_game.readAll();
    res.json(getAllVideoGames);
  }
  catch (err) {
    console.error(err);
  }
}
const read = async (req, res) => {
  try {
    // Fetch all video games from the database
    const { id } = req.params;
    const getVideoGames = await tables.video_game.read(id);

    if (getVideoGames.length) {
      res.json(getVideoGames);
    } else {
      res.status(404).send("Ce jeu vidéo n'existe pas");
    }

    // Respond with video games in JSON format
    res.json(getVideoGames);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    console.error(err);
  }
};
const add = async (req, res) => {
  try {
    // Fetch all video games from the database
    const { name, developer_id } = req.body;
    const createVideoGames = await tables.video_game.create(name, developer_id);

    console.log(createVideoGames);

    if (createVideoGames.affectedRows === 1) {
      res.status(201).send(`Un nouvrau jeu vidéo a été inséré avec un id ${createVideoGames.insertId}`);
    } else {
      res.status(404).send("Ce jeu vidéo n'existe pas");
    }

    // Respond with video games in JSON format
  } catch (err) {
    // Pass any errors to the error-handling middleware
    console.error(err);
  }
};
const remove = async (req, res) => {
  try {
    // Fetch all video games from the database
    const { id } = req.params;
    const deleteVideoGames = await tables.video_game.delete(id);

    if (deleteVideoGames === 1) {
      res.sendStatus(204);
    } else {
      res.status(404).send("La suppression du jeu visé est impossible");
    }

    // Respond with video games in JSON format
  } catch (err) {
    // Pass any errors to the error-handling middleware
    console.error(err);
  }
};
const edit = async (req, res) => {
  try {
    // Fetch all video games from the database
    // const { id } = req.params;
    // const { name, developer_id } = req.body;

    const body = {
      id: req.params.id,
      name: req.body.name,
      developer_id: req.body.developer_id
    }

    const updateVideoGames = await tables.video_game.update(body);

    if (updateVideoGames === 1) {
      res.sendStatus(204);
    } else {
      res.status(404).send("La mise à jour du jeu visé est impossible");
    }

    // Respond with video games in JSON format
  } catch (err) {
    // Pass any errors to the error-handling middleware
    console.error(err);
  }
};

module.exports = { browse, read, add, remove, edit };