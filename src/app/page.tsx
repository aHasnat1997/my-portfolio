import About from '@/components/home/About';
import Hero from '@/components/home/Hero';
import SkillSection from '@/components/home/SkillSection';

import styles from "./home.module.css";

const page = () => {
  return (
    <main className={styles.animatedBg}>
      <div className={styles.mainBg}>
        <div className={styles.mainBgDiv}>
          <Hero />
          <About />
          <SkillSection />
        </div>
      </div>
    </main>
  );
};

export default page;