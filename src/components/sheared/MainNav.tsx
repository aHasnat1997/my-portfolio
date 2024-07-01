'use client';

import Link from "next/link";
import Image from "next/image";
import assets from "@/assets";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const MainNav = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 720) {
        setSticky(true);
      }
      else {
        setSticky(false);
      }
    })
  }, [])

  const links = [
    {
      path: '#about',
      title: 'About'
    },
    {
      path: '#projects',
      title: 'Projects'
    },
    {
      path: '#blogs',
      title: 'Blogs'
    },
    {
      path: '#contact',
      title: 'Contact'
    }
  ];

  const FullNav = () => (
    <div className="max-section flex justify-between items-center">
      <Link href='/'>
        <Image
          alt="logo"
          src={assets.image.logoW}
          width={60}
          height={60}
          className="duration-500 hover:drop-shadow-[0_4px_8px_rgb(255,255,255)]"
        />
      </Link>
      <ul className="flex items-center gap-8 text-xl">
        {
          links.map((link, i) => <li
            key={i}
            className="group"
          >
            <div className="w-full h-[1px] bg-white scale-x-0 duration-500 origin-right group-hover:scale-x-100" />
            <Link href={link.path}><span>{'<'}</span>{link.title}<span>{' />'}</span></Link>
            <div className="w-full h-[1px] bg-white scale-x-0 duration-500 origin-left group-hover:scale-x-100" />
          </li>)
        }
      </ul>
      <div>
        <Link href='/ABUL_HASNAT_Resume.pdf' target='_blank' download={true}>
          <Button variant={'outline'}>Download Resume</Button>
        </Link>
      </div>
    </div>
  );

  const ResponsiveNav = () => (
    <div className="max-section flex justify-between items-center">
      <Link href='/'>
        <Image
          alt="logo"
          src={assets.image.logoW}
          width={60}
          height={60}
          className="duration-500 hover:drop-shadow-[0_4px_8px_rgb(255,255,255)]"
        />
      </Link>

      <div>
        <Sheet>
          <SheetTrigger>
            <div
              className="size-12 text-4xl"
            >
              <CgMenuRight />
            </div>
          </SheetTrigger>
          <SheetContent>
            <Link
              href='/ABUL_HASNAT_Resume.pdf'
              target='_blank'
              download={true}
            >
              <Button variant={'outline'}>Download Resume</Button>
            </Link>
            <ul className="mt-8 space-y-6 text-xl">
              {
                links.map((link, i) => <li
                  key={i}
                  className="group"
                >
                  <div className="w-full h-[1px] bg-white scale-x-0 duration-500 origin-right group-hover:scale-x-100" />
                  <Link href={link.path}><span>{'<'}</span>{link.title}<span>{' />'}</span></Link>
                  <div className="w-full h-[1px] bg-white scale-x-0 duration-500 origin-left group-hover:scale-x-100" />
                </li>)
              }
            </ul>
          </SheetContent>
        </Sheet>

      </div>
    </div>
  );


  return (
    <nav className={`py-4 duration-1000 ${sticky ? 'bg-black top-0 fixed right-0 left-0 z-40' : '-top-20'}`}>
      <div className="hidden md:block">
        <FullNav />
      </div>
      <div className="block md:hidden">
        <ResponsiveNav />
      </div>
    </nav>
  );
};

export default MainNav;