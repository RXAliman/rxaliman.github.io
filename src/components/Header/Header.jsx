import styles from './Header.module.css';
import Logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <header className="p-3 fixed">
      <img src={Logo} alt="Logo" className={styles.logo + ' w-12 h-12'} draggable="false" />
    </header>
  );
}

export default Header;