import Link from "next/link";
import { FileText, Image, Info, Map, Smile, User, Users } from "react-feather";

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
  return (
    <div
      className={`flex items-center gap-1 ${
        fullWidth ? "w-full justify-around" : ""
      }`}
    >
      {options.map((option) => {
        return (
          <div key={option.id}>
            <Link
              href={option.link}
              className="hover:text-socialBlue100 hover:bg-tertiary300 flex items-center gap-1 rounded-3xl px-2 py-1 text-sm"
            >
              {icons[option.value]}
              {option.value}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default HorizontalIconsPanel;
