/**
 * Componente reutilizável que exibe um botão para iniciar uma conversa no Telegram
 *
 * Este componente renderiza um botão estilizado que, ao ser clicado, abre uma
 * conversa no Telegram com um número pré-definido
 */

// Importa o Icone do Telegram
import { BsTelegram } from "react-icons/bs"

// Importa os estilos CSS específicos para o componente Botão Telegram
import styles from "./TelegramButton.module.css";

//Componente Funcional Botão Telegram.
export default function TelegramButton() {
    return (
        <a
            id={styles.telegram}
            href="https://t.me/felipeantoniati" // URL do Telegram para redirecionamento
            target="_blank" // Abre o link em uma nova aba
            rel="noopener noreferrer"
        >
            <i> <BsTelegram /> </i>
            <span> Telegram </span>
        </a>
    );
}
