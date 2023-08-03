import { IconBaseProps } from "react-icons";
import styles from "./ServiceCard.module.css";
import SecondaryButton from "@/components/Buttons/SecondaryButton/SecondaryButton";

interface ServiceCardProps {
    cardTitleText: string;
    cardDescriptionText: string;
    cardInfoIcon: React.ComponentType<IconBaseProps>
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    cardInfoIcon: CardInfoIcon,
    cardTitleText,
    cardDescriptionText
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.box}>
                <div className={styles.content}>
                    <i><CardInfoIcon /></i>
                    <div className={styles.cardTexts}>
                        <h3>{cardTitleText}</h3>
                        <p> {cardDescriptionText} </p>
                    </div>
                    <SecondaryButton
                        secondaryButtonText="Ver Detalhes"
                        secondaryButtonURL="#"
                    />
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;