"use client";
import React, { useContext } from "react";
import Avatar from "@components/Avatar";
import Card from "@components/Card";
import HorizontalIconsPanel from "@components/HorizontalIconsPanel";
import { profileViewOptions } from "@constants";
import { UserContext } from "@contexts/UserContext";

const ProfileHeader = () => {
  const { user } = useContext(UserContext);
  console.log("userProfile ", user);
  return (
    <Card noPadding={true}>
      <div className="relative">
        <div className="h-36 overflow-hidden flex justify-center items-center rounded-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1521729839347-131a32f9abcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2097&q=80"></img>
        </div>
        <div className="absolute top-28 left-4">
          <Avatar src={user.avatar} size={120} />
        </div>
        <div className="px-4 py-3 ">
          <div className="ml-32">
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <span className="text-md text-gray-400 leading-4">
              Kolkata, India
            </span>
          </div>
          <div className="mt-10">
            <HorizontalIconsPanel
              isButton={false}
              options={profileViewOptions}
              fullWidth
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileHeader;
