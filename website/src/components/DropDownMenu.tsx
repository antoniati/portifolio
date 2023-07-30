import React from 'react';
import { constantsData } from '@/data/constantsData';
import styles from '@/styles/DropDownMenu.module.css';

interface DropdownMenuProps {
  isOpen: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen }) => {
  const { pageLinks, navItemTexts } = constantsData;
  return (
    <ul className={`${styles.dropdownMenu} ${isOpen ? styles.open : ''}`}>
      <a
        className={styles.dropDownnavItem}
        href={pageLinks.URLToAboutPage}
      >
        {navItemTexts.about}
      </a>
      <a
        className={styles.dropDownnavItem}
        href={pageLinks.URLToPortifolioPage}
      >
        {navItemTexts.portifolio}
      </a>
      <a
        className={styles.dropDownnavItem}
        href={pageLinks.URLToServicesPage}
      >
        {navItemTexts.services}
      </a>
      <a
        className={styles.dropDownnavItem}
        href={pageLinks.URLToContactPage}
      >
        {navItemTexts.contact}
      </a>
    </ul>
  );
};

export default DropdownMenu;
