import { EventEmitter } from "events";
import userListeners from "./listeners/user";

export const userEvents = new EventEmitter();

userEvents.on("userAdded", userListeners.userAdded);
