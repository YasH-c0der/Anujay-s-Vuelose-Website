import app from '../Backend/index.js';
import connectDB from '../Backend/src/db/index.js';

export default async (req, res) => {
    await connectDB();
    return app(req, res);
};