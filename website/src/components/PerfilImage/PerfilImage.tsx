import React from "react";
import styles from "./PerfilImage.module.css";
import Image from "next/image";

interface PerfilImageProps {
    imageURL: string;
    imageAltText: string;
}

const PerfilImage: React.FC<PerfilImageProps> = ({ imageURL, imageAltText }) => {
    return (
        <div id={styles.boxImage}>
            <div className={styles.boxImageContent}>
                <Image
                    className={styles.perfilImage}
                    src={imageURL}
                    alt={imageAltText}
                    width={500}
                    height={500}
                />
            </div>
        </div>
    );
};

export default PerfilImage;
