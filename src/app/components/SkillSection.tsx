import assets from "@/assets";
import Image from "next/image";

function SkillSection() {
  const icons = [
    assets.icons.js,
    assets.icons.ts,
    assets.icons.node,
    assets.icons.express,
    assets.icons.react,
    assets.icons.next,
    assets.icons.redux,
    assets.icons.mongodb,
    assets.icons.postgres,
    assets.icons.prisma,
    assets.icons.github,
    assets.icons.figma,
  ];

  return (
    <section className="max-section my-20">
      <div className="">
        <h2 className='text-6xl font-semibold text-center pb-14'>Skills I have</h2>
      </div>
      <div className="relative">
        <div className="w-fit mx-auto grid grid-cols-6 items-center gap-6 relative z-10">
          {
            icons.map(icon => <div key={icon}>
              <Image
                alt="icon"
                src={icon}
                width={40}
                height={40}
              />
            </div>)
          }
        </div>
        <Image
          alt="skill vector"
          src={assets.vector.vectorTwo}
          width={1000}
          height={1000}
          className="w-full mx-auto -mt-6"
        />
      </div>
    </section>
  );
}

export default SkillSection;