import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import userRoutes from "./routes/user.js";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use("/", userRoutes);

app.get("/", (req, res) => res.send("Hello World!"));
app.all("*", (req, res) => res.send("Route doesn't exist"));

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}!`)
);
