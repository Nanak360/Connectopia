import Card from "../Card";
import { navList } from "@constants";

const Navigation = () => {
  return (
    <Card>
      <div className="p-2">
        <h2 className="text-2xl block text-socialBlue font-bold mb-4">
          Navigation
        </h2>
        {navList.map((navLink) => (
          <a
            key={navLink.id}
            className="flex items-center gap-3 px-2 py-3 hover:text-socialBlue100 hover:bg-tertiary300 rounded-md"
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
