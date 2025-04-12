import mongoose from "mongoose";

const connectDB = (uri) => {
    try {
        mongoose.connect(uri).then(
            console.log("MONGODB CONNECTED!")
        )
    } catch (error) {
        throw new Error("Error While Connecting to MongoDB");
    }
}

export default connectDB;