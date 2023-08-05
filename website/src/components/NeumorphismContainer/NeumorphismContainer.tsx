import styles from "./NeumorphismContainer.module.css";

interface NeumorphismContainerProps {
    children: React.ReactNode;
};

const NeumorphismContainer: React.FC<NeumorphismContainerProps> = ({children}) => {
    return (
        <div id={styles.container}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default NeumorphismContainer;
