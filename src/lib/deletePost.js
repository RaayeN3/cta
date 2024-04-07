"use server";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const deletePost = async (postId) => {
  try {
    connectToDb();
    await Post.findByIdAndDelete(postId);
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: false };
  }
};
