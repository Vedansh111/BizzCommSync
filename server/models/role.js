import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
    type: {
        type: String,
    }
})

export const Role = new mongoose.model('role', roleSchema)