export default function Card({ children, noShadow, bgColor, padding, margin }) {
  return (
    <div
      className={`${bgColor ? bgColor : "bg-tertiary300"} ${
        !noShadow ? "shadow-md" : ""
      } rounded-md p-${padding || padding == 0 ? padding : 6} mb-6`}
    >
      {children}
    </div>
  );
}
