import Post from "@components/Post";
import PostFormCard from "@components/PostFormCard";

export default function Index({ params }) {
  return (
    <div>
      <PostFormCard />
      <Post />
    </div>
  );
}
