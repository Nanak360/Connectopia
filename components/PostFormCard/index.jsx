import Avatar from "@components/Avatar";
import Card from "@components/Card";
import Image from "next/image";
import React from "react";
import { Map, Send, Share, Smile, User } from "react-feather";

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
        <div className="flex items-center gap-1">
          <div>
            <button className="hover:text-socialBlue100 hover:bg-tertiary300 flex items-center gap-1 rounded-3xl px-2 py-1 text-sm">
              <User size={16} />
              People
            </button>
          </div>
          <div>
            <button className="hover:text-socialBlue100 hover:bg-tertiary300 flex items-center gap-1 rounded-3xl px-2 py-1 text-sm">
              <Map size={16} />
              Check in
            </button>
          </div>
          <div>
            <button className="hover:text-socialBlue100 hover:bg-tertiary300 flex items-center gap-1 rounded-3xl px-2 py-1 text-sm">
              <Smile size={16} />
              Mood
            </button>
          </div>
        </div>
        <button className="flex items-center gap-1 bg-socialBlue300 hover:bg-socialBlue400 rounded-3xl px-6 py-2 text-sm place-self-end">
          <Send size={16} />
          Share
        </button>
      </div>
    </Card>
  );
};

export default PostFormCard;
