export default function Card({
  children,
  noShadow,
  bgColor,
  noPadding = false,
  margin,
}) {
  const tWpadding = noPadding ? "" : "p-4";
  return (
    <div
      className={`${bgColor ? bgColor : "bg-tertiary300"} ${
        !noShadow ? "shadow-md" : ""
      } rounded-md ${tWpadding} mb-6`}
    >
      {children}
    </div>
  );
}
