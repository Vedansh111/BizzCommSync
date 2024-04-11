import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile_no: {
        type: Number,
        required: true
    },
    address: {
        type: String,
    },
    bussiness_type: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    verified: {
        type: String,
        required: true,
    },
    role_id: {
        type: Number,
        required: true,
    },
    bussiness_id: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

export const User = new mongoose.model('user', userSchema);