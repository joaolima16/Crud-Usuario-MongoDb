const { Schema, default: mongoose } = require("mongoose");
 const UserSchema = new Schema({
    email: String,
    password: String
})

const UserModel = mongoose.model("users",UserSchema)

module.exports = UserModel;
