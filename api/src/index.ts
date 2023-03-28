import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { AppDataSource } from "./data-source";
import cors from "cors";
import { authRoutes } from "./routes";

const app = express();
app.use(express.json());
app.use(cors());

// route
app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/users");

const PORT = process.env.PORT || 4000;
// app data init
AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, () => {
      console.log(`Server is running at ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
