import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { AppDataSource } from "./data-source";
import cors from "cors";
import { authRoutes } from "./routes";
import http from "http";
import morgan from "morgan";
import { SocketServer } from "./socket";

/**
 * Middleware start
 */
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
/**
 * Middleware end
 */

/**
 *
 * Api all routes start
 *
 */
app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/users");
/**
 *
 * Api all routes end
 *
 */

/**
 * init socket server start
 */
const server = http.createServer(app);
new SocketServer(server);
/**
 * init socket server end
 */
// app data init
const PORT = process.env.PORT || 4000;
AppDataSource.initialize()
  .then(async () => {
    server.listen(PORT, () => {
      console.log(`Server is running at ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
