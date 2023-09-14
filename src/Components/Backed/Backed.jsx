import {
  lemniscopeLogo,
  logoFund1,
  logoFund2,
  logoFund3,
  magicFundLogo,
  underlineImg4,
} from "../../assets/Images";
import SectionTitle from "../Shared/SectionTitle";
import styles from "./Backed.module.scss";

const Backed = () => {
  return (
    <div className={styles.backed}>
      <SectionTitle underlineImg={underlineImg4} imgPosition="-5px">
        <h2>Backed by</h2>
      </SectionTitle>

      <div className={styles.backedCompanies}>
        <img src={logoFund1} alt="Fundamental Labs" />
        <img src={logoFund2} alt="Shima Capital" />
        <img src={logoFund3} alt="Fifty Years" />
        <img src={lemniscopeLogo} alt="Lemniscop" />
        <img src={magicFundLogo} alt="Magic Fund" />
      </div>

      <div className={styles.supporters}>
        <div className={styles.person}>Thomas Chen</div>
        <div className={styles.person}>Jesse Clayburgh</div>
        <div className={styles.person}>Matt Brezina</div>
      </div>
    </div>
  );
};

export default Backed;
