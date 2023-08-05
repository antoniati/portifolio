import HeaderTitleSection from "@/components/Home/HeaderSection/HeaderTitleSection";
import ProjectCard from "@/components/Cards/ProjectCard/ProjectCard";
import { projectsSection, projectCards } from "@/data/homePageData";
import styles from "./ProjectSection.module.css";

const ProjectSection: React.FC = () => {
    return (
        <section id={styles.recentsProjects}>
            <HeaderTitleSection
                title={projectsSection.title}
                titleOverlay={projectsSection.title}
                description={projectsSection.description}
            />
            <div className={styles.recentsProjectsCards}>
                {projectCards.map((project) => {
                    return (
                        <ProjectCard
                            key={project.title}
                            cardImageURL={project.imageURL}
                            cardImageAltText={project.imageAltText}
                            cardTitleText={project.title}
                            cardDescriptionText={project.description}
                            cardDetailsData={project.date}
                            cardDetailsDuration={project.duration}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default ProjectSection;