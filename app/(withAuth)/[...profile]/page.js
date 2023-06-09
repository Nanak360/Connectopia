"use client";
import react, { useEffect, useState } from "react";
import Card from "@components/Card";
import FriendInfo from "@components/FriendInfo";
import Post from "@components/Post";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { UserContext } from "@contexts/UserContext";
import ProfileHeader from "@components/Profile";

export default function Profile({ params }) {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const { profile } = params;
  async function fetchSession(params) {
    const { data, error } = await supabase.auth.getSession();
    if (data?.session) {
      setUserLoggedIn(true);
      supabase
        .from("profiles")
        .select()
        .eq("id", data.session.user.id)
        .then((res) => {
          console.log("res", res);
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

  const isPosts =
    (Array.isArray(profile) &&
      profile.length === 1 &&
      profile[0] === "profile") ||
    (profile.includes("posts") && profile.includes("profile"));
  const isAbout = profile.includes("about") && profile.includes("profile");
  const isFriends = profile.includes("friends") && profile.includes("profile");
  const isPhotos = profile.includes("photos") && profile.includes("profile");
  return (
    <UserContext.Provider value={{ user }}>
      <div>
        <ProfileHeader />
        {isPosts && <Post />}
        {isAbout && (
          <Card>
            <h2 className="text-2xl mb-2 font-bold">About me</h2>
            <p className="mb-2 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
              aut quia earum, libero aperiam a maiores! Sapiente officia minus
              facere atque, modi earum quas pariatur error illum beatae sit
              magnam!
            </p>
            <p className="text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
              aut quia earum, libero aperiam a maiores! Sapiente officia minus
              facere atque, modi earum quas pariatur error illum beatae sit
              magnam!
            </p>
          </Card>
        )}
        {isFriends && (
          <Card>
            <h2 className="text-2xl mb-2 font-bold">Friends</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
              <FriendInfo />
              <FriendInfo />
              <FriendInfo />
              <FriendInfo />
              <FriendInfo />
              <FriendInfo />
              <FriendInfo />
              <FriendInfo />
              <FriendInfo />
            </div>
          </Card>
        )}

        {isPhotos && (
          <Card>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="h-48 shadow-md rounded-md overflow-hidden flex items-center">
                <img src="https://images.unsplash.com/photo-1459664018906-085c36f472af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
              </div>
              <div className="h-48 shadow-md rounded-md overflow-hidden flex items-center">
                <img src="https://images.unsplash.com/photo-1521729839347-131a32f9abcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2097&q=80" />
              </div>
              <div className="h-48 shadow-md rounded-md overflow-hidden flex items-center">
                <img src="https://images.unsplash.com/photo-1521080755838-d2311117f767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1262&q=80" />
              </div>
              <div className="h-48 shadow-md rounded-md overflow-hidden flex items-center">
                <img src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" />
              </div>
            </div>
          </Card>
        )}
      </div>
    </UserContext.Provider>
  );
}
