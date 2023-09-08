import styles from "./Application.module.scss";

const Application = ({ nameApp, color }) => {
  return (
    <div className={styles.application}>
      <div className={styles.color} style={{ backgroundColor: color }}></div>
      <div className={styles.dot} style={{ backgroundColor: color }}></div>

      <span className={styles.nameApp}>{nameApp}</span>
    </div>
  );
};

export default Application;
