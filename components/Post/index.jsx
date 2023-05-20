"use client";
import Avatar from "@components/Avatar";
import Card from "@components/Card";
import {
  Camera,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Share2,
} from "react-feather";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostReaction from "./PostReaction";

const Post = () => {
  return (
    <Card>
      <PostHeader
        userName={"Nanak Bandyopadhyay"}
        userImage={"/profile-pic.png"}
        relativePostTime={"Two hours ago"}
      />
      <PostContent
        imgLink={
          "https://images.unsplash.com/photo-1521080755838-d2311117f767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1262&q=80"
        }
      />
      <PostReaction likes={"12k"} comments={3212} shares={432} />
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
    </Card>
  );
};

export default Post;
