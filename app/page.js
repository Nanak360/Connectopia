import Avatar from "@components/Avatar";
import Navigation from "@components/Navigation";
import Post from "@components/Post";
import PostFormCard from "@components/PostFormCard";

export default function Index() {
  return (
    <div className="flex gap-6">
      <div className="w-1/4">
        <Navigation />
      </div>
      <div className="w-3/4">
        <PostFormCard />
        <Post />
      </div>
    </div>
  );
}
