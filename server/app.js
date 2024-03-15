import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

dotenv.config();

import { router } from "./src/router/user.route.js";

const app = express();
app.use(morgan("combined"));
app.use(cors());
app.use(express.json());

app.use("/api/users/", router);

app.listen(process.env.POST, () => {
  console.log(`Server is running on post ${process.env.POST}`);
});
