import React from 'react';
import { constantsData } from '@/data/constantsData';
import styles from './DropDownMenu.module.css';
import NeumorphismContainer from '@/components/NeumorphismContainer/NeumorphismContainer';
import SocialMedias from '@/components/SocialMedias/SocialMedias';

interface DropdownMenuProps {
  isOpen: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen }) => {
  const { navItem } = constantsData;
  return (
    <ul className={`${styles.dropdownMenu} ${isOpen ? styles.open : ''}`}>
      {navItem.map((navItem) => {
        return (
          <NeumorphismContainer key={navItem.title}>
            <li className={styles.dropDownnavItem}>
              <a
                className={styles.dropDownnavLink}
                href={navItem.URLToPage}
              >
                {navItem.title}
              </a>
            </li>
          </NeumorphismContainer>
        );
      })}
      <div className={styles.dropDownSocialMedias}>
        <SocialMedias />
      </div>
    </ul>
  );
};

export default DropdownMenu;
