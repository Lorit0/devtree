import express, { json } from "express"
import { router } from './router'
import { connectDB } from "./config/db"
const app = express()
//Conectar base de datos
connectDB()
//leer datos de formularios
app.use(express.json())

app.use("/", router)
export { app }