import assets from "@/assets";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroTypeAnimation from "./HeroTypeAnimation";

function Hero() {
  return (
    <section className='max-section flex flex-col justify-center items-center gap-4 md:gap-8 pt-14 md:pt-24'>
      <h1 className="text-3xl md:text-6xl font-semibold">👋Hello, I&apos;m</h1>
      <div><HeroTypeAnimation /></div>
      <p className="md:w-1/2 text-justify text-sm md:text-lg">Creating efficient and scalable web solutions that drive success Whether it&apos;s building dynamic web applications or designing robust APIs, I bring ideas to life with code.</p>
      <div>
        <Image
          alt="laptop image"
          src={assets.image.heroLaptopImg}
          width={700}
          height={700}
          className="w-full"
        />
      </div>
      <div className="flex items-center gap-4 mt-8">
        <Link href='#projects'>
          <Button className="lg:p-8 lg:text-lg">View My Work</Button>
        </Link>
        <Link href='#contact'>
          <Button variant={'outline'} className="lg:p-8 lg:text-lg">Let&apos;s Talk</Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;