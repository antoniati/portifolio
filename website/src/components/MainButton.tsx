import styles from "@/styles/MainButton.module.css";

interface MainButtonProps {
    mainButtonText: string;
    mainButtonURL: string;
}

const MainButton: React.FC<MainButtonProps> = (props) => {
    const { mainButtonText, mainButtonURL } = props;
    return (
            <a  id={styles.mainButton} href={mainButtonURL}> {mainButtonText} </a>
    );
};

export default MainButton;
