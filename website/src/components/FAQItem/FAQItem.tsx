import React, { useState } from "react";
import NeumorphismContainer from "../NeumorphismContainer/NeumorphismContainer";
import { faqItems } from "@/data/homePageData";
import { FcExpand } from "react-icons/fc";
import styles from "./FAQItem.module.css";

export default function FAQItem() {
    const [expandedItemIndex, setExpandedItemIndex] = useState(-1);

    const toggleDescription = (index: number) => {
        if (expandedItemIndex === index) {
            setExpandedItemIndex(-1); // Fecha o item se já estiver aberto
        } else {
            setExpandedItemIndex(index);
        }
    };

    return (
        <div className={styles.faqItemContainer}>
            {faqItems.map((faq, index) => {
                const isExpanded = expandedItemIndex === index;

                return (
                    <NeumorphismContainer key={faq.question}>
                        <div className={styles.faqCard}>
                            <button className={styles.toggle} onClick={() => toggleDescription(index)}>
                                {faq.question}
                                <i className={`${styles.expandIcon} ${isExpanded ? styles.visible : ""}`}>
                                    <FcExpand />
                                </i>
                            </button>
                            <div className={`${styles.faqDescription} ${isExpanded ? styles.expanded : ""}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    </NeumorphismContainer>
                );
            })}
        </div>
    );
}
