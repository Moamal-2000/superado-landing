import styles from "./Feature.module.scss";

const Feature = ({
  title,
  children,
  activeFirstDot,
  activeSecondDot,
  activeThirdDot,
}) => {

  return (
    <div className={styles.feature}>
      <div className={styles.dots}>
        <div className={`${styles.dot} ${activeFirstDot ? styles.active : ""}`}></div>
        <div className={`${styles.dot} ${activeSecondDot ? styles.active : ""}`}></div>
        <div className={`${styles.dot} ${activeThirdDot ? styles.active : ""}`}></div>
      </div>

      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
};

export default Feature;
