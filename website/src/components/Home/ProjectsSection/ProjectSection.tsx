import HeaderTitleSection from "@/components/Home/HeaderSection/HeaderTitleSection";
import ProjectCard from "@/components/Cards/ProjectCard/ProjectCard";
import { constantsData } from "@/data/constantsData";
import { projectsData } from "@/data/projectsData";
import styles from "./ProjectSection.module.css";

const ProjectSection: React.FC = () => {
    const { recentsProjectsSection } = constantsData.homePage;
    const { phoenixEntreMares, connectHouse } = projectsData;

    return (
        <section id={styles.recentsProjects}>
            <HeaderTitleSection
                title={recentsProjectsSection.title}
                titleOverlay={recentsProjectsSection.titleOverlay}
            />
            <div className={styles.recentsProjectsCards}>
                <ProjectCard
                    cardImageURL={phoenixEntreMares.imageURL}
                    cardImageAltText={phoenixEntreMares.imageAltText}
                    cardTitleText={phoenixEntreMares.title}
                    cardDescriptionText={phoenixEntreMares.description}
                    cardDetailsData="20/06/2023"
                    cardDetailsDuration="15 Dias"

                />
                <ProjectCard
                    cardImageURL={connectHouse.imageURL}
                    cardImageAltText={connectHouse.imageAltText}
                    cardTitleText={connectHouse.title}
                    cardDescriptionText={connectHouse.description}
                    cardDetailsData="22/07/2023"
                    cardDetailsDuration="15 Dias"
                />
            </div>
        </section>
    );
};

export default ProjectSection;