import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Date Picker App",
  description: "Pick your special date",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
