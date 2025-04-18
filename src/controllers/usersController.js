import user from "../models/user.js";

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
        try {
            const newUser = await user.create(req.body);
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
};

export default UserController