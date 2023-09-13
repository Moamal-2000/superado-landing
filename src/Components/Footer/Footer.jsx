import { mainLogoBlack } from "../../assets/Images";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContainer}>
          <div className={styles.wrapperUp}>
            <div className={styles.logo}>
              <img src={mainLogoBlack} alt="Main logo black" />
              <span>Superdao</span>
            </div>

            <div className={styles.socialMedia}>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-solid fa-paper-plane"></i>
              <i className="fa-solid fa-at"></i>
            </div>
          </div>

          <ul className={styles.wrapperDown}>
            <li>
              <a href="/#">Roadmap club</a>
            </li>
            <li>
              <a href="/#">About</a>
            </li>
            <li>
              <a href="/#">Jobs</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
