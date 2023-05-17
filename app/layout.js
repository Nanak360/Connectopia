import "./global.css";

import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Nanak's world",
  description: "My website that has all about me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={ubuntu.className}>
        <div className="mt-4 max-w-6xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
