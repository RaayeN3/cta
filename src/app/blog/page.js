import AddButton from "@/components/addButton/AddButton";
import CreatePost from "@/components/createPost/CreatePost";
import PostCard from "@/components/postCard/PostCard";
import Posts from "@/components/posts/Posts";
import { auth } from "@/lib/auth";
import { getPosts } from "@/lib/postData";
import { getUser } from "@/lib/userData";

const Blog = async () => {
  const posts = await getPosts();
  const session = await auth();
  let userId;

  if (session.user.name) {
    const user = await getUser(session.user.name);
    userId = user._id.toString(); // Convert object ID to string
  } else {
    userId = session.user.id;
  }

  // Convert MongoDB documents to plain JavaScript objects
  const plainPosts = posts.map(post => {
    return JSON.parse(JSON.stringify(post));
  });



  return (
    <Posts posts={plainPosts} userId={userId} /> // Pass userId as a string
  );
};

export default Blog;
