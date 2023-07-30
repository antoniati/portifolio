import { constantsData } from "@/data/constantsData";
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {

    const { logo, pageLinks, navItemTexts} = constantsData;

    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.navbarContent}>
                <div className={styles.navbarLogo}>
                    <img className={styles.navbarLogoImage} src="/logo.svg" alt={logo.logoAltText} />
                    <h1 className={styles.navbarLogoText}> {logo.logoText} </h1>
                </div>
                <ul className={styles.navList}>
                    <a className={styles.navItem} href={pageLinks.URLToAboutPage}>
                        {navItemTexts.about}
                    </a>
                    <a className={styles.navItem} href={pageLinks.URLToPortifolioPage}>
                        {navItemTexts.portifolio}
                    </a>
                    <a className={styles.navItem} href={pageLinks.URLToServicesPage}>
                        {navItemTexts.services}
                    </a>
                    <a className={styles.navItem} href={pageLinks.URLToContactPage}>
                        {navItemTexts.contact}
                    </a>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;