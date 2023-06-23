import Avatar from "@components/Avatar";
import React from "react";
import { Camera } from "react-feather";

const PostComment = () => {
  return (
    <div className="flex mt-4 gap-2 items-center">
      <Avatar src="" size={26} />
      <div className="relative border rounded-xl grow border-gray-500">
        <textarea
          className="bg-transparent rounded-xl text-sm h-8 px-4 py-1 block w-full"
          placeholder="Leave a comment"
          style={{
            resize: "none",
          }}
        ></textarea>
        <button className="absolute top-2 right-4 text-tertiary100">
          <Camera size={16} />
        </button>
      </div>
    </div>
  );
};

export default PostComment;
