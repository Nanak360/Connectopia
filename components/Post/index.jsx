"use client";
import React, { useEffect, useState } from "react";
import Card from "@components/Card";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostReaction from "./PostReaction";
import PostComment from "./PostComment";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const Post = () => {
  const supabase = createClientComponentClient();
  const [userAvatar, setUserAvatar] = useState("");
  const [userName, setUserName] = useState("");
  async function fetchSession() {
    const { data } = await supabase.auth.getSession();
    if (data?.session) {
      supabase
        .from("profiles")
        .select()
        .eq("id", data.session.user.id)
        .then(({ data }) => {
          setUserAvatar(data[0]?.avatar);
          setUserName(data[0]?.name);
        });
    }
  }
  useEffect(() => {
    fetchSession();
  }, []);
  return (
    <Card>
      <PostHeader
        userName={userName}
        userImage={userAvatar}
        relativePostTime={"Two hours ago"}
      />
      <PostContent
        imgLink={
          "https://images.unsplash.com/photo-1521080755838-d2311117f767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1262&q=80"
        }
      />
      <PostReaction likes={"12k"} comments={3212} shares={432} />
      <PostComment />
    </Card>
  );
};

export default Post;
