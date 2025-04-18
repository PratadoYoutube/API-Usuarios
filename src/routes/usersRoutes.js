import express from "express";
import UserController from "../controllers/usersController.js";

const routes = express.Router();

routes.get("/users", UserController.listUser);
routes.get("/users/search", UserController.listUserByName)
routes.get("/users/:id", UserController.listUserByid);
routes.post("/users", UserController.registerUser);
routes.put("/users/:id", UserController.updateUser);
routes.delete("/users/:id", UserController.deleteUser);

export default routes