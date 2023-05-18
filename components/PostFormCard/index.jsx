import Card from "@components/Card";
import Image from "next/image";
import React from "react";

const PostFormCard = () => {
  return (
    <Card>
      <div className="flex gap-2">
        <div className="">
          <Image
            className="rounded-full overflow-hidden"
            src="/profile-pic.png"
            width="64"
            height="64"
            alt="profile-pic"
          />
        </div>
        <textarea
          className="grow p-3 bg-transparent"
          placeholder={"What's on your mind Nanak"}
        />
      </div>
    </Card>
  );
};

export default PostFormCard;
