import Image from "next/image";
import Link from "next/link";
import React from "react";
import { User } from "react-feather";

const Avatar = ({ src, size = 48 }) => {
  return (
    <Link href={"/profile"} className="cursor-pointer">
      {src ? (
        <Image
          className="rounded-full overflow-hidden"
          src={src}
          width={size}
          height={size}
          alt="profile-pic"
        />
      ) : (
        <div className="bg-primary rounded-full p-0.5 w-fit">
          <User size={size} color="#222831" />
        </div>
      )}
    </Link>
  );
};

export default Avatar;
