import {profile} from "../models/profile.js";

class ProfileController {

    static async listProfile(req, res){
        try{
            const profileList = await profile.find({})
            res.status(200).json(profileList);

        } catch (erro) {
           res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    };

    static async listProfileByid(req, res){
        try{
            const id = req.params.id;
            const profileFound = await profile.findById(id)
            res.status(200).json(profileFound);

        } catch (erro) {
           res.status(500).json({message: `${erro.message} - falha na requisição do perfil`});
        }
    };

    static async registerProfile (req, res){
        try {
            const newProfile = await profile.create(req.body);
            res.status(201).json({message: "Perfil criado com sucesso", profile: newProfile});
        } catch (error){
            res.status(500).json({message: `${error.message} - falha ao cadastrar perfil`});
        }
    }

    static async updateProfile(req, res){
        try{
            const id = req.params.id;
            await profile.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Perfil atualizado!"});

        } catch (erro) {
           res.status(500).json({message: `${erro.message} - falha na atualização do perfil`});
        }
    };

    static async deleteProfile(req, res){
        try{
            const id = req.params.id;
            await profile.findByIdAndDelete(id);
            res.status(200).json({message: "Perfil deletado!"});

        } catch (erro) {
           res.status(500).json({message: `${erro.message} - falha na exclusão do perfil`});
        }
    };
};

export default ProfileController;
