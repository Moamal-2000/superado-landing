import { underlineImg1 } from "../../assets/Images";
import SectionTitle from "../Shared/SectionTitle";
import styles from "./IntroductionContent.module.scss";

const IntroductionContent = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h2>
          Modern infrastructure <br /> <span>for</span>
          <SectionTitle underlineImg={underlineImg1} display="inline-block">
            <span style={{ fontSize: "3.25rem" }}>DAOs</span>
          </SectionTitle>
        </h2>

        <p className={styles.text}>
          Superdao makes it easier to start and operate decentralized autonomous
          organizations
        </p>

        <button type="button">Get started</button>
      </div>
    </div>
  );
};

export default IntroductionContent;
