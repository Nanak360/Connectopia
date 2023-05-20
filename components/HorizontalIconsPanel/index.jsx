"use client";
import Link from "next/link";
import { FileText, Image, Info, Map, Smile, User, Users } from "react-feather";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const icons = {
  People: <User key={0} />,
  "Check in": <Map key={1} />,
  Mood: <Smile key={2} />,
  Posts: <FileText key={3} />,
  About: <Info key={4} />,
  Friends: <Users key={5} />,
  Photos: <Image key={6} />,
};

const HorizontalIconsPanel = ({
  options,
  isButton,
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
              <button
                className={
                  // activeSection.includes(option.link)
                  //   ? activeLinkClass
                  // :
                  nonActiveLinkClass
                }
              >
                {icons[option.value]}
                {option.value}
              </button>
            ) : (
              <Link
                href={option.link}
                className={
                  activeSection.includes(option.link)
                    ? activeLinkClass
                    : nonActiveLinkClass
                }
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
