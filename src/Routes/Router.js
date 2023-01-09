const express = require ('express');
const UsersControllers = require("../Controllers/UserController")
const Route = express.Router();


Route.get("/login",UsersControllers.LoginUser);
Route.post("/newUser",UsersControllers.CreateUser);
Route.put("/updateUser",UsersControllers.UpdateUser);
Route.delete("/deleteUser",UsersControllers.DeleteUser);

module.exports = Route;


