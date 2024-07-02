import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/sheared/MainNav";
import { Toaster } from "@/components/ui/toaster";
import SessionWrapper from "@/components/sheared/SessionWrapper";

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
    <SessionWrapper>
      <html lang="en">
        <body className={font.className}>
          <main className="flex flex-col gap-4">
            <div className="bg-black/70">
              <MainNav />
              {children}
            </div>
          </main>
          <Toaster />
        </body>
      </html>
    </SessionWrapper>

  );
};