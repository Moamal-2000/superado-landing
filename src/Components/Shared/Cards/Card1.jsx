import styles from "./Card1.module.scss";

const Card1 = ({ img, title, children }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt="Purple shape of dots" />
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
};

export default Card1;
