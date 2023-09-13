import { mainLogoColored } from "../../assets/Images";
import styles from "./Header.module.scss";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="container">
      <header className={styles.header}>
        <a href="/" title="Link home page as logo">
          <img src={mainLogoColored} alt="Superado logo" />
        </a>

        <Nav />
        <MobileNav />
      </header>
    </div>
  );
};

export default Header;
