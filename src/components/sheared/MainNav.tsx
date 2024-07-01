'use client';

import Link from "next/link";
import Image from "next/image";
import assets from "@/assets";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

const MainNav = () => {
  // making sticky nav after scroll 
  const [sticky, setSticky] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log(window.scrollY);
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

  return (
    // <nav className={`py-4 top-0 fixed right-0 left-0 z-40`}>
    <nav className={`py-4 duration-1000 ${sticky ? 'top-0 fixed right-0 left-0 z-40' : '-top-20'}`}>
      <div className="max-section flex justify-between items-center">
        <Link href='/'>
          <Image
            alt="logo"
            src={assets.image.logoW}
            width={80}
            height={80}
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
          <Button variant={'outline'}>Download Resume</Button>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;