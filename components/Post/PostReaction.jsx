import React from "react";
import { Heart, MessageCircle, Share2 } from "react-feather";

const PostReaction = ({ likes, comments, shares }) => {
  return (
    <div className="mt-5 flex gap-6 items-center">
      <button className="flex text-sm text-gray-400 gap-1 items-center">
        <Heart size={16} /> {likes}
      </button>
      <button className="flex text-sm text-gray-400 gap-1 items-center">
        <MessageCircle size={16} /> {comments}
      </button>
      <button className="flex text-sm text-gray-400 gap-1 items-center">
        <Share2 size={16} /> {shares}
      </button>
    </div>
  );
};

export default PostReaction;
