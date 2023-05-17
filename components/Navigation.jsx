import { Bell, Home, LogOut, Save, Users } from "react-feather";
import Card from "./Card";

const Navigation = () => {
  return (
    <Card>
      <div className="p-3">
        <h2 className="text-4xl block text-socialBlue font-bold mb-4">
          Navigation
        </h2>
        <a className="text-xl flex items-center gap-3 p-4" href="/">
          <Home /> Home
        </a>
        <a className="text-xl flex items-center gap-3 p-4" href="/friends">
          <Users />
          Friends
        </a>
        <a className="text-xl flex items-center gap-3 p-4" href="/saved">
          <Save />
          Saved posts
        </a>
        <a
          className="text-xl flex items-center gap-3 p-4"
          href="/notifications"
        >
          <Bell />
          Notifications
        </a>
        <a className="text-xl flex  items-center gap-3 p-4" href="/logout">
          <LogOut />
          Logout
        </a>
      </div>
    </Card>
  );
};

export default Navigation;
