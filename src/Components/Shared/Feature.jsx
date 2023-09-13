import styles from "./Feature.module.scss";

const Feature = ({ title, children, activeDots }) => {

  return (
    <div className={styles.feature}>
      <div className={styles.dots}>
        <div className={`${styles.dot} ${activeDots[0] ? styles.active : ""}`}></div>
        <div className={`${styles.dot} ${activeDots[1] ? styles.active : ""}`}></div>
        <div className={`${styles.dot} ${activeDots[2] ? styles.active : ""}`}></div>
      </div>

      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
};

export default Feature;
