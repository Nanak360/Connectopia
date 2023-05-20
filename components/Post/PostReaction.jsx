import React from "react";
import { Heart, MessageCircle, Share2 } from "react-feather";

const PostReaction = ({ likes, comments, shares }) => {
  return (
    <div className="mt-5 flex gap-6 items-center">
      <button className="flex gap-1 items-center">
        <Heart /> {likes}
      </button>
      <button className="flex gap-1 items-center">
        <MessageCircle /> {comments}
      </button>
      <button className="flex gap-1 items-center">
        <Share2 /> {shares}
      </button>
    </div>
  );
};

export default PostReaction;
