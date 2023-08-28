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
        logoImageURL: "https://felipeantoniati.com.br/logo.svg",  // URL da imagem da logo
        logoAltText: "Logo do Programador freelancer Felipe Antoniati",                 // Texto alternativo da logo
    },

    // URLs para diferentes páginas do site
    pageLinks: {
        URLToHomePage: "https://felipeantoniati.com.br/",                           // URL para a página inicial
        URLToAboutPage: "https://felipeantoniati.com.br/sobre",                    // URL para a página "Sobre"
        URLToPortifolioPage: "https://felipeantoniati.com.br/portifolio",           // URL para a página "Portfólio"
        URLToServicesPage: "https://felipeantoniati.com.br/servicos",               // URL para a página "Serviços"
        URLToContactPage: "https://felipeantoniati.com.br/contato",                 // URL para a página "Contato"
        URLToEntreMaresWebsiteDetails: "https://felipeantoniati.com.br/portifolio/entremares",  // URL para os detalhes do website "Entre Mares"
        URLToConnectHouseWebsiteDetails: "https://felipeantoniati.com.br/portifolio/connecthouse",  // URL para os detalhes do website "Connect House"
    },

    // Textos para os itens de navegação
    navItemTexts: {
        home: "Inicio",                  // Texto para o item "Início" na navegação
        about: "Sobre",                  // Texto para o item "Sobre" na navegação
        portifolio: "Portifolio",        // Texto para o item "Portfólio" na navegação
        services: "Serviços",            // Texto para o item "Serviços" na navegação
        contact: "Contato",              // Texto para o item "Contato" na navegação
    },

    navItem: [
        {
            title: "Inicio", 
            URLToPage: "https://felipeantoniati.com.br/"
        },
        {
            title: "Sobre",
            URLToPage: "https://felipeantoniati.com.br/sobre"
        },
        {
            title: "Portifolio", 
            URLToPage: "https://felipeantoniati.com.br/portifolio"
        },
        {
            title: "Serviços", 
            URLToPage: "https://felipeantoniati.com.br/servicos"
        },
        {
            title: "Contato", 
            URLToPage: "https://felipeantoniati.com.br/contato"
        },
    ],
};
