import React from 'react';
import { constantsData } from '@/data/constantsData';
import styles from './DropDownMenu.module.css';

interface DropdownMenuProps {
  isOpen: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen }) => {
  const { pageLinks, navItemTexts } = constantsData;
  return (
    <ul className={`${styles.dropdownMenu} ${isOpen ? styles.open : ''}`}>
      <li className={styles.dropDownnavItem}>
        <a
          className={styles.dropDownnavLink}
          href={pageLinks.URLToAboutPage}
        >
          {navItemTexts.about}
        </a>
      </li>
      <li className={styles.dropDownnavItem}>
        <a
          className={styles.dropDownnavLink}
          href={pageLinks.URLToPortifolioPage}
        >
          {navItemTexts.portifolio}
        </a>
      </li>
      <li className={styles.dropDownnavItem}>
        <a
          className={styles.dropDownnavLink}
          href={pageLinks.URLToServicesPage}
        >
          {navItemTexts.services}
        </a>
      </li>
      <li className={styles.dropDownnavItem}>
        <a
          className={styles.dropDownnavLink}
          href={pageLinks.URLToContactPage}
        >
          {navItemTexts.contact}
        </a>
      </li>
    </ul>
  );
};

export default DropdownMenu;
