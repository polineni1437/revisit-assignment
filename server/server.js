import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./db/dbconfig.js";
import userRoutes from "./routes/UserRoutes.js"
import categoryRoutes from "./routes/CategoryRoutes.js"

const app = express();

app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use("/uploads", express.static("uploads"));

app.use('/api/auth', userRoutes);
app.use('/api/categories', categoryRoutes);

app.get('/', (req,res) => {
    console.log("SERVER RUNNING");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    connectDB(process.env.MONGODB_URI);
    console.log("SERVER RUNNING ON PORT", PORT);
});