import Head from 'next/head'
import {FcMultipleDevices, FcSupport, FcFinePrint} from "react-icons/fc"

import Navbar from '@/components/Navbar'
import PerfilImage from '@/components/PerfilImage';
import MainButton from '@/components/MainButton';
import HeaderTitleSection from '@/components/HeaderTitleSection';
import InfoCard from '@/components/InfoCard';
import ServiceCard from '@/components/ServiceCard';

import { constantsData } from "@/data/constantsData";
import { projectsData } from "@/data/projectsData";

import styles from "@/styles/HomePage.module.css";

export default function Home() {
  const { personalInfo, homePage } = constantsData;
  const { phoenixEntreMares, connectHouse } = projectsData;
  return (
    <>
      <Head>
        <title>Programador Freelancer | Felipe Antoniati - Websites Modernos e Personalizados</title>
        <meta name="description" content="Programdor freelancer especializado em criar websites modernos e personalizados. Trabalho com clientes de diversos setores para fornecer soluções digitais de alta qualidade. Entre em contato e vamos transformar sua visão em realidade" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main id={styles.main}>
        <section id={styles.introSection}>
          <PerfilImage
            imageURL={personalInfo.imagePerfil}
            imageAltText={personalInfo.imagePerfilAltText}
          />
          <div className={styles.introTexts}>
            <h1 className={styles.introTitleText}>
              {personalInfo.job} <span>-</span> {personalInfo.name}
            </h1>
            <p className={styles.introDescriptionText}>
              {homePage.introSection.description}
            </p>
          </div>
          <MainButton
            mainButtonText={homePage.introSection.buttonText}
            mainButtonURL="#contactSection"
          />
        </section>
        <section className={styles.recentsProjects}>
          <HeaderTitleSection
            title={homePage.recentsProjectsSection.title}
            titleOverlay={homePage.recentsProjectsSection.titleOverlay}
          />
          <div className={styles.recentsProjectsCards}>
            <InfoCard
              cardImageURL={phoenixEntreMares.imageURL}
              cardImageAltText={phoenixEntreMares.imageAltText}
              cardTitleText={phoenixEntreMares.title}
              cardDescriptionText={phoenixEntreMares.description}
              cardInfoDataText={phoenixEntreMares.data}
              cardInfoDurationText={phoenixEntreMares.duration}
              cardInfoButtonText="Ver Detalhes"
              cardInfoButtonURL={phoenixEntreMares.URLToDetailsPage}
            />
            <InfoCard
              cardImageURL={connectHouse.imageURL}
              cardImageAltText={connectHouse.imageAltText}
              cardTitleText={connectHouse.title}
              cardDescriptionText={connectHouse.description}
              cardInfoDataText={connectHouse.data}
              cardInfoDurationText={connectHouse.duration}
              cardInfoButtonText="Ver Detalhes"
              cardInfoButtonURL={connectHouse.URLToDetailsPage}
            />
          </div>
        </section>
        <section id={styles.sectionServices}>
          <HeaderTitleSection
            title='Serviços e Soluções'
            titleOverlay='Serviços e Soluções'
          />
          <div className={styles.containerCards}>
              <ServiceCard 
              cardInfoIcon={FcMultipleDevices}
              cardTitleText='Desenvolvimento de Websites'
              cardDescriptionText='Criação de Websites multiplataformas, responsivos e personalizados, utilizando as mais recentes tecnologias e boas práticas de desenvolvimento'
              />
              <ServiceCard 
              cardInfoIcon={FcFinePrint}
              cardTitleText='Otimização e SEO'
              cardDescriptionText='Otimização de sites para melhorar sua visibilidade nos motores de busca Através de estratégias avançadas de SEO, ajudando seu site a obter rankings mais altos nas páginas de resultados'
              />
              <ServiceCard 
              cardInfoIcon={FcSupport}
              cardTitleText='Suporte e Manutenção'
              cardDescriptionText="Ofereço serviços de suporte técnico e manutenção contínua para garantir que seu site esteja sempre funcionando corretamente e sempre atualizado"
              /> 
          </div>  
        </section>
      </main>
    </>
  )
}
