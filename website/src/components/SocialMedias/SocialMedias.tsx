import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs"
import styles from "./SocialMedias.module.css";

const SocialMedias: React.FC = () => {
    return (
        <div className={styles.icons}>
            <a className={styles.linkedin} href="https://www.linkedin.com/in/felipe-antoniati-30983b231/" target="_blank">
                <i ><BsLinkedin /></i>
            </a>
            <a className={styles.instagram} href="https://www.instagram.com/antoniatifelipe/" target="_blank">
                <i ><BsInstagram /></i>
            </a>
            <a className={styles.github} href="https://github.com/antoniati" target="_blank">
                <i ><BsGithub /></i>
            </a>
        </div>
    );
};

export default SocialMedias;