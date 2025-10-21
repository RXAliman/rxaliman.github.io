import styles from './AppIcon.module.css';

const AppIcon = ({ icon, label, iconClassName }) => {
  return (
    <div className={styles.container}>
      <img src={icon} className={`${styles.icon} ${iconClassName}`} draggable="false" />
      <div className={styles.label}>{label}</div>
    </div>
  );
}

export default AppIcon;