import styles from "./SectionTitle.module.scss";

const SectionTitle = ({ underlineImg, display = "block", imgPosition ,children }) => {

  return (
    <div className={styles.sectionTitle} style={{display: display}}>
      {children}

      <div className={styles.imgHolder}>
        <img src={underlineImg} alt="mixin paint purple-red-yellow" style={{left: imgPosition}} />
      </div>
    </div>
  );
};

export default SectionTitle;
