import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/dbClass1`);
        console.log("MongoDB is connected");
    }
    catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;
