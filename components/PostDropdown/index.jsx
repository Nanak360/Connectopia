import Card from "@components/Card";
import React, { useState } from "react";
import { AlertTriangle, Bell, Bookmark, Delete, EyeOff } from "react-feather";

const icons = {
  Save: <Bookmark key={0} size={16} />,
  Notifications: <Bell key={1} size={16} />,
  "Hide Post from Timeline": <EyeOff key={2} size={16} />,
  Delete: <Delete key={3} size={16} />,
  Report: <AlertTriangle key={4} size={16} />,
};

const PostDropdown = ({ openDropdown, itemsList }) => {
  const [, setActivePage] = useState(0);
  return (
    <div className="relative">
      {openDropdown && (
        <div className="absolute -right-6 p-3 rounded-sm w-80">
          <Card noShadow={true} bgColor="bg-tertiary400">
            <div className="flex flex-col">
              {itemsList.map((item) => (
                <a
                  onClick={() => setActivePage(item.id)}
                  key={item.id}
                  href={item.link}
                  className={`flex items-center gap-3 py-2 my-2 hover:bg-socialBlue hover:bg-opacity-80 -mx-4 px-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300`}
                >
                  {icons[item.value]}
                  {item.value}
                </a>
              ))}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default PostDropdown;
