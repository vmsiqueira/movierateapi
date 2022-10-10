const { Router } = require("express");

//routes
const usersRoutes = require("./users.routes.js");
const movieNotesRoutes = require("./notes.routes.js");
const movieTagsRoutes = require("./tags.routes.js");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/notes", movieNotesRoutes);
routes.use("/tags", movieTagsRoutes);

module.exports = routes;