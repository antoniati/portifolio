import { FcCalendar, FcClock } from "react-icons/fc";
import styles from "./ProjectCard.module.css";
import SecondaryButton from "@/components/Buttons/SecondaryButton/SecondaryButton";

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
        <div className={styles.card}>
            <div className={styles.box}>
                <div className={styles.imageContainer}>
                    <img src={cardImageURL} alt={cardImageAltText} />
                </div>
                <div className={styles.content}>
                    <div className={styles.cardTexts}>
                        <h3>{cardTitleText}</h3>
                        <p className={styles.cardDescription}> {cardDescriptionText} </p>
                    </div>
                    <div className={styles.cardDetails}>
                        <div className={styles.cardDetailsItem}>
                            <i><FcCalendar /></i>
                            <p className={styles.cardDetailsDescription}><strong>Data</strong>: {cardDetailsData}</p>
                        </div>
                        <div className={styles.cardDetailsItem}>
                            <i><FcClock /></i>
                            <p className={styles.cardDetailsDescription}><strong>Duração</strong>: {cardDetailsDuration}</p>
                        </div>
                    </div>
                    <SecondaryButton
                        secondaryButtonText="Visite o site"
                        secondaryButtonURL="#"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;