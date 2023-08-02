import { IconBaseProps } from "react-icons";
import styles from "@/styles/ServiceCard.module.css";

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
                    <i><CardInfoIcon/></i>
                    <h3>{cardTitleText}</h3>
                    <p> {cardDescriptionText} </p>
                    <a className={styles.button} href="#">
                        Saiba Mais
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;