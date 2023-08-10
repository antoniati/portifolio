import React, { useState } from 'react';
import DropdownMenu from '@/components/Navbar/DropdownMenu/DropDownMenu';
import ToggleMenu from '@/components/Navbar/ToggleMenu/ToggleMenu';
import { constantsData } from '@/data/constantsData';
import styles from './Navbar.module.css';
import Logo from '../Logo/Logo';

const Navbar: React.FC = () => {
  const { navItem } = constantsData;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id={styles.navbarContainer}>
      <div className={styles.navbarContent}>
        <Logo />
        <ul className={styles.navList}>
          {navItem.map((navItem) => {
            return (
              <a
                key={navItem.title}
                href={navItem.URLToPage}
                className={`${styles.navItem} ${styles.navItemWrapper}`}
              >
                {navItem.title}
              </a>
            );
          })}
        </ul>
        <ToggleMenu onClick={toggleMenuHandler} isOpen={isMenuOpen} />
        {isMenuOpen && <DropdownMenu isOpen={isMenuOpen} />}
      </div>
    </nav>
  );
};

export default Navbar;
