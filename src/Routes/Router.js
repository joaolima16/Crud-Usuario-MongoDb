const express = require ('express');
const UsersControllers = require("../Controllers/UserController")
const JwtVerify = require("../middleware/VerifyJWT")
const Route = express.Router();


Route.get("/login",UsersControllers.LoginUser);
Route.post("/newUser",JwtVerify,UsersControllers.CreateUser);
Route.put("/updateUser",JwtVerify, UsersControllers.UpdateUser);
Route.delete("/deleteUser",JwtVerify, UsersControllers.DeleteUser);

module.exports = Route;


