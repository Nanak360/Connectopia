import {
  AlertTriangle,
  Bell,
  Bookmark,
  Delete,
  EyeOff,
  Home,
  LogOut,
  Map,
  Save,
  Smile,
  User,
  Users,
} from "react-feather";

const appPages = {
  HOME: "/",
  FRIENDS: "/friends",
  SAVED_POSTS: "/saved",
  NOTIFICATIONS: "/notifications",
  LOGOUT: "/logout",
};

const navList = [
  { displayName: "Home", link: appPages.HOME, icon: Home, id: 0 },
  { displayName: "Friends", link: appPages.FRIENDS, icon: Users, id: 1 },
  { displayName: "Saved posts", link: appPages.SAVED_POSTS, icon: Save, id: 2 },
  {
    displayName: "Notifications",
    link: appPages.NOTIFICATIONS,
    icon: Bell,
    id: 3,
  },
  { displayName: "Logout", link: appPages.LOGOUT, icon: LogOut, id: 4 },
];

const postMoreButtonOptions = [
  { id: 0, link: "", value: "Save", icon: Bookmark },
  { id: 1, link: "", value: "Notifications", icon: Bell },
  { id: 2, link: "", value: "Hide Post from Timeline", icon: EyeOff },
  { id: 3, link: "", value: "Delete", icon: Delete },
  { id: 4, link: "", value: "Report", icon: AlertTriangle },
];

const createPostOptions = [
  { id: 0, link: "", value: "People", icon: User, iconSize: 16 },
  { id: 1, link: "", value: "Check in", icon: Map, iconSize: 16 },
  { id: 2, link: "", value: "Mood", icon: Smile, iconSize: 16 },
];

module.exports = {
  navList,
  postMoreButtonOptions,
  appPages,
  createPostOptions,
};
