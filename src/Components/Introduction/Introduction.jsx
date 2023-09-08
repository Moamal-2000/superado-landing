import styles from "./Introduction.module.scss"
import IntroductionContent from "./IntroductionContent";

const Introduction = () => {
  return (
    <div className={styles.introductionSection}>
      <div className="container">
        <IntroductionContent />
      </div>
    </div>
  );
};

export default Introduction;
