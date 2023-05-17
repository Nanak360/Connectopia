import Card from "./Card";
import { navList } from "@constants";

const Navigation = () => {
  return (
    <Card>
      <div className="p-3">
        <h2 className="text-4xl block text-socialBlue font-bold mb-4">
          Navigation
        </h2>
        {navList.map((navLink) => (
          <a
            key={navLink.id}
            className="text-xl flex items-center gap-3 p-4"
            href={navLink.link}
          >
            {<navLink.icon />} {navLink.displayName}
          </a>
        ))}
      </div>
    </Card>
  );
};

export default Navigation;
