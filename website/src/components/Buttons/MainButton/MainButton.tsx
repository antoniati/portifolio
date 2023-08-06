/**
 * Componente reutilizável botão principal - Botão Principal
 *
 * @param mainButtonURL URL para redirecionar ao clicar no Botão Principal.
 * @param mainButtonText Texto exibido no Botão Principal.
 */

// Importa os estilos CSS específicos para o componente Botão Principal.
import styles from "./MainButton.module.css";

// Propriedades esperadas pelo componente Botão Principal
interface MainButtonProps {
    mainButtonText: string; // Texto exibido no botão
    mainButtonURL: string; // URL para onde o botão redireciona
}

// Componente funcional Botão Principal
const MainButton: React.FC<MainButtonProps> = ({ mainButtonURL, mainButtonText }) => {
    return <a id={styles.mainButton} href={mainButtonURL}> {mainButtonText} </a>
};

export default MainButton;
