import express from "express";
import SModel from "./models/StudentModel.js";
import connectDB from "./utils/db.js";
import cors from "cors";
import dotenv from "dotenv";
import Testrouter from "./routes/student.js";

dotenv.config();
const app = express();

connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/test", Testrouter)


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running at port ${process.env.PORT || 3000}`);
})
