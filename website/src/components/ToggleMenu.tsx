import { useState } from 'react';
import styles from '@/styles/ToggleMenu.module.css';

const ToggleMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenuHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <span
            className={`${styles.toggleMenuButton} ${isOpen ? styles.open : ''}`}
            onClick={toggleMenuHandler}
        >
            <span></span>
            <span></span>
            <span></span>
        </span>
    );
};

export default ToggleMenu;
