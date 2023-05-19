"use client";
import Avatar from "@components/Avatar";
import Card from "@components/Card";
import PostDropdown from "@components/PostDropdown";
import React, { useState } from "react";
import {
  Camera,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Share2,
} from "react-feather";
import { postMoreButtonOptions } from "@constants";

const Post = () => {
  const [openMore, setOpenMore] = useState(false);
  return (
    <Card>
      <div className="flex gap-3">
        <div>
          <Avatar size={36} />
        </div>
        <div className="grow">
          <a className="font-semibold">Nanak Bandyopadhyay</a>
          <p className="text-gray-500 text-sm">Two hours ago</p>
        </div>
        <div>
          <button onClick={() => setOpenMore((prev) => !prev)}>
            <MoreHorizontal />
          </button>
          <PostDropdown
            itemsList={postMoreButtonOptions}
            openDropdown={openMore}
          />
        </div>
      </div>
      <div>
        <p className="my-3 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt aut
          quia earum, libero aperiam a maiores! Sapiente officia minus facere
          atque, modi earum quas pariatur error illum beatae sit magnam!
        </p>
        <div className="rounded-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"></img>
        </div>
      </div>
      <div className="mt-5 flex gap-6 items-center">
        <button className="flex gap-1 items-center">
          <Heart /> 1.2k
        </button>
        <button className="flex gap-1 items-center">
          <MessageCircle /> 221
        </button>
        <button className="flex gap-1 items-center">
          <Share2 /> 91
        </button>
      </div>
      <div className="flex mt-4 gap-2 items-center">
        <Avatar size={32} />
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
    </Card>
  );
};

export default Post;
