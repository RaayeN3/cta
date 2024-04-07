import React from "react"; // Import React if not already imported
import { getUser, getUsers } from "@/lib/userData";

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);
  return <span className="font-medium">{user.username}</span>;

};

export default PostUser;
