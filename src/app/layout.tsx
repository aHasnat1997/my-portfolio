import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const font = Poppins({ weight: ['400', '600', '800'], subsets: ['latin-ext'] });

export const metadata: Metadata = {
  title: "A.Hasnat - Welcome to my dev portfolio...",
  description: "Welcome to my dev portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
};