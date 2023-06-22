"use client";
import Avatar from "@components/Avatar";
import PostDropdown from "@components/PostDropdown";
import { postMoreButtonOptions } from "@constants";
import Link from "next/link";
import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";
import ReactTimeAgo from "react-time-ago";

const PostHeader = ({ userName, userImage, postCreationTime }) => {
  const [openMore, setOpenMore] = useState(false);
  return (
    <div className="flex gap-3">
      <div>
        <Avatar src={userImage} size={36} />
      </div>
      <div className="grow">
        <Link href={"/profile/"}>
          <span className="font-semibold hover:underline cursor-pointer">
            {userName}
          </span>
        </Link>
        <p className="text-gray-500 text-sm">
          <ReactTimeAgo date={postCreationTime} />
        </p>
      </div>
      <div>
        <button onClick={() => setOpenMore((prev) => !prev)}>
          <MoreHorizontal />
        </button>
        <PostDropdown
          itemsList={postMoreButtonOptions}
          openDropdown={openMore}
        />
      </div>
    </div>
  );
};

export default PostHeader;
