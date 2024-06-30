import assets from '@/assets';
import Image from 'next/image';
import React from 'react';

function About() {
  return (
    <section id='about' className='max-section relative pt-40 pb-8'>
      <Image
        alt='vector'
        src={assets.vector.vectorOne}
        width={100}
        height={100}
        className='absolute top-52 left-[28rem]'
      />
      <div className='flex items-center gap-16'>
        <Image
          alt='image'
          src={assets.image.myImg}
          width={500}
          height={500}
          className=''
        />
        <div>
          <h2 className='text-6xl font-semibold pb-14'>About Me</h2>
          <div className='space-y-4'>
            <p>
              I&apos;m A.Hasnat, a passionate full-stack developer with a strong foundation in both front-end and back-end technologies. I specialize in building dynamic and responsive web applications using a diverse tech stack.
            </p>
            <p>
              With a keen eye for detail and a commitment to writing clean, efficient code, I thrive in environments that challenge me to grow and innovate. I have experience working on a variety of projects, from creating intuitive user interfaces to developing robust server-side logic.
            </p>
            <p>
              I excel in full-stack development, seamlessly integrating front-end and back-end components to deliver comprehensive solutions. Whether it&apos;s a single-page application or a complex database-driven site, I ensure every project is optimized for performance and scalability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;