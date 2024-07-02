import MainNav from "@/components/sheared/MainNav"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex flex-col gap-4">
      <div className="bg-black/70">
        <MainNav />
        {children}
      </div>
    </main>
  )
};