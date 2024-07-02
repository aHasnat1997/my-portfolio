import type { Metadata } from "next";
import DashboardNav from "./components/DashboardNav";
import { ScrollArea } from "@/components/ui/scroll-area";

export const metadata: Metadata = {
  title: "Dashboard - Me.",
  description: "Welcome to my dev portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="w-full h-screen flex flex-col lg:flex-row lg:items-start overflow-hidden">
        <DashboardNav />
        <ScrollArea className="w-full h-full px-4 lg:px-6 py-2">
          {children}
        </ScrollArea>
      </div>
    </main>
  );
};