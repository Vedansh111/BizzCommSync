import mongoose from 'mongoose';

const bussinessSchema = new mongoose.Schema({
    type: {
        type: String,
        unique: true,
    }
})

export const Bussiness = new mongoose.model('bussiness', bussinessSchema)