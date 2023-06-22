"use client";
import Avatar from "@components/Avatar";
import Card from "@components/Card";
import HorizontalIconsPanel from "@components/HorizontalIconsPanel";
import React, { useState } from "react";
import { Send } from "react-feather";
import { createPostOptions } from "@constants";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const PostFormCard = ({ userId, setPostsSinceLogin }) => {
  const supabase = createClientComponentClient();
  const [content, setContent] = useState("");
  const createPost = async () => {
    if (userId)
      await supabase
        .from("posts")
        .insert({
          author: userId,
          content,
        })
        .then(({ data, error }) => {
          if (!error) {
            setContent("");
            setPostsSinceLogin((pre) => pre + 1);
          }
        });
  };
  return (
    <Card>
      <div className="flex gap-4">
        <Avatar></Avatar>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="grow mt-1 bg-transparent"
          placeholder={`What's on your mind?`}
        />
      </div>
      <div className="flex items-center justify-between mt-2">
        <HorizontalIconsPanel options={createPostOptions} isButton={true} />
        <button
          onClick={createPost}
          className="flex items-center gap-1 bg-socialBlue300 hover:bg-socialBlue400 rounded-3xl px-6 py-2 text-sm place-self-end"
        >
          <Send size={16} />
          Share
        </button>
      </div>
    </Card>
  );
};

export default PostFormCard;
