import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../App";
import styles from "./Links.module.css";
import profilePic from "../../assets/images/cG9naQ==.webp";
import qrCode from "../../assets/images/qr-code.png";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { HiOutlineExternalLink, HiOutlineMail, HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { IoLocationOutline, IoQrCodeOutline, IoCopyOutline } from "react-icons/io5";
import { FiSend, FiShare2 } from "react-icons/fi";
import Footer from "../../components/Footer/Footer";

const SOCIAL_LINKS = [
  { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/rxaliman", label: "LinkedIn" },
  { icon: FaFacebookF, url: "https://www.facebook.com/rovicxavier", label: "Facebook" },
  { icon: FaInstagram, url: "https://www.instagram.com/rxaliman", label: "Instagram" },
];

const LINK_CARDS = [
  {
    title: "Portfolio",
    description: "Personal website & portfolio",
    url: "/",
  },
  {
    title: "GitHub Profile",
    description: "Contains my project repositories",
    url: "https://github.com/RXAliman",
    newTab: true,
  },
];

const EMAIL = "rovicxavier150@gmail.com";

const PAGE_URL = "https://rxaliman.github.io/links";

const LinksPage = () => {
  const { isLightMode, setIsLightMode } = useContext(ThemeContext);
  const [qrOpen, setQrOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [snackbar, setSnackbar] = useState("");

  const handleShare = async () => {
    const shareData = {
      title: "Rovic Xavier Aliman",
      text: "Check out my links!",
      url: PAGE_URL,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(PAGE_URL);
        setSnackbar("Link copied to clipboard!");
        setTimeout(() => setSnackbar(""), 3000);
      }
    } catch (err) {
      /* User cancelled */
    }
  };

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(PAGE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      setSnackbar("Link copied to clipboard!");
      setTimeout(() => setSnackbar(""), 3000);
    } catch (err) {
      /* Clipboard failed */
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setSnackbar("Email copied to clipboard!");
      setTimeout(() => setSnackbar(""), 3000);
    } catch (err) {
      /* Clipboard failed */
    }
  };

  return (
    <>
      <title>Links - Rovic Aliman</title>
      <div className={styles.linksPage}>
        <div className={styles.container}>
          {/* Top-Right Actions */}
          <div className={styles.topActions}>
            <button
              className={styles.topActionBtn}
              aria-label="Toggle Theme"
              title="Toggle Theme"
              onClick={() => setIsLightMode(!isLightMode)}
            >
              {isLightMode ? <HiOutlineMoon /> : <HiOutlineSun />}
            </button>
            <button
              className={styles.topActionBtn}
              aria-label="QR Code"
              title="QR Code"
              onClick={() => setQrOpen(true)}
            >
              <IoQrCodeOutline />
            </button>
            <button
              className={styles.topActionBtn}
              aria-label="Share"
              title="Share"
              onClick={handleShare}
            >
              <FiShare2 />
            </button>
          </div>
          {/* Profile Section */}
          <section className={styles.profileSection}>
            <div className={styles.profilePicWrapper}>
              <img
                src={profilePic}
                alt="Rovic Xavier Aliman"
                draggable="false"
                className={styles.profilePic}
              />
            </div>
            <h1 className={styles.profileName}>Rovic Xavier Aliman</h1>
            <p className={styles.profileTitle}>Full-Stack Developer</p>
            <p className={styles.profileLocation}>
              <IoLocationOutline className={styles.locationIcon} />
              Philippines
            </p>
          </section>

          {/* Social Icons */}
          <nav className={styles.socialIcons} aria-label="Social media links">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label={social.label}
                title={social.label}
              >
                <social.icon />
              </a>
            ))}
          </nav>

          {/* Link Cards */}
          <section className={styles.linkCards}>
            {LINK_CARDS.map((card) => {
              const isInternal = card.url.startsWith('/');

              if (isInternal) {
                return (
                  <Link
                    key={card.title}
                    to={card.url}
                    className={styles.linkCard}
                  >
                    <div className={styles.linkCardContent}>
                      <span className={styles.linkCardTitle}>{card.title}</span>
                      <span className={styles.linkCardDesc}>{card.description}</span>
                    </div>
                    <HiOutlineExternalLink className={styles.linkCardArrow} />
                  </Link>
                );
              }

              return (
                <a
                  key={card.title}
                  href={card.url}
                  target={card.newTab ? "_blank" : undefined}
                  rel={card.newTab ? "noopener noreferrer" : undefined}
                  className={styles.linkCard}
                >
                  <div className={styles.linkCardContent}>
                    <span className={styles.linkCardTitle}>{card.title}</span>
                    <span className={styles.linkCardDesc}>{card.description}</span>
                  </div>
                  <HiOutlineExternalLink className={styles.linkCardArrow} />
                </a>
              );
            })}
          </section>

          {/* Get in Touch */}
          <section className={styles.getInTouch}>
            <div className="flex flex-row items-center gap-3">
              <div className={styles.getInTouchIconWrapper}>
                <HiOutlineMail className={styles.getInTouchIcon} />
              </div>
              <h2 className={styles.getInTouchTitle}>Get in Touch</h2>
            </div>
            <p className={styles.getInTouchDesc}>
              If you want to talk, feel free to reach out to me 😊
            </p>
            <span className={styles.emailPill}>{EMAIL}</span>
            <div className={styles.emailActions}>
              <a href={`mailto:${EMAIL}`} className={styles.sendEmailBtn}>
                <FiSend className={styles.sendIcon} />
                Send Email
              </a>
              <button
                type="button"
                className={styles.copyEmailBtn}
                onClick={handleCopyEmail}
              >
                <IoCopyOutline className={styles.sendIcon} />
                Copy Email
              </button>
            </div>
          </section>
        </div>

        <Footer />

        {/* QR Code Bottom Drawer */}
        <div
          className={`${styles.drawerBackdrop} ${qrOpen ? styles.drawerBackdropOpen : ""}`}
          onClick={() => setQrOpen(false)}
        />
        <div className={`${styles.drawer} ${qrOpen ? styles.drawerOpen : ""}`}>
          <div className={styles.drawerHandle} />
          <h2 className={styles.drawerTitle}>Share this page</h2>
          <div className={styles.drawerDivider} />

          {/* QR Code Area */}
          <div className={styles.qrWrapper}>
            <img
              src={qrCode}
              alt="QR Code"
              draggable="false"
              className={styles.qrImage}
            />
          </div>

          {/* Page URL */}
          <span className={styles.pageUrlLabel}>PAGE URL</span>
          <div className={styles.pageUrlRow}>
            <span className={styles.pageUrlText}>{PAGE_URL}</span>
            <button
              className={styles.copyBtn}
              onClick={handleCopyUrl}
              aria-label="Copy URL"
              title={copied ? "Copied!" : "Copy URL"}
            >
              <IoCopyOutline />
            </button>
          </div>
        </div>

        {/* Snackbar */}
        <div className={`${styles.snackbar} ${snackbar ? styles.snackbarVisible : ""}`}>
          {snackbar}
        </div>
      </div>
    </>
  );
};

export default LinksPage;
