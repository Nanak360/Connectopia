import Image from "next/image";
import React from "react";
import { User } from "react-feather";

const Avatar = ({ src, size = 48 }) => {
  return (
    <div>
      {src ? (
        <Image
          className="rounded-full overflow-hidden"
          src={src}
          width={size}
          height={size}
          alt="profile-pic"
        />
      ) : (
        <div className="bg-primary rounded-full p-0.5">
          <User size={size} color="#222831" />
        </div>
      )}
    </div>
  );
};

export default Avatar;
