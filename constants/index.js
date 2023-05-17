import { Bell, Home, LogOut, Save, Users } from "react-feather";

const navList = [
  { displayName: "Home", link: "/", icon: Home, id: 0 },
  { displayName: "Friends", link: "/friends", icon: Users, id: 1 },
  { displayName: "Saved posts", link: "/saved", icon: Save, id: 2 },
  { displayName: "Notifications", link: "/notifications", icon: Bell, id: 3 },
  { displayName: "Logout", link: "/logout", icon: LogOut, id: 4 },
];

module.exports = {
  navList,
};
