import styles from "./HeaderTitleSection.module.css";

interface HeaderTitleSectionProps {
  title: string;
  titleOverlay: string;
  description: string;
}

const HeaderTitleSection: React.FC<HeaderTitleSectionProps> = ({ title, titleOverlay, description }) => {
  return (
    <div className={styles.headerTexts}>
      <div className={styles.headerTitle}>
        <span className={styles.headerTextOverlay}>
          {titleOverlay}
        </span>
        <h2 className={styles.headerTitleText}>
          {title}
        </h2>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default HeaderTitleSection;