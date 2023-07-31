import styles from "@/styles/PerfilImage.module.css";

interface PerfilImageProps {
    imageURL: string;
    imageAltText: string;
}

const PerfilImage: React.FC<PerfilImageProps> = ({ imageURL, imageAltText }) => {
    return (
        <div id={styles.boxImage}>
            <div className={styles.boxImageContent}>
                <img
                    className={styles.perfilImage}
                    src={imageURL}
                    alt={imageAltText}
                />
            </div>
        </div>
    );
};

export default PerfilImage;
