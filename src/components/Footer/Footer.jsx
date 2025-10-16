import styles from "./Footer.module.css";

import Logo from "../../assets/images/logo.svg";

const Footer = () => {
  const year = new Date().getFullYear();

  return <>
    <footer className={styles.footer}>
        <div>© Rovic Aliman {year}</div>
        <div>Background image generated with AI</div>
    </footer>
  </>
}

export default Footer;