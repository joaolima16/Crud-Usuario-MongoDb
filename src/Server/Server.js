const express = require("express");
const mongoose = require("mongoose");
const path = require("path")
const Route = require("../Routes/Router")
const App = express();
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const User = process.env.USER;
const Password = process.env.PASSWORD;


App.use(express.json())
App.use(Route);
mongoose.connect(`mongodb+srv://${User}:${Password}@usersproject.bg8mdic.mongodb.net/?retryWrites=true&w=majority`)
   .then((response) => {

      App.listen(3000, () => {
         console.log("Servidor operando!")
      })

   })
   .catch((err) => { console.log("o erro foi: " + err) })



