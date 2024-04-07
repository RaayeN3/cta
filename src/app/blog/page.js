import AddButton from "@/components/addButton/AddButton";

import CreatePost from "@/components/createPost/CreatePost";
import PostCard from "@/components/postCard/PostCard";
import Posts from "@/components/posts/Posts";
import { auth } from "@/lib/auth";

import { getPosts } from "@/lib/postData";
import { getUser } from "@/lib/userData";

const Blog = async () => {
  const posts = await getPosts()
  const session = await auth();
  const userId = session.user.name
    ? (await getUser(session.user.name))._id.valueOf()
    : session.user.id;
  return (
    <Posts posts={posts} userId={userId}/>
  );
};
export default Blog;
