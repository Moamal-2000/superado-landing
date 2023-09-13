import { blockChainsData } from "../../Data/ComponentsData";
import TitleInterSection from "../Shared/TitleInterSection";
import Website from "../Shared/Website";
import styles from "./Blockchains.module.scss";

const Blockchains = () => {
  return (
    <div className={styles.blockchainsSection}>
      <TitleInterSection title="Blockchains" />

      <div className={styles.blockChains}>
        {blockChainsData.map(({nameWebsite, logo}, i) => (
          <Website key={i} nameWebsite={nameWebsite} logo={logo} />
        ))}
      </div>
    </div>
  );
};

export default Blockchains;
