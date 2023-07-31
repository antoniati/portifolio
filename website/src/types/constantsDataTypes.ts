export interface ConstantsDataProps {
    personalInfo: {
        name: string;
        job: string;
        imagePerfil: string;
        imagePerfilAltText: string;
    },
    logo: {
        logoImageURL: string;
        logoAltText: string;
    },
    pageLinks: {
        URLToHomePage: string;
        URLToAboutPage: string;
        URLToPortifolioPage: string;
        URLToServicesPage: string;
        URLToContactPage: string;
    },
    navItemTexts: {
        home: string;
        about: string;
        portifolio: string;
        services: string;
        contact: string;
    }
}