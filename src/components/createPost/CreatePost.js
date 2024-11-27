"use client";
import { postPost } from "@/lib/action";
import BlurBackground from "../blurBackground/BlurBackground";
import { useFormState } from "react-dom";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CreatePost = ({ refresh }) => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const myFormData = new FormData(e.target);
    postPost(myFormData);
<<<<<<< HEAD
    refresh();
  };

  useEffect(() => {
    onClose();
    refresh();
    router.refresh();
  }, [onClose, refresh, router]);
=======
    refresh()
  };
>>>>>>> 59c6d10a962fe9055df909adbc58fdadfcc911c3

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
