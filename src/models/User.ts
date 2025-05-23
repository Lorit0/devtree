
interface IUser {
    name: String
    email: String
    password: String
}
import mongoose, { Schema } from 'mongoose'
let userSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
})

const User = mongoose.model<IUser>("User", userSchema)

export { User }