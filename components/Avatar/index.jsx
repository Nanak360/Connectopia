"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { User } from "react-feather";

const Avatar = ({ src, size = 48 }) => {
  const supabase = createClientComponentClient();
  const [userAvatar, setUserAvatar] = useState(src);
  async function fetchSession() {
    const { data } = await supabase.auth.getSession();
    if (data?.session) {
      supabase
        .from("profiles")
        .select()
        .eq("id", data.session.user.id)
        .then(({ data }) => setUserAvatar(data[0]?.avatar));
    }
  }
  useEffect(() => {
    fetchSession();
  }, []);

  return (
    <Link href={"/profile"} className="cursor-pointer">
      {src || userAvatar ? (
        <Image
          className="rounded-full overflow-hidden"
          src={src || userAvatar}
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
