"use client";
import React, { useEffect, useState } from "react";
import Card from "@components/Card";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostReaction from "./PostReaction";
import PostComment from "./PostComment";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const Post = ({
  userName,
  userAvatar,
  imgLink,
  postText,
  postCreationTime,
}) => {
  return (
    <Card>
      <PostHeader
        userName={userName}
        userImage={userAvatar}
        relativePostTime={"Two hours ago"}
      />
      <PostContent imgLink={imgLink} content={postText} />
      <PostReaction likes={"12k"} comments={3212} shares={432} />
      <PostComment />
    </Card>
  );
};

export default Post;
