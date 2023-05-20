"use client";
import { useState, useEffect } from "react";
import Card from "../Card";
import { navList } from "@constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Bell, Home, LogOut, Save, Users } from "react-feather";

const navIcons = [
  <Home key={0} />,
  <Users key={1} />,
  <Save key={2} />,
  <Bell key={3} />,
  <LogOut key={4} />,
];

const Navigation = () => {
  const pathname = usePathname();
  console.log("pathname = ", pathname);
  const [activePage, setActivePage] = useState(pathname);
  useEffect(() => {
    setActivePage(pathname);
  }, [pathname]);
  console.log("activePage = ", activePage);
  const hoverClassNames =
    "hover:bg-socialBlue200 hover:bg-opacity-20 hover:-mx-6 px-4 hover:shadow-sm transition-all scale-110";
  const activeClassNames =
    "text-tertiary500 bg-socialBlue bg-opacity-80 px-4 -mx-10 shadow-sm";
  return (
    <Card>
      <div className="p-2">
        <h2 className="text-2xl block text-socialBlue font-bold mb-4">
          Navigation
        </h2>
        {navList.map((navLink) => (
          <Link
            onClick={() => setActivePage(navLink.id)}
            key={navLink.id}
            className={`flex items-center gap-3 px-6 py-3 my-2 rounded-md ${
              activePage == navLink.link ? activeClassNames : hoverClassNames
            }`}
            href={navLink.link}
          >
            {navIcons[navLink.id]} {navLink.displayName}
          </Link>
        ))}
      </div>
    </Card>
  );
};

export default Navigation;
