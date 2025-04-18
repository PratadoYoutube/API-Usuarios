import mongoose from "mongoose";
import { profileSchema } from "./profile.js";

const userSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, requiered: true},
    email: {type: String, required: true},
    senha: {type: String, required: true},
    cpf: {type: String},
    perfil: profileSchema
}, {versionKey: false});

const user = mongoose.model("user", userSchema);

export default user;