import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connect = await connectToDatabase();

connect.on("error", (error) =>{
    console.error("erro de conexão", error);
});

connect.once("open", ()=>{
    console.log("Conexão feita com sucesso!");
})
const app = express();
routes(app);

app.delete("/users/:id", (req, res) => {
    const index = searchUser(req.params.id);
    users.splice(index, 1);
    res.status(200).send("Usuário deletado");
})


export default app;