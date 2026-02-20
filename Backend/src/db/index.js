import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
    if (isConnected) {
        console.log("Using existing database connection");
        return; // Use existing connection
    }

    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
        isConnected = connectionInstance.connections[0].readyState === 1;
        console.log(`Connection to the database is succesfull!! DB Host: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log(`MongoDB connection error: ${error}`);
        // Only exit process in local dev
        if (process.env.NODE_ENV !== 'production') {
            process.exit(1);
        }
    }
}

export default connectDB;