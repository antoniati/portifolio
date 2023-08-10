import React from "react";
import PerfilImage from "@/components/PerfilImage/PerfilImage";
import MainButton from "@/components/Buttons/MainButton/MainButton";
import SocialMedias from "@/components/SocialMedias/SocialMedias";
import { IntroSectionData } from "@/data/IntroSectionData";
import styles from "./IntroSection.module.css";

const IntroSection: React.FC = () => {
    const {
        title,
        titleSpan,
        subtitle,
        buttonText,
        buttonURL,
        imagePerfil,
        imageAltText
    } = IntroSectionData;

    return (
        <section id={styles.introSection}>
            <PerfilImage
                imageURL={imagePerfil}
                imageAltText={imageAltText}
            />
            <div className={styles.introTexts}>
                <h1 className={styles.introTitleText}> <span>{titleSpan}</span> {title}</h1>
                <p className={styles.introDescriptionText}> {subtitle} </p>
                <MainButton
                    mainButtonText={buttonText}
                    mainButtonURL={buttonURL}
                />
            </div>
            <SocialMedias />
        </section>
    );
};

export default IntroSection;
