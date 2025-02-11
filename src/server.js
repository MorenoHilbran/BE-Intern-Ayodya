import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import classRoutes from "./routes/classRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/category", categoryRoutes);
app.use("/api/class", classRoutes);
app.use("/api/user", userRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
