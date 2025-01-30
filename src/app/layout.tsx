import "./globals.css";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
export const metadata: Metadata = {
  title: "Supercake Coding Challenge",
  description: "Good luck!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <Theme>{children}</Theme>
        </div>
      </body>
    </html>
  );
}
