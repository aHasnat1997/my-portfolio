import assets from "@/assets";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Hero() {
  return (
    <section className='max-section flex flex-col justify-center items-center gap-8 pt-28 mb-12'>
      <h1 className="text-6xl font-semibold">👋Hello, I&apos;m</h1>
      <h1 className="text-6xl font-semibold">Full-Stack Developer</h1>
      <p className="md:w-1/2 text-justify text-lg">Creating efficient and scalable web solutions that drive success Whether it&apos;s building dynamic web applications or designing robust APIs, I bring ideas to life with code.</p>
      <div>
        <Image
          alt="laptop image"
          src={assets.image.heroLaptopImg}
          width={700}
          height={700}
          className="w-full"
        />
      </div>
      <div className="space-x-2 mt-8">
        <Link href='#projects'>
          <Button size={'lg'}>View My Work</Button>
        </Link>
        <Button variant={'outline'} size={'lg'}>Let&apos;s Talk</Button>
      </div>
    </section>
  );
};

export default Hero;