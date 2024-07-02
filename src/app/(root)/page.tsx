import About from "./components/About";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";
import Hero from "./components/Hero";
import LatestBlog from "./components/LatestBlog";
import Projects from "./components/Projects";
import ScrollToTopButton from "./components/ScrollToTopButton";
import SkillSection from "./components/SkillSection";


const page = () => {
  return (
    <div className='relative'>
      <div className=' w-full h-screen animatedBg fixed -z-10' />
      <main>
        <Hero />
        <SkillSection />
        <About />
        <Projects />
        <LatestBlog />
        <Contact />
        <Copyright />
        <ScrollToTopButton />
      </main>
    </div>
  );
};

export default page;