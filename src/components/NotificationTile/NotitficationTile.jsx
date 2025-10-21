import styles from './NotificationTile.module.css';

const NotificationTile = ({ title, icon, sinceWhen, children }) => {
  return (
    <div className={styles.tile}>
      <div className='w-full'>
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            {icon && <img src={icon} className={styles.icon} draggable="false" />}
            {title}
          </div>
          <div className='font-light text-base text-neutral-500 text-right'>{sinceWhen}</div>
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default NotificationTile;