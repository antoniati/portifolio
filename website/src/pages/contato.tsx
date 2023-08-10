import Footer from "@/components/Footer/Footer";
import ContactSection from "@/components/Home/ContactSection/ContactSection";
import FAQSection from "@/components/Home/FAQSection/FAQSection";
import Navbar from "@/components/Navbar/Navbar"

import styles from "@/styles/ContactPage.module.css";

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main id={styles.contact}>
                <ContactSection />
                <FAQSection />
            </main>
            <Footer />
        </>
    );
}