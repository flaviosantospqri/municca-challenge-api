import express from "express";
import { router } from "./routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("Running Server");
});
