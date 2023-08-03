import { FcMultipleDevices, FcFinePrint, FcSupport } from "react-icons/fc";
import HeaderTitleSection from "../HeaderSection/HeaderTitleSection";
import ServiceCard from "@/components/Cards/ServiceCard/ServiceCard";
import { constantsData } from "@/data/constantsData";
import styles from "./ServicesSection.module.css";

const ServicesSection: React.FC = () => {
    const { servicesSection } = constantsData.homePage;

    return (
        <section id={styles.servicesSection}>
            <HeaderTitleSection
                title={servicesSection.title}
                titleOverlay={servicesSection.title}
            />
            <div className={styles.containerCards}>
                <ServiceCard
                    cardInfoIcon={FcMultipleDevices}
                    cardTitleText={servicesSection.cardWebDeveloper.title}
                    cardDescriptionText={servicesSection.cardWebDeveloper.description}
                />
                <ServiceCard
                    cardInfoIcon={FcFinePrint}
                    cardTitleText={servicesSection.cardSEO.title}
                    cardDescriptionText={servicesSection.cardSEO.description}
                />
                <ServiceCard
                    cardInfoIcon={FcSupport}
                    cardTitleText={servicesSection.cardSupport.title}
                    cardDescriptionText={servicesSection.cardSupport.description}
                />
            </div>
        </section>
    );
};

export default ServicesSection;