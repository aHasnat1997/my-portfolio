import About from '@/app/components/About';
import Hero from '@/app/components/Hero';
import SkillSection from '@/app/components/SkillSection';
import Projects from '@/app/components/Projects';
import LatestBlog from './components/LatestBlog';
import Contact from './components/Contact';
import Copyright from './components/Copyright';
import ScrollToTopButton from './components/ScrollToTopButton';

const page = () => {
  return (
    <div className='relative'>
      <div className='w-full h-screen animatedBg fixed -z-10' />
      <main>
        <Hero />
        <About />
        <SkillSection />
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