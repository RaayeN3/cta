import React from "react";
import { getUser } from "@/lib/userData";
import Image from "next/image";

const UserAvatar = async ({ userId }) => {
  
  const user = await getUser(userId);

  return (
    <Image
      src={ user.avatar ? user.avatar :"/noavatar.png"}
      alt="user avatar"
      height={50}
      width={50}
      className="object-cover rounded-full"
    />

  );
};
export default UserAvatar;
