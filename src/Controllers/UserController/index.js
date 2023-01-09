const ModelUser = require("../../Models/UserSchema")
const moongose = require("mongoose");
class UserController {

    static async LoginUser(req, res) {
        const { email,password } = req.body
        try {
            const User = await ModelUser.findOne({email,password});
            if(User){
                    return res.json({status:"Authorized",msg:"Usuário logado! "})
            }
            else{
                return res.json({status: "Not Authorized",msg:"Credenciais incorretas"})
            }
            
        }
        catch (ex) {
            return res.json({ status: "failed", msg: "Falha ao criar Usuário" })
        }
    }
    static async CreateUser(req, res) {
        const { email } = req.body;
        const { password } = req.body;
        try {
            const newUser = ModelUser.create({
                email,
                password
            })
            return res.json({ status: "ok", msg: "Usuário Criado!" })
        }
        catch (ex) {
            return res.json({ status: "failed", msg: "Falha ao criar Usuário" })
        }

    }
    static async UpdateUser(req, res) {
        const { email } = req.body;
        const { new_email } = req.body;
        try {
            const User = await ModelUser.findOne({ email });
            if (User) {
                await User.updateOne({ email: new_email });
                return res.json({ status: "OK", msg: "Email atualizado! " })
            }
            else {
                return res.json({ status: "failed", msg: "Usuário não encontrado!" })
            }
        }
        catch (ex) {
            return res.json({ status: "Error", msg: `Ocorreu um erro! ${ex}` })
        }

    }
    static async DeleteUser(req, res) {
        const { email } = req.body;
        const UserDelete = await ModelUser.findOne({ email })
        try {
            if (UserDelete) {
                await UserDelete.deleteOne();
                return res.json({ status: "OK", msg: "Usuário deletado!" })
            }
            else {
                return res.json({ status: "failed", msg: "Usuário não encontrado" })
            }
        }
        catch (ex) {
            return res.json({ status: "Error", msg: `Ocorreu um erro! ${ex}` })
        }

    }

}
module.exports = UserController;