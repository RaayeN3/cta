"use client";
import { useRouter } from "next/navigation";
import AddButton from "../addButton/AddButton";

import PostCard from "../postCard/PostCard";

const Posts = ({ posts , userId }) => {
  const router = useRouter();
  const refresh = () => router.refresh();
  // console.log(posts)
  return (
    <div>
      <div className="grid lg:grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-16">
        {posts.map((post, index) => (
          <PostCard post={post} key={index} userId={userId} refresh={refresh} />
        ))}
        <AddButton refresh={refresh} />
      </div>
    </div>
  );
};

export default Posts;
