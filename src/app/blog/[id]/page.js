import { Suspense } from "react";
import UserAvatar from "@/components/userAvatar/UserAvatar";
import PostUser from "@/components/postUser/PostUser";
import Image from "next/image";
import { getPost } from "@/lib/postData";

const SinglePost = async ({ params }) => {
  const { id } = params;
  const post = await getPost(id);
  return (
    <div className="flex max-lg:flex-col lg:grid-cols-2 gap-8 ">
      <div className="flex-1 flex-col gap-8 flex">
        <h1 className="text-6xl">{post.title}</h1>
        {/*mongodb+srv://RayeN3:y23VR3x4zeJDdfXm@cluster0.naobzce.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 */}
        <div className="flex gap-5 items-center">
          <Suspense fallback={<span>Loading Image..</span>}>
            <UserAvatar userId={post.userId} key={post.id} />
          </Suspense>
          <div className="flex flex-col gap-2">
            <span className="text-gray-500 font-bold">Author</span>
            <Suspense fallback={<span>Loading..</span>}>
              <PostUser userId={post.userId} key={post.id} />
            </Suspense>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-gray-500 font-bold">Published</span>
            <span className="font-medium">
              {new Date(post.createdAt).toISOString().slice(0, 10)}
            </span>
          </div>
        </div>
        <div className="text-lg">{post.desc}</div>
      </div>

      <div className=" flex-1 ">
        {post.img != "undefined" && (
          <Image
            src={`/${post.img}`}
            alt="post image"
            width={1200}
            height={800}
            className="rounded-2xl bg-white"
          />
        )}
      </div>
    </div>
  );
};

export default SinglePost;
