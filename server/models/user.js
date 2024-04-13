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
    bussiness: {
        type: Object,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    verified: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending',
    },
    role: {
        type: Object,
        required: true,
    },
}, { timestamps: true });

userSchema.methods.isVerified = function () {
    debugger
    if (this.role.type === "admin") {
        return true;
    } else {
        return this.verified === "accepted";
    }
}

export const User = new mongoose.model('user', userSchema);