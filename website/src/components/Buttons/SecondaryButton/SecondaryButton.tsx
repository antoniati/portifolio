import styles from "./SecondaryButton.module.css";

interface SecondaryButtonProps {
    secondaryButtonText: string;
    secondaryButtonURL: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = (props) => {
    const { secondaryButtonText, secondaryButtonURL } = props;
    return (
            <a  id={styles.secondaryButton} href={secondaryButtonURL}> {secondaryButtonText} </a>
    );
};

export default SecondaryButton;
