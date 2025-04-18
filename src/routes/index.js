import express from "express";
import users from "./usersRoutes.js";
import profile from "./profileRoutes.js"

const routes = (app) => {

app.route("/").get((req, res)=> res.status(200).send("API de Usuários"));

app.use(express.json(), users, profile);

};

export default routes;