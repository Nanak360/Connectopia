"use client";
import React, { useEffect, useState, useContext } from "react";
import Post from "@components/Post";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { UserContext } from "@contexts/UserContext";

const PostsList = ({ postCount }) => {
  const [posts, setPosts] = useState([]);
  const supabase = createClientComponentClient();
  const { user } = useContext(UserContext);
  const getPosts = async () => {
    supabase
      .from("posts")
      .select("id, content, created_at, photos, profiles(id, avatar, name)")
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
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
          postCreationTime={post.created_at}
          photos={post.photos || []}
        />
      ))}
    </>
  );
};

export default PostsList;
