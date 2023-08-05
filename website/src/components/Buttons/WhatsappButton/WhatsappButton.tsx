import { BsWhatsapp } from "react-icons/bs"
import styles from "./WhatsappButton.module.css";

const WhatsAppButton: React.FC = () => {
    return (
        <a id={styles.whatsapp} href="" target="_blank" >
            <i> <BsWhatsapp /> </i>
            <span> Whatsapp </span>
        </a>
    );
};

export default WhatsAppButton;
