import { User } from "../models/User"
import { Request, Response } from 'express'

export const createAccount = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ msg: "Usuario ya registrado" });
        }

        const user = new User(req.body);
        await user.save();

        return res.status(201).json({ msg: "Registro creado" });
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        return res.status(500).json({ msg: "Error del servidor" });
    }
};