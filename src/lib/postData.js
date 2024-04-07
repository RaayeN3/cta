"use server";
import { Post } from "./models";

import { connectToDb } from "./utils";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post?.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get posts");
  }
};

export const getPost = async (id) => {
  try {
    connectToDb();
    const post = await Post.findById(id);
    return post
  } catch (error) {}
};
