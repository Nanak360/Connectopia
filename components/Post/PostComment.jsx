import Avatar from "@components/Avatar";
import React from "react";
import { Camera } from "react-feather";

const PostComment = () => {
  return (
    <div className="flex mt-4 gap-2 items-center">
      <Avatar src="/profile-pic.png" size={32} />
      <div className="relative border rounded-full grow">
        <textarea
          className="bg-transparent rounded-full h-10 p-2 px-4 block w-full"
          placeholder="Leave a comment"
        ></textarea>
        <button className="absolute top-2 right-4 text-tertiary100">
          <Camera />
        </button>
      </div>
    </div>
  );
};

export default PostComment;
