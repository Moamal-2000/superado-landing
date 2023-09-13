import { iconWing } from "../../assets/Images";
import styles from "./RoadMap.module.scss";

const RoadMap = () => {
  return (
    <div className={styles.roadMap}>
      <h2>Roadmap club</h2>

      <p>
        Join DAO creators and tool makers shaping the future of DAO economy.
        Meet peers, share your ideas, and ask for help.
      </p>

      <ul>
        <li>
          <img src={iconWing} alt="yellow wing icon" />
          <p>Open roadmap for DAO infrastructure</p>
        </li>

        <li>
          <img src={iconWing} alt="yellow wing icon" />
          <p>DB with 500+ DAOs and tools</p>
        </li>

        <li>
          <img src={iconWing} alt="yellow wing icon" />
          <p>Online and offline meetups</p>
        </li>
      </ul>

      <div className={styles.buttons}>
        <button type="button">Join community</button>
        <button type="button">Learn more</button>
      </div>
    </div>
  );
};

export default RoadMap;
