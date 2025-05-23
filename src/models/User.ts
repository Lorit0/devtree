import { Schema } from 'mongoose'
let userSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
})