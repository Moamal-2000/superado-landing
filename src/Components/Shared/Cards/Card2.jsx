import styles from "./Card2.module.scss";

const Card2 = ({ img, title, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgHolder}>
        <img src={img} alt="colored frame with shapes" />
      </div>

      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Card2;
