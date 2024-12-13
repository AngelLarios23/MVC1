import mongoose from "mongoose";
import express from "express";
import cors from "cors;"
import dotenv from "dotenv";

dotenv.config()//Para que deje funcionar la libreria y deje usar el .env
mongoose.connect(process.env.url_bd)//Manda a llamar el .env donde esta la URL
.then(()=>{//Muestra si la base de datos funciona
    console.log("Fuciona la base de datos")
})
.catch((error)=>{// Muestra si la base de datos no esta funcionando
    console.log("No funciona la base de datos",error)
})

const app = express();//Creacion de un servidor local
app.use(cors(4000),"Escucha bien, no escucha borroso")
//Todos los consol.log que tenemos son testeos