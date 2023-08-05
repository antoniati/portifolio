import { useState } from 'react';
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs"

import DropdownMenu from '@/components/Navbar/DropdownMenu/DropDownMenu';
import ToggleMenu from '@/components/Navbar/ToggleMenu/ToggleMenu';

import { constantsData } from '@/data/constantsData';

import styles from './Navbar.module.css';

const Navbar = () => {
  const { logo, pageLinks, navItemTexts, personalInfo } = constantsData;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id={styles.navbarContainer}>
      <div className={styles.navbarContent}>
        <div className={styles.navbarLogo}>
          <img
            className={styles.navbarLogoImage}
            src="/logo.svg"
            alt={logo.logoAltText}
          />
          <h1 className={styles.navbarLogoText}>
            {personalInfo.name}
            <span>Programador Freelancer</span>
          </h1>
        </div>
        <ul className={styles.navList}>
          <a
            className={`${styles.navItem} ${styles.navItemWrapper}`}
            href={pageLinks.URLToAboutPage}
          >
            {navItemTexts.about}
          </a>
          <a
            className={`${styles.navItem} ${styles.navItemWrapper}`}
            href={pageLinks.URLToPortifolioPage}
          >
            {navItemTexts.portifolio}
          </a>
          <a
            className={`${styles.navItem} ${styles.navItemWrapper}`}
            href={pageLinks.URLToServicesPage}
          >
            {navItemTexts.services}
          </a>
          <a
            className={`${styles.navItem} ${styles.navItemWrapper}`}
            href={pageLinks.URLToContactPage}
          >
            {navItemTexts.contact}
          </a>
        </ul>
        <ToggleMenu onClick={toggleMenuHandler} isOpen={isMenuOpen} />
        {isMenuOpen && <DropdownMenu isOpen={isMenuOpen} />}
      </div>
    </nav>
  );
};

export default Navbar;
