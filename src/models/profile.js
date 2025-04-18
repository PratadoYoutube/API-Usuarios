import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    fotoPerfil: { type: String },
    bio: { type: String },
    dataNascimento: { type: Date },
    genero: { type: String }
}, {versionKey: false});


const profile = mongoose.model("profiles", profileSchema);

export {profile, profileSchema};