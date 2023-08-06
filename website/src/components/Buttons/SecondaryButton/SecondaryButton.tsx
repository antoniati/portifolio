/**
 * Componente reutilizável - Botão Secundário.
 *
 * @param secondaryButtonText Texto exibido no Botão Secundário.
 * @param secondaryButtonURL URL para redirecionar ao clicar no Botão Secundário.
 */

// Importa os estilos CSS específicos para o componente Botão Secundário.
import styles from "./SecondaryButton.module.css";

// Propriedades esperadas pelo componente Botão Secundário.
interface SecondaryButtonProps {
    secondaryButtonText: string;
    secondaryButtonURL: string;
}

// Componente Funcional Botão Secundário
const SecondaryButton: React.FC<SecondaryButtonProps> = ({ secondaryButtonText, secondaryButtonURL }) => {
    return <a id={styles.secondaryButton} href={secondaryButtonURL}> {secondaryButtonText} </a>
};

export default SecondaryButton;
