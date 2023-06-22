"use client";
import PostFormCard from "@components/PostFormCard";
import PostsList from "@components/PostsList";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UserContext } from "@contexts/UserContext";

export default function Index({ params }) {
  const router = useRouter();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState({});
  const [postsSinceLogin, setPostsSinceLogin] = useState(0);
  const supabase = createClientComponentClient();
  async function fetchSession(params) {
    const { data, error } = await supabase.auth.getSession();
    console.log(data);
    if (data?.session) {
      setUserLoggedIn(true);
      setUserId(data.session.user.id);
      supabase
        .from("profiles")
        .select()
        .eq("id", data.session.user.id)
        .then((res) => {
          if (res.data.length) {
            setUser(res.data[0]);
          }
        });
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
      <UserContext.Provider value={{ user }}>
        <PostFormCard setPostsSinceLogin={setPostsSinceLogin} />
        <PostsList postCount={postsSinceLogin} />
      </UserContext.Provider>
    </div>
  );
}
