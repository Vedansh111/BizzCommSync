import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
    type: {
        type: String,
        unique: true,
    }
})

export const Role = new mongoose.model('role', roleSchema)