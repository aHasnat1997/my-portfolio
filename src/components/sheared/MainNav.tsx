import Link from "next/link";
import BlogSearch from "./BlogSearch";
import { Button } from "../ui/button";
import Image from "next/image";
import assets from "@/assets";

const MainNav = () => {
  const links = [
    {
      path: '/',
      title: 'Home'
    },
    {
      path: '/about',
      title: 'About'
    },
    {
      path: '/projects',
      title: 'Projects'
    },
    {
      path: '/blog',
      title: 'Blogs'
    },
    {
      path: '/contact',
      title: 'Contact'
    }
  ];

  return (
    <main className="py-4">
      <div className="max-section flex justify-between items-center">
        <Link href='/'>
          <Image
            alt="logo"
            src={assets.image.logoW}
            width={80}
            height={80}
          />
        </Link>
        <ul className="flex items-center gap-8 text-xl">
          {
            links.map((link, i) => <li
              key={i}
              className=""
            >
              <Link href={link.path}>{link.title}</Link>
            </li>)
          }
        </ul>
        <div>
          <Button>Button</Button>
        </div>
      </div>
    </main>
  );
};

export default MainNav;