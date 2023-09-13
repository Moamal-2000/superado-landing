import { underlineImg2 } from "../../assets/Images";
import Feature from "../Shared/Feature";
import SectionTitle from "../Shared/SectionTitle";
import styles from "./Features.module.scss";

const Features = () => {
  return (
    <section className={styles.featuresSection}>
      <SectionTitle underlineImg={underlineImg2}>
        <h2>Superpowers for creators</h2>
      </SectionTitle>

      <div className={styles.features}>
        <Feature activeDots={[1, 0, 0]} title="Formation">
          Template-based DAO creation in one click
        </Feature>

        <Feature activeDots={[1, 1, 0]} title="Starter pack">
          Member directory and contributor rewards
        </Feature>

        <Feature activeDots={[1, 1, 1]} title="App ecosystem">
          Third-party apps for every need
        </Feature>
      </div>
    </section>
  );
};

export default Features;
