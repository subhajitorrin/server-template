import express, { Application, Request, Response } from "express";
import router from "./routes/route";

const app: Application = express();
const PORT: Number = 3000;

app.use(express.json());

app.use("/", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is Running!");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
