import "../global.css";

import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Connectopia",
  description: "Stay connected",
};

export default function AutoLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={ubuntu.className}>
        <div className="mt-4 max-w-6xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
