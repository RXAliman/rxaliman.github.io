import styles from './Home.module.css';

import Logo from '../../assets/images/logo.svg';
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  return (
    <>
      {/* <Header /> */}
      <div className={styles.hero}>
        <div className="text-white font-sans flex items-center gap-4">
          <img src={Logo} alt="Logo" className={styles.heroLogo} draggable="false" />
          <div className={styles.heroLogoText}>
            <h1>ROVIC</h1>
            <h1>XAVIER</h1>
            <h1>ALIMAN</h1>
          </div>
        </div>
        <div className={styles.supporting}>
          Aspiring Software Engineer
        </div>
        <div className={styles.socials + ' flex flex-col items-center text-white gap-4'}>
          <div className="flex gap-4">
            <a href="mailto:rovicxavier150@gmail.com" target="_blank" className={styles.socialIcon}><SiGmail /></a>
            <a href="https://www.github.com/rxaliman/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaGithub /></a>
            <a href="https://www.facebook.com/rovicxavier" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaFacebook /></a>
            <a href="https://www.linkedin.com/in/rovic-xavier-aliman-2887ba312/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className='m-4 p-4 rounded-2xl text-white border-1 border-gray-500 bg-neutral-900'>
        Short Biography will be here soon...
      </div>
      <div className='m-4 p-4 rounded-2xl text-white border-1 border-gray-500 bg-neutral-900'>
        Projects will be here soon...
      </div>
      <div className='m-4 p-4 rounded-2xl text-white border-1 border-gray-500 bg-neutral-900'>
        Developments will be here soon...
      </div>
      <Footer />
    </>
  );
}

export default HomePage;