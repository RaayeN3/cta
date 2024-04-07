import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import { join } from "path";

export const GET = async (req) => {
  try {
    connectToDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    throw new Error("Failed to import Posts");
  }
};

export const POST = async (req) => {
  const data = await req.formData();
  const img = data.get("img");
  const bytes = await img.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path = join(__dirname,img.name);
  await writeFile(path, buffer);
  console.log(`open ${path} to see the uploaded file`);
  return NextResponse.json({ success: true });
  
};


// try {
  //   connectToDb();
  //   const post = await req.formData();

  //   const newPost = {
  //     title: post.get("title"),
  //     desc: post.get("desc"),
  //     img: post.get("img").name,
  //     userId: post.get("userId"),
  //   };
  //   const thePost = await Post.create(newPost);

  //   return NextResponse.json(thePost);
  // } catch (error) {
  //   console.error("Failed to create Post:", error);
  //   return NextResponse.error(new Error("Failed to create Post"));
  // }
