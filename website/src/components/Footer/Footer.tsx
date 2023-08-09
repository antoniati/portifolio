import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer id={styles.footer}>
            <div className={styles.footerContent}>
                <img src="/logo.svg" alt="Logo do Programador Felipe Antoniati" />
                <p className={styles.footerText}>
                    &copy; 2023 Felipe Antoniati.
                    <span>
                        Todos os direitos reservados.
                    </span>
                </p>
            </div>
        </footer>
    );
};