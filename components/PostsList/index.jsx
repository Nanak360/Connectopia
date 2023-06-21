"use client";
import React, { useEffect, useState } from "react";
import Post from "@components/Post";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const PostsList = ({}) => {
  const [posts, setPosts] = useState([]);
  const supabase = createClientComponentClient();
  const getPosts = async () => {
    supabase
      .from("posts")
      .select()
      .then(({ data, error }) => {
        if (!error) setPosts(data);
      });
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <Post userId={post.author} postText={post.content} key={post.id} />
      ))}
    </>
  );
};

export default PostsList;
