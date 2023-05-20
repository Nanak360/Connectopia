import Avatar from "@components/Avatar";
import React from "react";

const FriendInfo = () => {
  return (
    <div className="flex items-center gap-3 p-4 rounded-lg shadow-md border-tertiary200 border">
      <Avatar size={40} />
      <div className="flex flex-col">
        <span className="font-bold">Binod Babaji</span>
        <span className="text-sm text-gray-400 leading-4">
          5 mutual friends
        </span>
      </div>
    </div>
  );
};

export default FriendInfo;
