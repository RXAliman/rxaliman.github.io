import styles from './WindowTileSection.module.css';

const WindowTileSection = ({ title, children }) => {
  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>{title}</div>
      <div className={styles.sectionContent}>
        {children}
      </div>
    </div>
  );
}

export default WindowTileSection;