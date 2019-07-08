import mongoose from "mongoose";
import UserSchema, { IUser, IUserModel } from "../schemas/User";

const addUser = async (email: string) => {
  const user = new User({ email });

  try {
    return await user.save();
  } catch (err) {
    console.error(err);
    throw new Error(`Could not add new user for email ${email}.`);
  }
};

UserSchema.statics.addUser = addUser;

const User = mongoose.model<IUser, IUserModel>("User", UserSchema);

export default User;
