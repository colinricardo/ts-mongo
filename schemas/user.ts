import { Document, Model, Schema } from "mongoose";

export interface IUser extends Document {
  email: string;
}

export interface IUserModel extends Model<IUser> {
  addUser(email: string): void;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
});

export default UserSchema;
