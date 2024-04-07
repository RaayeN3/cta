"use client";
import { postPost } from "@/lib/action";
import BlurBackground from "../blurBackground/BlurBackground";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CreatePost = ({ onClose, refresh }) => {
  const router = useRouter();
  const handleSubmit = (e) =>{
    e.preventDefault();
    const myFormData = new FormData(e.target);
    postPost(myFormData)
    refresh()
  }
  

  useEffect(() => {
    onClose();
    refresh();
    router.refresh();
  }, [router]);

  return (
    <div className="text-black">
      <form
        className="flex flex-col"
        // onSubmit={postPost}
        id="createPostForm"
        onSubmit={handleSubmit}
      >
        <input type="text" name="title" placeholder="Title" />
        <input type="file" name="img" />
        <textarea placeholder="Add you description here" name="desc"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
