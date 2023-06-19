"use client";
import { useState, useEffect } from "react";
import Card from "../Card";
import { navList } from "@constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Bell, Home, LogOut, Save, Users } from "react-feather";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const navIcons = [
  <Home key={0} />,
  <Users key={1} />,
  <Save key={2} />,
  <Bell key={3} />,
  <LogOut key={4} />,
];

const Navigation = () => {
  const supabase = createClientComponentClient();
  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };
  const pathname = usePathname();
  const [activePage, setActivePage] = useState(pathname);
  useEffect(() => {
    setActivePage(pathname);
  }, [pathname]);
  const hoverClassNames =
    "hover:bg-socialBlue200 hover:bg-opacity-20 hover:-mx-1 hover:shadow-md transition-all scale-110";
  const activeClassNames =
    "text-tertiary500 bg-socialBlue bg-opacity-80 md:-mx-4 shadow-md";
  return (
    <Card noPadding={true}>
      <div className="md:p-2 flex md:block justify-around md:justify-normal shadow-2xl md:shadow-none">
        <h2 className="px-4 pt-2 text-2xl text-socialBlue font-bold mb-4 hidden md:block">
          Navigation
        </h2>
        {navList.map((navLink) => (
          <Link
            onClick={() => {
              setActivePage(navLink.id);
              if (navLink.id === 4) handleSignOut();
            }}
            key={navLink.id}
            className={`text-xs md:text-sm flex items-center gap-1 md:gap-3 px-4 py-4 md:py-3 md:px-8 my-2 rounded-full md:rounded-md ${
              activePage == navLink.link ? activeClassNames : hoverClassNames
            }`}
            href={navLink.link}
          >
            {navIcons[navLink.id]}
            <span className="md:block hidden">{navLink.displayName}</span>
          </Link>
        ))}
      </div>
    </Card>
  );
};

export default Navigation;
