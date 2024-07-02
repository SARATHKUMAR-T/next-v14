import { Document } from "mongodb";

export interface IUser extends Document {
  email: String
}