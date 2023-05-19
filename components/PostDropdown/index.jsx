import Card from "@components/Card";
import React, { useState } from "react";

const PostDropdown = ({ openDropdown, itemsList }) => {
  const [activePage, setActivePage] = useState(0);
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
                  <item.icon size={16} /> {item.value}
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
