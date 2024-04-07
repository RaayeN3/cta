"use client";
import BlurBackground from "@/components/blurBackground/BlurBackground";
import { useState } from "react";
import CreatePost from "../createPost/CreatePost";
import { useRouter } from "next/navigation";

const AddButton = ({ refresh }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(true);
  };
  const onClose = () => {
    setShow(false);
  };
  return (
    <div className="flex items-center justify-center ">
      <BlurBackground show={show} onClose={onClose}>
        <CreatePost onClose={onClose} refresh={refresh} />
      </BlurBackground>
      <button
        onClick={handleClick}
        className=" w-96 h-80 bg-blue-800 flex items-center justify-center rounded-3xl hover:bg-blue-500 transition duration-75 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-20 h-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </div>
  );
};
export default AddButton;
