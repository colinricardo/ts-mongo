import bodyParser from "body-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import environment from "./config/environment";
import "./mongoose";
import userRouter from "./routes/user";

const { CORS_ORIGIN_WHITELIST, PORT } = environment;

const corsOptions = {
  origin(origin: any, callback: any) {
    if (CORS_ORIGIN_WHITELIST.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error(`Not allowed by CORS`));
    }
  },
};

const app = express();

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use("/user", userRouter);

app.get(`/`, (_: Request, res: Response) => {
  return res.send({ status: `ok` });
});

app.use((_: Request, res: Response) => {
  return res.status(404).send({ message: "Not found!" });
});

app.listen(PORT, () => {
  return console.log(`Server started on port ${PORT} 🎉`);
});

export default app;
