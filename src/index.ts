import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { dbClient } from "@db/client";

//Intializing the express app
const app = express();

//Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

//
app.get("/todo", async (req, res, next) => {
  try {
    const results = await dbClient.query.todoTable.findMany();
    console.log(results);
    res.json(results);
  } catch (err) {
    next(err);
  }
});

// JSON Error Middleware
const jsonErrorHandler = (err, req, res, next) => {
  res.status(500).send({ error: err });
};
app.use(jsonErrorHandler);

// Running app
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Listening on port ${PORT}`);
});
