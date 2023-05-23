import Navigation from "@components/Navigation";
import "../global.css";

import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Connectopia",
  description: "Stay connected",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={ubuntu.className}>
        <div className="mt-4 max-w-6xl mx-auto md:flex gap-6">
          <div className="fixed md:static w-full bottom-0 md:w-1/4 -mb-6 z-10">
            <Navigation />
          </div>
          <div className="mx-4 md:mx-0 md:w-3/4">{children}</div>
        </div>
      </body>
    </html>
  );
}
