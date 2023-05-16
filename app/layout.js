import "./globals.css";

export const metadata = {
  title: "Nanak's world",
  description: "My website that has all about me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
