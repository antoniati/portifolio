import NeumorphismContainer from "@/components/NeumorphismContainer/NeumorphismContainer";
import HeaderTitleSection from "../HeaderSection/HeaderTitleSection";
import ContactForm from "@/components/ContactForm/ContactForm";
import WhatsAppButton from "@/components/Buttons/WhatsappButton/WhatsappButton";
import SocialMedias from "@/components/SocialMedias/SocialMedias";
import {contactSection} from "@/data/homePageData";
import styles from "./ContactSection.module.css";

const ContactSection: React.FC = () => {
    return (
        <section id={styles.contact}>
            <HeaderTitleSection
                title={contactSection.title}
                titleOverlay={contactSection.title}
                description={contactSection.description}
            />
            <div className={styles.contactContent}>
                <ContactForm />
                <div className={styles.contactOptions}>
                    <NeumorphismContainer>
                        <div className={styles.contactItem}>
                            <h3>{contactSection.titleWhatsapp}</h3>
                            <WhatsAppButton />
                        </div>
                    </NeumorphismContainer>
                    <NeumorphismContainer>
                        <div className={styles.contactItem}>
                            <h3>{contactSection.titleSocialMedias}</h3>
                            <SocialMedias />
                        </div>
                    </NeumorphismContainer>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
