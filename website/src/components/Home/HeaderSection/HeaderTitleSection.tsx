import styles from "./HeaderTitleSection.module.css";

interface HeaderTitleSectionProps {
  title: string;
  titleOverlay: string;
}

const HeaderTitleSection: React.FC<HeaderTitleSectionProps> = ({ title, titleOverlay }) => {
  return (
    <div className={styles.headerTexts}>
      <span className={styles.headerTextOverlay}>
        {titleOverlay}
      </span>
      <h2 className={styles.headerTitleText}>
        {title}
      </h2>
    </div>
  );
};

export default HeaderTitleSection;