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
        <User size={size} />
      )}
    </div>
  );
};

export default Avatar;
