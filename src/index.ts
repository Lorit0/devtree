import express from "express"
const app = express()

//Routing
app.get("/", (req, res) => {
    res.send("Servidor funcionando")
})
app.get("/ecommerce", (req, res) => {
    res.send("Este es el ecommerce 22")
})
app.get("Blog", (req, res) => {
    res.send("Este es el blog")
})

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log("Servidor Activo en el puerto: " + port)
})
