import PerfilImage from "@/components/PerfilImage/PerfilImage";
import MainButton from "@/components/Buttons/MainButton/MainButton";
import { constantsData } from "@/data/constantsData";
import styles from "./IntroSection.module.css";

const IntroSection: React.FC = () => {
    const { personalInfo, homePage } = constantsData;
    return (
        <section id={styles.introSection}>
            <PerfilImage
                imageURL={personalInfo.imagePerfil}
                imageAltText={personalInfo.imagePerfilAltText}
            />
            <div className={styles.introTexts}>
                <h1 className={styles.introTitleText}>
                    <span>{personalInfo.job}</span> {personalInfo.name}
                </h1>
                <p className={styles.introDescriptionText}>
                    {homePage.introSection.description}
                </p>
            </div>
            <MainButton
                mainButtonText={homePage.introSection.buttonText}
                mainButtonURL="#contactSection"
            />
        </section>
    );
};

export default IntroSection;
