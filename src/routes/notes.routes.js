const { Router } = require("express");
const CheckIfRatingIsValid = require("../middlewares/CheckIfRatingIsValid.js")

const MovieNotesController = require("../controllers/MovieNotesController.js");

const movieNotesRoutes = Router();

const movieNotesController = new MovieNotesController();

movieNotesRoutes.get("/:id", movieNotesController.show);
movieNotesRoutes.post("/:user_id", CheckIfRatingIsValid, movieNotesController.create);
movieNotesRoutes.delete("/:id", movieNotesController.delete);

module.exports = movieNotesRoutes;