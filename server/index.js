import express from 'express';
import multer from 'multer';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { router } from './routes/user.routes.js';
import { handleUserLogin } from './controllers/user.controller.js';
import { connectMongoDb } from './controllers/mongoConnection.controller.js';
// import { user_router } from './routes/url.js';

const app = express();
const upload = multer();
// Connection :
connectMongoDb('mongodb://127.0.0.1:27017/BizzCommSync');

// Middleware :
app.use(upload.any()); //  For form-data
app.use(express.urlencoded({ extended: false })); // For x-www-form-urlencoded  
app.use(cors({
    origin: "http://localhost:9000",
    credentials: true,
})); // Need Cors
app.use(cookieParser()); // Need CookieParser

// Routes :
app.use("/login", handleUserLogin);
app.use("/api/users", router);

app.listen(8000, () => console.log("Server started at 8000!"));