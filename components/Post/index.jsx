import Avatar from "@components/Avatar";
import Card from "@components/Card";
import React from "react";

const Post = () => {
  return (
    <Card>
      <div className="flex gap-3">
        <div>
          <Avatar size={36} />
        </div>
        <div>
          <a className="font-semibold">Nanak Bandyopadhyay</a>
          <p className="text-gray-500 text-sm">Two hours ago</p>
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
    </Card>
  );
};

export default Post;
