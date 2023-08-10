import Footer from "@/components/Footer/Footer";
import ContactSection from "@/components/Home/ContactSection/ContactSection";
import FAQSection from "@/components/Home/FAQSection/FAQSection";
import ProjectSection from "@/components/Home/ProjectsSection/ProjectSection";
import ServicesSection from "@/components/Home/ServicesSection/ServicesSection";
import Navbar from "@/components/Navbar/Navbar";
import styles from "@/styles/PortifolioPage.module.css"
export default function Portifolio() {
    return (
        <>
            <Navbar />
            <main id={styles.portifolio}>
                <ProjectSection />
                <ServicesSection />
                <FAQSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}