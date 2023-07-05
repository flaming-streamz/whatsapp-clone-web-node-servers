import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRouter from "./routes/AuthRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);

const port = process.env.PORT || 9000;
const server = app.listen(port, () => {
  console.log("server running");
});
