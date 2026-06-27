import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import AOS from 'aos';

import 'aos/dist/aos.css';

import styles from './Home.module.css';

import Logo from '../../assets/images/logo.svg';

import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import Footer from '../../components/Footer/Footer';
const HomePage = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className="text-white font-sans flex items-center gap-4">
          <img src={Logo} alt="Logo" className={styles.heroLogo} draggable="false" />
          <div className={styles.heroLogoText}>
            <h1>ROVIC</h1>
            <h1>XAVIER</h1>
            <h1>ALIMAN</h1>
          </div>
        </div>
        <Link to="/links" className={styles.linksBtn}>Connect with Me</Link>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;