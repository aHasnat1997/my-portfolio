import About from '@/app/components/About';
import Hero from '@/app/components/Hero';
import SkillSection from '@/app/components/SkillSection';

import styles from "./home.module.css";
import Projects from '@/app/components/Projects';
import LatestBlog from './components/LatestBlog';

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
        </div>
      </div>
    </main>
  );
};

export default page;