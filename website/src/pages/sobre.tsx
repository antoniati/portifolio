// About.tsx
import React from 'react';
import styles from "@/styles/AboutPage.module.css";
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ServicesSection from '@/components/Home/ServicesSection/ServicesSection';
import ProjectSection from '@/components/Home/ProjectsSection/ProjectSection';
import FAQSection from '@/components/Home/FAQSection/FAQSection';
import ContactSection from '@/components/Home/ContactSection/ContactSection';
import PerfilImage from '@/components/PerfilImage/PerfilImage';
import SkillSection from '@/components/SkillSection/SkillSection';
import HeaderTitleSection from '@/components/Home/HeaderSection/HeaderTitleSection';
import MainButton from '@/components/Buttons/MainButton/MainButton';
import SecondaryButton from '@/components/Buttons/SecondaryButton/SecondaryButton';

const About: React.FC = () => {
  return (
    <div id={styles.about}>
      <Navbar />
      <section className={styles.aboutSection}>
        <div className={styles.aboutTexts}>
        <h1>Sobre Mim</h1>
          <div className={styles.aboutDescriptions}>
            <p>Meu nome é Felipe Antoniati e sou um programador freelancer especializado em construir websites excepcionais. Com mais de 6 anos de experiência em tecnologias como HTML, CSS, JavaScript, React.js e Next.js, minha paixão é dar vida a ideias por meio de experiências digitais marcantes.</p>
            <p>
              Meu objetivo é elevar a qualidade da sua presença online através da criação de websites modernos, responsivos e esteticamente impressionantes. </p>
          </div>
          <div className={styles.aboutButtons}>
          <MainButton mainButtonText='Entre em contato' mainButtonURL=''/>
          <SecondaryButton secondaryButtonText='Download CV' secondaryButtonURL=''/>

          </div>
        </div>
        <div className={styles.aboutImage}>
          <PerfilImage imageURL="/images/perfil-two.png" imageAltText='Imagem do Programdor Felipe Antoniait' />
        </div>
      </section>
      <ServicesSection />
      <ProjectSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default About;
