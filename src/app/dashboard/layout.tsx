import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard...",
  description: "Welcome to my dev portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
    </main>
  );
};