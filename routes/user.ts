import express, { Request, Response } from "express";
import { userEvents } from "../emitters";
import User from "../models/user";

const router = express.Router();

router.get("/", async (_: Request, res: Response) => {
  const r = Math.floor(Math.random() * 100);
  const email = `doge${r}@gmail.com`;

  try {
    const user = await User.addUser(email);
    userEvents.emit("userAdded", email);
    return res.send({ user });
  } catch (err) {
    return res.status(500).send({ message: "Could not create user." });
  }
});

export default router;
