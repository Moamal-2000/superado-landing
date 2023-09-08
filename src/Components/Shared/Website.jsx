import styles from "./Website.module.scss";

const Website = ({ nameWebsite, logo }) => {
  return (
    <div className={styles.website}>
      <div className={styles.logoHolder}>
        <img src={logo} alt="website's logo" />
      </div>

      <span className={styles.nameWebsite}>{nameWebsite}</span>
    </div>
  );
};

export default Website;
