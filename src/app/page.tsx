import About from '@/app/components/About';
import Hero from '@/app/components/Hero';
import SkillSection from '@/app/components/SkillSection';

import styles from "./home.module.css";
import Projects from '@/app/components/Projects';
import LatestBlog from './components/LatestBlog';
import Contact from './components/Contact';
import Copyright from './components/Copyright';

const page = () => {
  return (
    <main className={styles.animatedBg}>
      <div className={styles.mainBg}>
        <div className={styles.mainBgDiv}>
          <Hero />
          <About />
          <SkillSection />
          <Projects />
          <LatestBlog />
          <Contact />
          <Copyright />
        </div>
      </div>
    </main>
  );
};

export default page;