import Card from "@components/Card";
import React from "react";

const PostDropdown = ({ openDropdown, itemsList }) => {
  return (
    <div className="relative">
      {openDropdown && (
        <div className="absolute right-0 w-[13rem]">
          <Card noShadow={true} bgColor="bg-tertiary400">
            <div className="flex flex-col">
              {itemsList.map((item) => (
                <a key={item.id} href={item.link} className="flex p-1.5 gap-2 items-center text-xs">
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
