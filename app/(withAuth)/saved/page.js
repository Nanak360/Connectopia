import Post from "@components/Post";
import React from "react";

const SavedPostsPage = () => {
  return (
    <div>
      <h1 className="text-5xl mb-6 text-gray-400">Saved posts</h1>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default SavedPostsPage;
