import express from "express";
import mongoose from "mongoose";
import {config} from "dotenv";
import collectionRoutes from "./routes/collection.routes.js";
import coinRoutes from "./routes/coin.routes.js";


config();

const app = express();
app.use(express.json());
app.use("/collections", collectionRoutes);
app.use("/coins", coinRoutes);

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB ulandi ✅");
    app.listen(PORT, () => {
      console.log(`Server ${PORT}-portda ishga tushdi 🚀`);
    });
  })