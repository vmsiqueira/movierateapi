const { Router } =  require("express");
const UsersController = require("../controllers/UsersController.js");

//middleware

const usersRoutes = Router();
const usersController = new UsersController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update);
//index
//delete

module.exports = usersRoutes;