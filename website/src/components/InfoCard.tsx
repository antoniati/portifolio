import { FcCalendar, FcClock } from "react-icons/fc"
import styles from "@/styles/InfoCard.module.css";
import MainButton from "./MainButton";

interface InfoCardProps {
    cardImageURL: string;
    cardImageAltText: string;
    cardTitleText: string;
    cardDescriptionText: string;
    cardInfoDataText: string;
    cardInfoDurationText: string;
    cardInfoButtonText: string;
    cardInfoButtonURL: string;
}

const InforCard: React.FC<InfoCardProps> = ({
    cardImageURL,
    cardImageAltText,
    cardTitleText,
    cardDescriptionText,
    cardInfoDataText,
    cardInfoDurationText,
    cardInfoButtonText,
    cardInfoButtonURL
}) => {
    return (
        <div id={styles.card}>
            <img className={styles.imageReverse} src={cardImageURL} alt={cardImageAltText} />
            <div className={styles.cardInfo}>
                <div className={styles.cardInfoTexts}>
                    <h3 className={styles.cardInfoTitle}> {cardTitleText} </h3>
                    <p className={styles.cardInfoDescription}> {cardDescriptionText} </p>
                </div>
                <div className={styles.cardInfoDetails}>
                    <div className={styles.cardInfoItem}>
                        <p className={styles.cardInfoDataDescription}>
                            <FcCalendar />
                            <strong>Data:</strong>
                            {cardInfoDataText}
                        </p>
                    </div>
                    <div className={styles.cardInfoItem}>
                        <p className={styles.cardInfoDataDescription}>
                            <FcClock />
                            <strong>Duração:</strong>
                            {cardInfoDurationText}
                        </p>
                    </div>
                </div>
                <div className={styles.cardInfoButtons}>
                    <a className={styles.cardInfoButton} href={cardInfoButtonURL}>
                        {cardInfoButtonText}
                    </a>
                    <MainButton
                        mainButtonText="Visite o Website"
                        mainButtonURL=""
                    />
                </div>
            </div>
        </div>
    );
};

export default InforCard;