import ContactSection from "@/components/Home/ContactSection/ContactSection";
import FAQSection from "@/components/Home/FAQSection/FAQSection";
import ProjectSection from "@/components/Home/ProjectsSection/ProjectSection";
import ServicesSection from "@/components/Home/ServicesSection/ServicesSection";
import Navbar from "@/components/Navbar/Navbar";
import styles from "@/styles/ServicesPage.module.css";

export default function Services() {
    return (
        <>
            <Navbar />
            <main id={styles.servicos}>
                <ServicesSection />
                <ProjectSection />
                <FAQSection />
                <ContactSection />
            </main>
        </>
    );
};