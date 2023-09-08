import styles from "./SectionTitle.module.scss";

const SectionTitle = ({ underlineImg, title, display, fontSize }) => {

  return (
    <div className={styles.sectionTitle} style={{display: display}}>
      <h2 style={{fontSize: fontSize}}>{title}</h2>

      <div className={styles.imgHolder}>
        <img src={underlineImg} alt="mixin paint purple-red-yellow" />
      </div>
    </div>
  );
};

export default SectionTitle;
