import { applicationsData } from "../../Data/ComponentsData";
import Application from "../Shared/Application";
import TitleInterSection from "../Shared/TitleInterSection";
import styles from "./AppsSection.module.scss";

const AppsSection = () => {
  return (
    <div className={styles.appsSection}>
      <TitleInterSection title="Apps" />

      <div className={styles.apps}>
        {applicationsData.map(({ nameApp, color }, i) => (
          <Application key={i} color={color} nameApp={nameApp} />
        ))}
      </div>
    </div>
  );
};

export default AppsSection;
