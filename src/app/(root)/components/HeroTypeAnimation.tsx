"use client";

import { TypeAnimation } from 'react-type-animation';

function HeroTypeAnimation() {
  return (
    <div>
      <TypeAnimation
        sequence={[
          'Programmer',
          2000,
          'Full-Stack Developer',
          2000,
          'Node.JS Developer',
          2000,
          'Software Developer',
          2000,
        ]}
        speed={15}
        className='text-2xl md:text-5xl font-semibold'
        repeat={Infinity}
      />
    </div>
  );
}

export default HeroTypeAnimation;