import { useEffect } from 'react';

import AOS from 'aos';

import 'aos/dist/aos.css';

import styles from './Home.module.css';

import Logo from '../../assets/images/logo.svg';
import IdPic from '../../assets/images/id.webp';
import MessageIcon from '../../assets/images/apple-message.webp';

import GeminiIcon from '../../assets/images/tech/gemini.webp';
import DialogflowIcon from '../../assets/images/tech/dialogflow.webp';
import HtmlIcon from '../../assets/images/tech/html5.webp';
import CssIcon from '../../assets/images/tech/css3.webp';
import JavascriptIcon from '../../assets/images/tech/javascript.webp';
import ReactIcon from '../../assets/images/tech/react.webp';
import VueIcon from '../../assets/images/tech/vue.webp';
import BootstrapIcon from '../../assets/images/tech/bootstrap.webp';
import TailwindIcon from '../../assets/images/tech/tailwind.webp';
import ViteIcon from '../../assets/images/tech/vite.webp';
import EjsIcon from '../../assets/images/tech/ejs.webp';
import RazorIcon from '../../assets/images/tech/razor.webp';
import ExpressIcon from '../../assets/images/tech/express.webp';
import AspDotNetIcon from '../../assets/images/tech/aspdotnet.webp';
import NodeIcon from '../../assets/images/tech/node.webp';
import DjangoIcon from '../../assets/images/tech/django.webp';
import EFCoreIcon from '../../assets/images/tech/efcore.webp';
import MsSqlIcon from '../../assets/images/tech/mssql.webp';
import FlutterIcon from '../../assets/images/tech/flutter.webp';
import DartIcon from '../../assets/images/tech/dart.webp';
import FletIcon from '../../assets/images/tech/flet.webp';
import StreamlitIcon from '../../assets/images/tech/streamlit.webp';
import PythonIcon from '../../assets/images/tech/python.webp';
import JavaIcon from '../../assets/images/tech/java.webp';
import CSharpIcon from '../../assets/images/tech/csharp.webp';
import CPlusPlusIcon from '../../assets/images/tech/cplusplus.webp';
import GitIcon from '../../assets/images/tech/git.webp';
import GitHubIcon from '../../assets/images/tech/github.webp';
import GitLabIcon from '../../assets/images/tech/gitlab.webp';
import VercelIcon from '../../assets/images/tech/vercel.webp';
import SmarterASPDotNetIcon from '../../assets/images/tech/smarteraspdotnet.webp';
import DbeaverIcon from '../../assets/images/tech/dbeaver.webp';
import FirebaseIcon from '../../assets/images/tech/firebase.webp';
import FirebaseStudioIcon from '../../assets/images/tech/firebasestudio.webp';
import VSCodeIcon from '../../assets/images/tech/vscode.webp';
import VSCommunityIcon from '../../assets/images/tech/vscommunity.webp';

import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

import Footer from '../../components/Footer/Footer';
import NotificationTile from '../../components/NotificationTile/NotitficationTile';
import WindowTile from '../../components/WindowTile/WindowTile';
import WindowTileSection from '../../components/WindowTileSection/WindowTileSection';
import AppIcon from '../../components/AppIcon/AppIcon';

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
   });
  }, []);

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
        <div className={styles.supporting}>
          Aspiring Software Engineer
        </div>
        <div className={styles.socials + ' flex flex-col items-center text-white gap-4'}>
          <div className="flex gap-4">
            <a href="mailto:rovicxavier150@gmail.com" target="_blank" style={{ '--i': 1 }} className={styles.socialIcon}><SiGmail /></a>
            <a href="https://www.linkedin.com/in/rovic-xavier-aliman-2887ba312/" target="_blank" rel="noopener noreferrer" style={{ '--i': 2 }} className={styles.socialIcon}><FaLinkedin /></a>
            <a href="https://www.github.com/rxaliman/" target="_blank" rel="noopener noreferrer" style={{ '--i': 3 }} className={styles.socialIcon}><FaGithub /></a>
            <a href="https://www.facebook.com/rovicxavier" target="_blank" rel="noopener noreferrer" style={{ '--i': 4 }} className={styles.socialIcon}><FaFacebook /></a>
            <a href="https://www.instagram.com/rxaliman/" target="_blank" rel="noopener noreferrer" style={{ '--i': 5 }} className={styles.socialIcon}><FaInstagram /></a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;