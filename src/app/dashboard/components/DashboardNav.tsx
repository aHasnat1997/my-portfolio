"use client";

import assets from "@/assets";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgMenuRight } from "react-icons/cg";

function DashboardNav() {
  const links = [
    {
      path: '/dashboard',
      title: 'Home'
    },
    {
      path: '/dashboard/about',
      title: 'About'
    },
    {
      path: '/dashboard/projects',
      title: 'Projects'
    },
    {
      path: '/dashboard/blogs',
      title: 'Blogs'
    }
  ];
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  const NavList = ({ path, title }: { path: string, title: string }) => (
    <Link
      href={path}
      className={`text-2xl font-semibold w-full ${isActive(path) ? 'bg-white/15' : ''}`}
    >
      <p className="w-full p-4 hover:bg-white/15">{title}</p>
    </Link>
  );

  const FullNav = () => (
    <div className="h-full w-52 flex flex-col items-center justify-between">
      <div className="w-full flex flex-col items-center justify-center">
        <Link href='/dashboard'>
          <Image
            alt="logo"
            src={assets.image.logoW}
            width={100}
            height={100}
            className="duration-500 hover:drop-shadow-[0_4px_8px_rgb(255,255,255)]"
          />
        </Link>
        <ul className="w-full mt-8">
          {
            links.map((link, i) => <li key={i} className="w-full">
              <NavList path={link.path} title={link.title} />
            </li>)
          }
        </ul>
      </div>
      <div>
        <Button variant={'outline'}>Log Out...</Button>
      </div>
    </div>
  );

  const ResponsiveNav = () => (
    <div className="mb-4 px-3 flex items-center justify-between">
      <Link href='/dashboard'>
        <Image
          alt="logo"
          src={assets.image.logoW}
          width={60}
          height={60}
          className="duration-500 hover:drop-shadow-[0_4px_8px_rgb(255,255,255)]"
        />
      </Link>
      <Sheet>
        <SheetTrigger>
          <div
            className="size-12 text-4xl"
          >
            <CgMenuRight />
          </div>
        </SheetTrigger>
        <SheetContent>
          <Button variant={'outline'}>Log Out...</Button>
          <ul className="mt-8 text-xl">
            {
              links.map((link, i) => <li key={i}>
                <NavList path={link.path} title={link.title} />
              </li>)
            }
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );

  return (
    <nav className='lg:h-full'>
      <div className="py-4 h-full hidden md:block border-r-2">
        <FullNav />
      </div>
      <div className="w-full block md:hidden border-b-2">
        <ResponsiveNav />
      </div>
    </nav>
  )

}

export default DashboardNav;