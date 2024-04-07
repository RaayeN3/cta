import { User } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { username } = params;
  try {
    connectToDb();
    const user = await User.findOne({ username });
    return NextResponse.json(user);
  } catch (error) {
    throw new Error("Failed to import user");
  }
};


export const DELETE = async (req, { params }) => {
  const { username } = params;
  try {
    connectToDb();
    const user = await User.findOneAndDelete({ username });
    return NextResponse.json(user);
  } catch (error) {
    throw new Error("Failed to import user");
  }
};
