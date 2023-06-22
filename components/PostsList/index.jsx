"use client";
import React, { useEffect, useState } from "react";
import Post from "@components/Post";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const PostsList = ({ postCount }) => {
  const [posts, setPosts] = useState([]);
  const supabase = createClientComponentClient();
  const getPosts = async () => {
    supabase
      .from("posts")
      .select("id, content, created_at, profiles(id, avatar, name)")
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        console.log("posts => ", data);
        if (!error) setPosts(data);
      });
  };
  useEffect(() => {
    getPosts();
  }, [postCount]);

  return (
    <>
      {posts.map((post) => (
        <Post
          userName={post.profiles.name}
          userAvatar={post.profiles.avatar}
          userId={post.author}
          postText={post.content}
          key={post.id}
        />
      ))}
    </>
  );
};

export default PostsList;
