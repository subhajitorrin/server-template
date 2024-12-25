import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT: Number = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Server is Running!");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
