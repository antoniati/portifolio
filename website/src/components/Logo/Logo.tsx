import React from "react";
import Image from 'next/image';
import { constantsData } from '@/data/constantsData';
import styles from "./Logo.module.css";

const Logo: React.FC = () => {
    const { logo, personalInfo } = constantsData;
    return (
        <div className={styles.navbarLogo}>
            <Image
                className={styles.navbarLogoImage}
                src={logo.logoImageURL}
                alt={logo.logoAltText}
                width={36}
                height={36}
            />
            <h1 className={styles.navbarLogoText}>
                {personalInfo.name}
                <span>{personalInfo.job}</span>
            </h1>
        </div>
    );
};

export default Logo;
