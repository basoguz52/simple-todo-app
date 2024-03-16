import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Simple ToDo",
  description: "Simple ToDo App for learning next js 13",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
