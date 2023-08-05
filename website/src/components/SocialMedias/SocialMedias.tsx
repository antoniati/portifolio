import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs"
import styles from "./SocialMedias.module.css";

const SocialMedias: React.FC = () => {
    return (
        <div className={styles.icons}>
            <a className={styles.linkedin} href="">
                <i ><BsLinkedin /></i>
            </a>
            <a className={styles.instagram} href="">
                <i ><BsInstagram /></i>
            </a>
            <a className={styles.github} href="">
                <i ><BsGithub /></i>
            </a>
        </div>
    );
};

export default SocialMedias;