import NeumorphismContainer from "@/components/NeumorphismContainer/NeumorphismContainer";
import SecondaryButton from "@/components/Buttons/SecondaryButton/SecondaryButton";
import { FcCalendar, FcClock } from "react-icons/fc";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
    cardTitleText: string;
    cardDescriptionText: string;
    cardImageURL: string;
    cardImageAltText: string;
    cardDetailsDuration: string;
    cardDetailsData: string;

}

const ProjectCard: React.FC<ProjectCardProps> = ({
    cardTitleText,
    cardDescriptionText,
    cardImageURL,
    cardImageAltText,
    cardDetailsData,
    cardDetailsDuration,

}) => {
    return (
        <NeumorphismContainer>
            <div className={styles.card}>
                <img src={cardImageURL} alt={cardImageAltText} />
                <div className={styles.cardContent  }>
                    <div className={styles.cardTexts}>
                        <h3>{cardTitleText}</h3>
                        <p className={styles.cardDescription}> {cardDescriptionText} </p>
                    </div>
                    <div className={styles.cardDetails}>
                        <div className={styles.cardDetailsItem}>
                            <i><FcCalendar /></i>
                            <p className={styles.cardDetailsDescription}>
                                <strong>Data</strong>: {cardDetailsData}
                            </p>
                        </div>
                        <div className={styles.cardDetailsItem}>
                            <i><FcClock /></i>
                            <p className={styles.cardDetailsDescription}>
                                <strong>Duração</strong>: {cardDetailsDuration}
                            </p>
                        </div>
                    </div>
                    <SecondaryButton
                        secondaryButtonText="Visite o site"
                        secondaryButtonURL="#"
                    />
                </div>
            </div>
        </NeumorphismContainer >
    );
};

export default ProjectCard;