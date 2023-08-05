import HeaderTitleSection from "../HeaderSection/HeaderTitleSection";
import ServiceCard from "@/components/Cards/ServiceCard/ServiceCard";
import styles from "./ServicesSection.module.css";
import { servicesSection, serviceCards } from "@/data/homePageData";

const ServicesSection: React.FC = () => {

    return (
        <section id={styles.servicesSection}>
            <HeaderTitleSection
                title={servicesSection.title}
                titleOverlay={servicesSection.title}
                description={servicesSection.description}
            />
            <div className={styles.containerCards}>
                {serviceCards.map((service) => {
                    return (
                        <ServiceCard
                            key={service.title}
                            cardInfoIcon={service.icon}
                            cardTitleText={service.title}
                            cardDescriptionText={service.description}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default ServicesSection;