import NeumorphismContainer from "@/components/NeumorphismContainer/NeumorphismContainer";
import SecondaryButton from "@/components/Buttons/SecondaryButton/SecondaryButton";
import { IconBaseProps } from "react-icons";
import styles from "./ServiceCard.module.css";

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
        <NeumorphismContainer>
            <div className={styles.content}>
                <i><CardInfoIcon /></i>
                <div className={styles.cardTexts}>
                    <h3>{cardTitleText}</h3>
                    <p> {cardDescriptionText} </p>
                </div>
                <SecondaryButton
                    secondaryButtonText="Ver Detalhes"
                    secondaryButtonURL="https://felipeantoniati.com.br/servicos"
                />
            </div>
        </NeumorphismContainer>
    );
};

export default ServiceCard;
