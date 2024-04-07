"use client";

import Image from "next/image";
import Link from "next/link";
import { deletePost } from "@/lib/action";

const PostCard = ({ post, index, userId, refresh }) => {
  return (
    <div className="flex flex-col gap-4 " key={index}>
      <div className="bg-slate-700  rounded-2xl  p-5">
        <div className="flex bg-white rounded-2xl">
          <div className="flex-1 ">
            <Image
              alt="post img"
              src={`/${post.img != "undefined" ? post.img : "no_image.png"}`}
              width={640}
              height={900}
              className="rounded-bl-2xl rounded-tl-2xl"
            />
          </div>
          <span
            className="text-bg justify-center flex m-3 text-sm"
            style={{
              writingMode: "vertical-rl",
            }}
          >
            {new Date(post.createdAt).toISOString().slice(0, 10)}
          </span>
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <h1 className=" text-2xl font-bold">{post.title}</h1>
          <p className=" text-sm text-gray-500">{post.desc}</p>
          <div className="flex justify-between ">
            <Link href={`/blog/${post._id}`} className=" uppercase underline">
              Read more
            </Link>
            {post.userId == userId && (
              <button
                className="text-red-500"
                onClick={() => {
                  deletePost(post._id.valueOf());
                  refresh();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
