import colors from 'colors'
import mongoose from 'mongoose'
import { dbURL } from './config'

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(dbURL)

        console.log(colors.cyan.bold.bgCyan(`Mongodb Conectado en: ${connection.host}`))
    } catch (error) {
        console.log(colors.bgRed.white.bold(error.message))

    }
}