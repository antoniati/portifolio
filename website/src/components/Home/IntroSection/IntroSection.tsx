import PerfilImage from "@/components/PerfilImage/PerfilImage";
import MainButton from "@/components/Buttons/MainButton/MainButton";
import SocialMedias from "@/components/SocialMedias/SocialMedias";
import { constantsData } from "@/data/constantsData";
import { presentationSection } from "@/data/homePageData";
import styles from "./IntroSection.module.css";

const IntroSection = () => {

    return (
        <section id={styles.introSection}>
            <PerfilImage
                imageURL={constantsData.personalInfo.imagePerfil}
                imageAltText={constantsData.personalInfo.imagePerfilAltText}
            />
            <div className={styles.introTexts}>
                <h1 className={styles.introTitleText}>
                    <span>{constantsData.personalInfo.job}</span> {constantsData.personalInfo.name}
                </h1>
                <p className={styles.introDescriptionText}>
                    {presentationSection.subtitle}
                </p>
                <MainButton
                    mainButtonText={presentationSection.buttonText}
                    mainButtonURL={presentationSection.buttonURL}
                />
            </div>
            <SocialMedias />
        </section>
    );
};

export default IntroSection;
