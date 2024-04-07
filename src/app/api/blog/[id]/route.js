import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { id } = params;
  try {
    connectToDb();
    const post = await Post.findById(id);
    return NextResponse.json(post);
  } catch (error) {
    throw new Error("Failed to import Posts");
  }
};

export const DELETE = async (req, { params }) => {
  const { id } = params;
  try {
    connectToDb();
    const post = await Post.findByIdAndDelete(id);
    console.log("Post deleted successfully");
    return NextResponse.json(post);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete the post");
  }
};

// export const PUT = async (req: NextApiRequest, { params, body }) => {
//   const body2 = req.json();
//   console.log(body2);
//   const { slug } = params;
//   const { newData } = body;

//   // try {
//   //   connectToDb();
//   //   const post = await Post.findOneAndUpdate({ slug }, newData, { new: true }); // Corrected usage of findOneAndUpdate
//   //   return NextResponse.json(post);
//   // } catch (error) {
//   //   console.error(error);
//   //   throw new Error("Failed to update the post"); // Updated error message
//   // }
// };
