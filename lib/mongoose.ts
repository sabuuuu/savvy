import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if(!process.env.MONGODB_URI) return console.log("Missing MONGODB_URI");

    if(isConnected) return console.log("using existing connection");

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        isConnected = true;

        console.log("MongoDB connected")
    } catch (error) {
        console.log(error)
    }
} 