/**
 * Interface para definir a estrutura dos dados constantes utilizados no site.
 */
export interface ConstantsDataProps {
    // Informações pessoais do programador
    personalInfo: {
        name: string;                // Nome do programador
        job: string;                 // Cargo do programador
        imagePerfil: string;         // URL da imagem de perfil
        imagePerfilAltText: string;  // Texto alternativo da imagem de perfil
    },

    // Dados da logo do site
    logo: {
        logoImageURL: string;    // URL da imagem da logo
        logoAltText: string;     // Texto alternativo da logo
    },

    // URLs para diferentes páginas do site
    pageLinks: {
        URLToHomePage: string;               // URL para a página inicial
        URLToAboutPage: string;              // URL para a página "Sobre"
        URLToPortifolioPage: string;         // URL para a página "Portfólio"
        URLToServicesPage: string;           // URL para a página "Serviços"
        URLToContactPage: string;            // URL para a página "Contato"
        URLToEntreMaresWebsiteDetails: string;  // URL para os detalhes do website "Entre Mares"
        URLToConnectHouseWebsiteDetails: string;  // URL para os detalhes do website "Connect House"
    },

    // Textos para os itens de navegação
    navItemTexts: {
        home: string;             // Texto para o item "Início" na navegação
        about: string;            // Texto para o item "Sobre" na navegação
        portifolio: string;       // Texto para o item "Portfólio" na navegação
        services: string;         // Texto para o item "Serviços" na navegação
        contact: string;          // Texto para o item "Contato" na navegação
    }
}
