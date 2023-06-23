"use client";
import React from "react";
import Card from "@components/Card";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostReaction from "./PostReaction";
import PostComment from "./PostComment";

const Post = ({
  userName,
  userAvatar,
  imgLink,
  postText,
  postCreationTime,
  photos,
}) => {
  return (
    <Card>
      <PostHeader
        userName={userName}
        userImage={userAvatar}
        postCreationTime={postCreationTime}
      />
      <PostContent photos={photos} content={postText} />
      <PostReaction likes={"12k"} comments={3212} shares={432} />
      <PostComment />
    </Card>
  );
};

export default Post;
