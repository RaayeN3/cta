"use server";
import { useRouter } from "next/navigation";
import { auth, signIn, signOut } from "./auth";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { getUser } from "./userData";
import { join } from "path";
import { writeFile } from "fs/promises";
import multer from "multer";

export const handleGoogleLogin = async () => {
  await signIn("google");
};

export const handleLogout = async () => {
  await signOut();
};

export const handleRegister = async (previousState, formData) => {
  const { username, email, password, passwordRepeat, img } =
    Object.fromEntries(formData);
  if (password !== passwordRepeat) return { error: "passwords do not match" };
  try {
    await connectToDb();
    const user = await User.findOne({ username: username });
    if (user) return { error: "username already exists" };

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
      avatar: img,
    });
    await newUser.save();
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const handleLogin = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);
    if (err.message.includes("Invalid credentials")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};

export const postPost = async (formData) => {
  const { title, desc, img } = Object.fromEntries(formData.entries());

  try {
    const session = await auth();
    const bytes = await img?.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const path = join(process.cwd(), "public", img.name);
    await writeFile(path, buffer);
    const userId = session.user.name
      ? (await getUser(session.user.name))._id.valueOf()
      : session.user.id;
    const newPost = new Post({
      title,
      desc,
      img: img?.name,
      userId,
    });
    await newPost.save();
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "something went wrong" };
  }
};

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
