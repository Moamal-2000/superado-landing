import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="/">Roadmap club</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Jobs</a>
        </li>
      </ul>

      <a className={styles.twitter} href="/">
        <i className="fa-brands fa-twitter"></i>
        <span>Twitter</span>
      </a>
    </nav>
  );
};

export default Nav;
