import { Router } from 'express'
const router = Router()

//Routing
router.get("/", (req, res) => {
    res.send("Ruta principal")
})
router.get("/nosotros", (req, res) => {
    res.send("Nosotros")
})

export { router }