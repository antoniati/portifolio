import React from 'react';
import styles from '@/styles/ToggleMenu.module.css';

interface ToggleMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

const ToggleMenu: React.FC<ToggleMenuProps> = ({ isOpen, onClick }) => {
  return (
    <button
      className={`${styles.toggleMenuButton} ${isOpen ? styles.open : ''}`}
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default ToggleMenu;
