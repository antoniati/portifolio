import React from "react";
import styles from "./ContactItem.module.css";

interface ContactItemProps {
    labelText: string;
    labelFor: string;
    children: React.ReactNode;
};

const ContactItem: React.FC<ContactItemProps> = (props: ContactItemProps) => {
    const {
        labelText,
        labelFor,
        children
    } = props;

    return (
        <div id={styles.contactItem}>
            <label className={styles.contactItemLabel} htmlFor={labelFor}>
                {labelText}
            </label>
            {children}
        </div>
    );
};

export default ContactItem;