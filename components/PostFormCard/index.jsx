import Avatar from "@components/Avatar";
import Card from "@components/Card";
import HorizontalIconsPanel from "@components/HorizontalIconsPanel";
import Image from "next/image";
import React from "react";
import { Send } from "react-feather";
import { createPostOptions } from "@constants";

const PostFormCard = () => {
  return (
    <Card>
      <div className="flex gap-4">
        <Avatar src="/profile-pic.png"></Avatar>
        <textarea
          className="grow mt-1 bg-transparent"
          placeholder={"What's on your mind Nanak?"}
        />
      </div>
      <div className="flex items-center justify-between mt-2">
        <HorizontalIconsPanel options={createPostOptions} />
        <button className="flex items-center gap-1 bg-socialBlue300 hover:bg-socialBlue400 rounded-3xl px-6 py-2 text-sm place-self-end">
          <Send size={16} />
          Share
        </button>
      </div>
    </Card>
  );
};

export default PostFormCard;
