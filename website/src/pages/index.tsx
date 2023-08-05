import Head from 'next/head';

import Navbar from '@/components/Navbar/Navbar';
import IntroSection from '@/components/Home/IntroSection/IntroSection';
import ServicesSection from '@/components/Home/ServicesSection/ServicesSection';
import ProjectSection from '@/components/Home/ProjectsSection/ProjectSection';
import ContactSection from '@/components/Home/ContactSection/ContactSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Programador Freelancer | Felipe Antoniati - Websites Modernos e Personalizados</title>
        <meta name="description" content="Programdor freelancer especializado em criar websites modernos e personalizados. Trabalho com clientes de diversos setores para fornecer soluções digitais de alta qualidade. Entre em contato e vamos transformar sua visão em realidade" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <IntroSection />
        <ServicesSection />
        <ProjectSection />
        <ContactSection />
      </main>
    </>
  );
};
