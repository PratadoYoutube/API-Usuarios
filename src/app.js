import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import user from "./models/user.js";

const connect = await connectToDatabase();

connect.on("error", (error) =>{
    console.error("erro de conexão", error);
});

connect.once("open", ()=>{
    console.log("Conexão feita com sucesso!");
})
const app = express();

app.use(express.json()); //middleware 

app.get("/", (req,res) => {
    res.status(200).send("Usuários");
});

app.get("/users", async (req, res)=>{
    const userList = await user.find({})
    res.status(200).json(userList);
});

app.get("/users/:id", (req,res)=>{
const index = searchUser(req.params.id);
res.status(201).json(users[index]);
});

app.post("/users", (req, res)=>{
    users.push(req.body);
    res.status(201).send("Usuário cadastrado com sucesso")
});

app.put("/users/:id", (req,res) => {
    const index = searchUser(req.params.id);
    users[index].nome = req.body.nome;
    res.status(200).json(users);
});

app.delete("/users/:id", (req, res) => {
    const index = searchUser(req.params.id);
    users.splice(index, 1);
    res.status(200).send("Usuário deletado");
})


export default app;