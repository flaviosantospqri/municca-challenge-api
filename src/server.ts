import express from "express";
import { router } from "./routes";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://localhost:5173",
    "http://127.0.0.1:3000",
    "*",
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.listen(3000, () => {
  console.log("Running Server");
});
