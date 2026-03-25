import express from 'express';
import mongoose from 'mongoose';
import { connectDB } from './config/db.js';
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Сервер: http://localhost:${PORT}`);
    });
});
mongoose.connection.on('error', (err) => {
    console.error('Ошибка MongoDB:', err.message);
});
mongoose.connection.on('disconnected', () => {
    console.warn('MongoDB отключена');
});