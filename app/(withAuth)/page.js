"use client";
import PostFormCard from "@components/PostFormCard";
import PostsList from "@components/PostsList";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Index({ params }) {
  const router = useRouter();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const supabase = createClientComponentClient();
  async function fetchSession(params) {
    const { data, error } = await supabase.auth.getSession();
    console.log(data);
    if (data?.session) {
      setUserLoggedIn(true);
      setUserId(data.session.user.id);
    } else {
      router.push("/login");
    }
  }
  useEffect(() => {
    fetchSession();
  }, []);

  return !userLoggedIn ? (
    <></>
  ) : (
    <div>
      <PostFormCard userId={userId} />
      <PostsList userId={userId} />
    </div>
  );
}
