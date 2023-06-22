const appPages = {
  HOME: "/",
  FRIENDS: "/profile/friends",
  SAVED_POSTS: "/saved",
  NOTIFICATIONS: "/notifications",
  LOGOUT: "/login",
};

const navList = [
  { displayName: "Home", link: appPages.HOME, id: 0 },
  { displayName: "Friends", link: appPages.FRIENDS, id: 1 },
  { displayName: "Saved posts", link: appPages.SAVED_POSTS, id: 2 },
  {
    displayName: "Notifications",
    link: appPages.NOTIFICATIONS,
    id: 3,
  },
  { displayName: "Logout", link: appPages.LOGOUT, id: 4 },
];

const postMoreButtonOptions = [
  { id: 0, link: "", value: "Save" },
  { id: 1, link: "", value: "Notifications" },
  { id: 2, link: "", value: "Hide Post from Timeline" },
  { id: 3, link: "", value: "Delete" },
  { id: 4, link: "", value: "Report" },
];

const createPostOptions = [
  { id: 0, link: "/", value: "Photos" },
  { id: 1, link: "/", value: "People" },
  { id: 2, link: "/", value: "Check in" },
  { id: 3, link: "/", value: "Mood" },
];

const profileViewOptions = [
  { id: 0, link: "/profile/posts", value: "Posts" },
  { id: 1, link: "/profile/about", value: "About" },
  { id: 2, link: "/profile/friends", value: "Friends" },
  { id: 3, link: "/profile/photos", value: "Photos" },
];

module.exports = {
  navList,
  postMoreButtonOptions,
  appPages,
  createPostOptions,
  profileViewOptions,
};
