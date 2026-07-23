import { useContext } from 'react';
import { ThemeContext } from '../../App';
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import styles from './ThemeToggle.module.css';

const ThemeToggle = ({ className }) => {
  const { isLightMode, setIsLightMode } = useContext(ThemeContext);

  return (
    <button
      className={className || styles.themeToggleBtn}
      aria-label="Toggle theme"
      title="Toggle Theme"
      onClick={() => setIsLightMode(!isLightMode)}
    >
      {isLightMode ? <HiOutlineMoon /> : <HiOutlineSun />}
    </button>
  );
};

export default ThemeToggle;
