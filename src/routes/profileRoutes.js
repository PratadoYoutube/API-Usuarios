import express from "express";
import ProfileController from "../controllers/profileController.js";

const routes = express.Router();

routes.get("/profile", ProfileController.listProfile);
routes.get("/profile/:id", ProfileController.listProfileByid);
routes.post("/profile", ProfileController.registerProfile);
routes.put("/profile/:id", ProfileController.updateProfile);
routes.delete("/profile/:id", ProfileController.deleteProfile);

export default routes;
