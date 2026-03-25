import mongoose from 'mongoose';
const MONGO_URI = process.env.MONGO_URI ||
    'mongodb://mg_user:mg_pass@localhost:27017/myapp?authSource=admin';
export async function connectDB() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB подключена:', mongoose.connection.name);
    } catch (err) {
        console.error('Ошибка подключения к MongoDB:', err.message);
        process.exit(1);
    }
}