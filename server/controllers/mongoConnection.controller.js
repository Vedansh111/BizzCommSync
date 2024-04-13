import mongoose from 'mongoose';

export async function connectMongoDb(url) {
    return mongoose.connect(url).then(() => {
        console.log('Mongoose Connected...');
    }).catch((err) => {
        console.log("Mongoose err:", err);
    });
}