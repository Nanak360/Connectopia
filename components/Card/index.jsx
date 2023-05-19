export default function Card({ children, noShadow, bgColor }) {
  return (
    <div
      className={`${bgColor ? bgColor : "bg-tertiary300"} ${
        !noShadow ? "shadow-sm" : ""
      } rounded-md p-6 mb-6`}
    >
      {children}
    </div>
  );
}
