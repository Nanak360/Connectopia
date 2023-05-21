import Avatar from "@components/Avatar";
import Card from "@components/Card";
import Link from "next/link";
import React from "react";

const NotificationsPage = () => {
  return (
    <div>
      <h1 className="text-5xl mb-6 text-gray-400">Notifications</h1>
      <Card noPadding={true}>
        <div className="flex gap-3 items-center p-4 border-b border-b-tertiary500 ">
          <Avatar size={28} />
          <div>
            <Link className="font-semibold hover:underline" href={"/profile"}>
              Bacchu Bajpai
            </Link>{" "}
            liked{" "}
            <Link className="text-socialBlue hover:underline" href={""}>
              {" "}
              your photo{" "}
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default NotificationsPage;
