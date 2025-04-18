import user from "../models/user.js";
import {profile} from "../models/profile.js"

class UserController {

    static async listUser(req, res){
        try{
            const userList = await user.find({})
            res.status(200).json(userList);

        } catch (erro) {
           res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    };

    static async listUserByid(req, res){
        try{
            const id = req.params.id;
            const userFound = await user.findById(id)
            res.status(200).json(userFound);

        } catch (erro) {
           res.status(500).json({message: `${erro.message} - falha na requisição do usuário`});
        }
    };

    static async registerUser (req, res){
        const newUser = req.body;
        try {
            const profileFound = await profile.findById(newUser.profile);
            const fullProfile = {...newUser, profile: {...profileFound._doc}};
            const createProfile = await user.create(fullProfile);
            res.status(201).json({message: "criado com sucesso", user: newUser});
        } catch (error){
            res.status(500).json({message: `${error.message} - falha ao cadastrar usuário `});
        }
    }

    static async updateUser(req, res){
        try{
            const id = req.params.id;
            await user.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Usuário atualizado!"});

        } catch (erro) {
           res.status(500).json({message: `${erro.message} - falha na atualização`});
        }
    };

    static async deleteUser(req, res){
        try{
            const id = req.params.id;
            await user.findByIdAndDelete(id);
            res.status(200).json({message: "Usuário deletado!"});

        } catch (erro) {
           res.status(500).json({message: `${erro.message} - falha na exclusão do usuário`});
        }
    };

    static async listUserByName (req, res) {
        const nome = req.query.nome;
        try {
            const usersByName = await user.find({
                nome: { $regex: nome, $options: "i" }
            });
            res.status(200).json(usersByName);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na busca` });
        }
    }    
};

export default UserController