import "./global.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Nanak's world",
  description: "My website that has all about me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
