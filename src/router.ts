import { Router } from 'express'
const router = Router()

/* Autenticación y registro */
router.post("/auth/register", (req, res) => {
    const { name, email } = req.body
    console.log(name, email)
})

export { router }