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

import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
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
            <a href="mailto:rovicxavier150@gmail.com" target="_blank" className={styles.socialIcon}><SiGmail /></a>
            <a href="https://www.github.com/rxaliman/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaGithub /></a>
            <a href="https://www.facebook.com/rovicxavier" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaFacebook /></a>
            <a href="https://www.linkedin.com/in/rovic-xavier-aliman-2887ba312/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-3 px-3 min-[425px]:px-6 min-[425px]:gap-6'>
        <NotificationTile title="Rovic sent a message." sinceWhen="Oct. 19, 2025" icon={MessageIcon} dataAos="fade-up" dataAosDuration="200" >
          Hello there! This page is a work in progress. More updates and content will be added soon. Stay tuned!
        </NotificationTile>
        <div className='flex max-[768px]:flex-col gap-3 min-[425px]:gap-6 basis-0'>
          <WindowTile title='ID Picture.jpg' className='flex justify-center p-4' dataAos="fade-up" dataAosDuration="200">
            <img src={IdPic} className='w-50 max-h-min min-[768px]:shrink-0' />
          </WindowTile>
          <WindowTile title="About Me" className="flex items-center p-4" dataAos="fade-up" dataAosDuration="200">
            I am an aspiring software engineer with a passion for creating innovative solutions and a strong foundation in computer science. Skilled in various programming languages and frameworks, I am eager to contribute to impactful projects and continuously expand my knowledge in the tech industry.
          </WindowTile>
        </div>
        <WindowTile title="Projects" className="p-4 text-white" dataAos="fade-up" dataAosDuration="200">
          Projects will be here soon...
        </WindowTile>
        <WindowTile title="Technology Stacks" className="flex flex-wrap gap-5 p-4" dataAos="fade-up" dataAosDuration="200">
          <WindowTileSection title="Web Development">
            <div className='flex flex-wrap justify-center gap-4'>
              <AppIcon icon={HtmlIcon} label="HTML" />
              <AppIcon icon={CssIcon} label="CSS" />
              <AppIcon icon={JavascriptIcon} label="JavaScript" />
              <AppIcon icon={ReactIcon} label="ReactJS" />
              <AppIcon icon={VueIcon} label="VueJS" />
              <AppIcon icon={EjsIcon} label="EJS" />
              <AppIcon icon={RazorIcon} label="ASP.NET Razor" />
              <AppIcon icon={BootstrapIcon} label="Bootstrap" />
              <AppIcon icon={TailwindIcon} label="Tailwind" />
              <AppIcon icon={ViteIcon} label="Vite" />
            </div>
          </WindowTileSection>
          <WindowTileSection title="Back-end & Server Development">
            <div className='flex flex-wrap justify-center gap-4'>
              <AppIcon icon={ExpressIcon} label="ExpressJS" />
              <AppIcon icon={AspDotNetIcon} label="ASP.NET" />
              <AppIcon icon={NodeIcon} label="NodeJS" />
              <AppIcon icon={DjangoIcon} label="Django" />
              <AppIcon icon={EFCoreIcon} label="Entity Framework" />
              <AppIcon icon={MsSqlIcon} label="Microsoft SQL" />
            </div>
          </WindowTileSection>
          <WindowTileSection title="Mobile & Cross-platform Development">
            <div className='flex flex-wrap justify-center gap-4'>
              <AppIcon icon={FlutterIcon} label="Flutter" />
              <AppIcon icon={DartIcon} label="Dart" />
              <AppIcon icon={FletIcon} label="Flet" />
              <AppIcon icon={StreamlitIcon} label="Streamlit" />
            </div>
          </WindowTileSection>
          <WindowTileSection title="AI, ML, & Conversational Development">
            <div className='flex flex-wrap justify-center gap-4'>
              <AppIcon icon={GeminiIcon} label="Gemini API" />
              <AppIcon icon={DialogflowIcon} label="Dialogflow" />
            </div>
          </WindowTileSection>
          <WindowTileSection title="Core Languages & Utilities">
            <div className='flex flex-wrap justify-center gap-4'>
              <AppIcon icon={PythonIcon} label="Python" />
              <AppIcon icon={JavaIcon} label="Java" />
              <AppIcon icon={CSharpIcon} label="C#" />
              <AppIcon icon={CPlusPlusIcon} label="C/C++" />
            </div>
          </WindowTileSection>
          <WindowTileSection title="DevOps, Cloud & Tools">
            <div className='flex flex-wrap justify-center gap-4'>
              <AppIcon icon={GitIcon} label="Git" />
              <AppIcon icon={GitHubIcon} label="GitHub" />
              <AppIcon icon={GitLabIcon} label="GitLab" />
              <AppIcon icon={VercelIcon} label="Vercel" />
              <AppIcon icon={SmarterASPDotNetIcon} label="SmarterASP.NET" />
              <AppIcon icon={DbeaverIcon} label="DBeaver" />
              <AppIcon icon={FirebaseIcon} label="Firebase" />
              <AppIcon icon={FirebaseStudioIcon} label="Firebase Studio" />
              <AppIcon icon={VSCodeIcon} label="VS Code" />
              <AppIcon icon={VSCommunityIcon} label="VS Community" />
            </div>
          </WindowTileSection>
        </WindowTile>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;