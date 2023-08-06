
import HeaderTitleSection from "@/components/Home/HeaderSection/HeaderTitleSection";
import FAQItem from "@/components/FAQItem/FAQItem";
import styles from "./FAQSection.module.css";

export default function FAQSection() {
    return(
        <section id={styles.faq}>
           <HeaderTitleSection 
                title="Perguntas Frequentes" 
                titleOverlay="Perguntas Frequentes" 
                description="Suporte Informado para Suas Dúvidas"
            />
            <div className={styles.faqItemsContainer}>
                <FAQItem /> 
            </div>
        </section>
    );
};

