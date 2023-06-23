"use client";
import Link from "next/link";
import { FileText, Image, Info, Map, Smile, User, Users } from "react-feather";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const icons = {
  People: <User size={20} key={0} />,
  "Check in": <Map size={20} key={1} />,
  Mood: <Smile size={20} key={2} />,
  Posts: <FileText size={20} key={3} />,
  About: <Info size={20} key={4} />,
  Friends: <Users size={20} key={5} />,
  Photos: <Image size={20} key={6} />,
};

const HorizontalIconsPanel = ({
  options,
  isButton,
  uploadPhotos,
  showIcon = true,
  fullWidth = false,
}) => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState(pathname);
  useEffect(() => {
    if (pathname === "/profile" || pathname.includes("posts")) {
      setActiveSection("/profile/posts");
    } else setActiveSection(pathname);
  }, [pathname]);
  let activeLinkClass = fullWidth
    ? "flex items-center gap-1 text-socialBlue100 bg-tertiary500 rounded-md px-2 py-2 text-sm justify-center shadow-md font-bold"
    : "text-socialBlue100 bg-tertiary300 flex items-center gap-1 rounded-3xl px-2 py-1 text-sm";

  let nonActiveLinkClass = fullWidth
    ? "hover:text-socialBlue100 hover:bg-tertiary300 flex items-center gap-1 rounded-3xl px-2 py-1 text-sm justify-center"
    : "hover:text-socialBlue100 hover:bg-tertiary300 flex items-center gap-1 rounded-3xl px-2 py-1 text-sm";

  return (
    <div
      className={`flex items-center gap-1 ${
        fullWidth ? "w-full justify-around" : ""
      }`}
    >
      {options.map((option) => {
        return (
          <div className={fullWidth ? "w-full" : undefined} key={option.id}>
            {isButton ? (
              option.value !== "Photos" ? (
                <button className={nonActiveLinkClass + " text-xs"}>
                  {icons[option.value]}
                  <span className="md:block hidden">{option.value}</span>
                </button>
              ) : (
                <label
                  className={nonActiveLinkClass + " text-xs cursor-pointer"}
                >
                  <input
                    type="file"
                    multiple
                    className="hidden"
                    onChange={uploadPhotos}
                  ></input>
                  {icons[option.value]}
                  <span className="md:block hidden">{option.value}</span>
                </label>
              )
            ) : (
              <Link
                href={option.link}
                className={`${
                  activeSection.includes(option.link)
                    ? activeLinkClass
                    : nonActiveLinkClass
                } md:text-sm text-xs`}
              >
                {icons[option.value]}
                {option.value}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HorizontalIconsPanel;
