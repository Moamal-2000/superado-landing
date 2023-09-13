import AppsSection from "./AppsSection";
import styles from "./BigCard.module.scss";
import Blockchains from "./Blockchains";
import OperationSystemSection from "./OperationSystemSection";

const BigCard = () => {
  return (
    <div className={styles.bigCard}>
      <AppsSection />
      <OperationSystemSection />
      <Blockchains />
    </div>
  );
};

export default BigCard;
