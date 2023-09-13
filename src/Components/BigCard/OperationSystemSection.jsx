import { iconAccess, unionImg } from "../../assets/Images";
import Card1 from "../Shared/Cards/Card1";
import TitleInterSection from "../Shared/TitleInterSection";
import styles from "./OperationSystemSection.module.scss";

const OperationSystemSection = () => {
  return (
    <div className={styles.operationSystemSection}>
      <TitleInterSection title="Superdao operating system" />

      <div className={styles.operationSystems}>
        <Card1 img={unionImg} title="Ownership">
          Tokens, NFTs, promises, options, levels
        </Card1>

        <Card1 img={iconAccess} title="Access control">
          Data access, spending, voting, decision execution
        </Card1>
      </div>
    </div>
  );
};

export default OperationSystemSection;
