/**
 * Dados constantes para o site.
 */

// Importa o tipo definido para os dados constantes
import { ConstantsDataProps } from "@/types/constantsDataTypings";

// Declaração das constantes de dados constantes
export const constantsData: ConstantsDataProps = {
    
    // Informações pessoais do programador
    personalInfo: {
        name: "Felipe Antoniati",                   // Nome do programador
        job: "Programador Freelancer",              // Cargo do programador
        imagePerfil: "/images/perfil.jpg",          // URL da imagem de perfil
        imagePerfilAltText: "Imagem do Programador Felipe Antoniati",  // Texto alternativo da imagem de perfil
    },

    // Dados da logo do site
    logo: {
        logoImageURL: "https://felipeantoniati.vercel.app/logo.svg",  // URL da imagem da logo
        logoAltText: "Logo do Edifício Entre Mares",                 // Texto alternativo da logo
    },

    // URLs para diferentes páginas do site
    pageLinks: {
        URLToHomePage: "https://felipeantoniati.vercel.app/",                           // URL para a página inicial
        URLToAboutPage: "https://felipeantoniati.vercel.app/sobre",                    // URL para a página "Sobre"
        URLToPortifolioPage: "https://felipeantoniati.vercel.app/portifolio",           // URL para a página "Portfólio"
        URLToServicesPage: "https://felipeantoniati.vercel.app/servicos",               // URL para a página "Serviços"
        URLToContactPage: "https://felipeantoniati.vercel.app/contato",                 // URL para a página "Contato"
        URLToEntreMaresWebsiteDetails: "https://felipeantoniati.vercel.app/portifolio/entremares",  // URL para os detalhes do website "Entre Mares"
        URLToConnectHouseWebsiteDetails: "https://felipeantoniati.vercel.app/portifolio/connecthouse",  // URL para os detalhes do website "Connect House"
    },

    // Textos para os itens de navegação
    navItemTexts: {
        home: "Inicio",                  // Texto para o item "Início" na navegação
        about: "Sobre",                  // Texto para o item "Sobre" na navegação
        portifolio: "Portifolio",        // Texto para o item "Portfólio" na navegação
        services: "Serviços",            // Texto para o item "Serviços" na navegação
        contact: "Contato",              // Texto para o item "Contato" na navegação
    },
};
