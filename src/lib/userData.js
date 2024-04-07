import { connectToDb } from "./utils";
import { User } from "./models";

export const getUser = async ({username}) => {
  try {
    connectToDb();
    const user = await User.findOne(username)
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
