import { User } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    connectToDb();
    const users = await User.find();
    return NextResponse.json(users);
  } catch (error) {
    throw new Error("Failed to import users");
  }
};

export const POST = async (req) => {
  const user = await req.formData();

  const newUser = {
    username: user.get("username"),
    email: user.get("email"),
    avatar: user.get("avatar"),
  };
  console.log(newUser);
  const theUser = await User.create(newUser);
  return NextResponse.json(theUser);
};

