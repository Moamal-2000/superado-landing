import { mainLogoBlack } from "../../assets/Images";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContainer}>
          <div className={styles.logo}>
            <a href="../../../index.html">
              <img src={mainLogoBlack} alt="Main logo black" />
              <span>Superdao</span>
            </a>
          </div>

          <ul>
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

          <div className={styles.socialMedia}>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-solid fa-paper-plane"></i>
            <i className="fa-solid fa-at"></i>
          </div>

          <p className={styles.info}>
            Coded in
            <a href="https://code.visualstudio.com" target="_blank">
              Visual studio code
            </a>{" "}
            by
            <a
              href="https://www.linkedin.com/in/moamal-alaa-a4bb15237"
              target="_blank"
            >
              Moamal Alaa
            </a>
            , And designed with
            <a href="https://www.figma.com" target="_blank">
              Figma
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
