import {
  AlertTriangle,
  Bell,
  Bookmark,
  Delete,
  EyeOff,
  Home,
  LogOut,
  Save,
  Users,
} from "react-feather";

const navList = [
  { displayName: "Home", link: "/", icon: Home, id: 0 },
  { displayName: "Friends", link: "/friends", icon: Users, id: 1 },
  { displayName: "Saved posts", link: "/saved", icon: Save, id: 2 },
  { displayName: "Notifications", link: "/notifications", icon: Bell, id: 3 },
  { displayName: "Logout", link: "/logout", icon: LogOut, id: 4 },
];

const postMoreButtonOptions = [
  { id: 0, link: "", value: "Save", icon: Bookmark },
  { id: 1, link: "", value: "Notifications", icon: Bell },
  { id: 2, link: "", value: "Hide Post from Timeline", icon: EyeOff },
  { id: 3, link: "", value: "Delete", icon: Delete },
  { id: 4, link: "", value: "Report", icon: AlertTriangle },
];

module.exports = {
  navList,
  postMoreButtonOptions,
};
