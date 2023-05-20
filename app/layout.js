import Navigation from "@components/Navigation";
import "./global.css";

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
        <div className="mt-4 max-w-6xl mx-auto">
          <div className="flex gap-6">
            <div className="w-1/4">
              <Navigation />
            </div>
            <div className="w-3/4">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
