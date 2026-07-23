import { useContext } from 'react';
import { ThemeContext } from '../../App';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';

import catGif from '../../assets/images/cat.gif'
import catLightGif from '../../assets/images/cat-light.gif'

import styles from './NotFound.module.css';

const year = new Date().getFullYear();

const NotFoundPage = () => {
  const { isLightMode } = useContext(ThemeContext);

  return (
    <>
      <title>404 - Rovic Aliman</title>
      
      {/* Theme Toggle Button */}
      <ThemeToggle />


      <div className='h-screen flex flex-col justify-center items-center gap-2 p-3'>
        <img 
          src={isLightMode ? catGif : catLightGif} 
          width="100px" 
          draggable='false' 
          alt="404 Cat" 
        />
        <span className={styles.textPrimary}>Sorry... The page you're trying to access is not available.</span>
        <span className={styles.textSecondary}><a className={styles.textLink} href="/">Rovic Aliman</a> &copy; {year}</span>
      </div>
    </>
  );
}

export default NotFoundPage;