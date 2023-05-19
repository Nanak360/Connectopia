export default function Card({ children, noShadow, bgColor }) {
  return (
    <div
      className={`${bgColor ? bgColor : "bg-tertiary"} ${
        !noShadow ? "shadow-sm" : ""
      } rounded-md p-4 mb-6`}
    >
      {children}
    </div>
  );
}
