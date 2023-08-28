/**
 * Componente reutilizável que exibe um botão para iniciar uma conversa no WhatsApp
 *
 * Este componente renderiza um botão estilizado que, ao ser clicado, abre uma
 * conversa no WhatsApp com um número pré-definido
 */

// Importa o Icone do WhatsApp
import { BsWhatsapp } from "react-icons/bs"

// Importa os estilos CSS específicos para o componente Botão WhatsApp
import styles from "./WhatsappButton.module.css";

//Componente Funcional Botão WhatsApp.
export default function WhatsAppButton() {
    return (
        <a
            id={styles.whatsapp}
            href="https://api.whatsapp.com/send?phone=13981257704" // URL do WhatsApp para redirecionamento
            target="_blank" // Abre o link em uma nova aba
            rel="noopener noreferrer"
        >
            <i> <BsWhatsapp /> </i>
            <span> Whatsapp </span>
        </a>
    );
}
