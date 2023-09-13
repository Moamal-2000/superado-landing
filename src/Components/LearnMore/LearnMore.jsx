import { img1, img2, img3, underlineImg3 } from "../../assets/Images";
import Card2 from "../Shared/Cards/Card2";
import SectionTitle from "../Shared/SectionTitle";
import styles from "./LearnMore.module.scss";

const LearnMore = () => {
  return (
    <div className={styles.learnMore}>
      <SectionTitle underlineImg={underlineImg3}>
        <h2>Learn more</h2>
      </SectionTitle>

      <div className={styles.cards}>
        <Card2 title="Beginners guide" img={img1}>
          DAO Briefing from The Generalist
        </Card2>

        <Card2 title="Success stories" img={img2}>
          The largest DAOs by cap on Deepdao.io
        </Card2>

        <Card2 title="Directory" img={img3}>
          Twitter lists for DAO ecosystem by Guild XYZ
        </Card2>
      </div>
    </div>
  );
};

export default LearnMore;
