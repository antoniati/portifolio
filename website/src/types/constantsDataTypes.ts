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
        URLToEntreMaresWebsiteDetails: string;
        URLToConnectHouseWebsiteDetails: string;
    },
    navItemTexts: {
        home: string;
        about: string;
        portifolio: string;
        services: string;
        contact: string;
    },
    homePage: {
        introSection: {
            description: string;
            buttonText: string;
        },
        recentsProjectsSection: {
            title: string;
            titleOverlay: string;
        }
    }
}