import { iconWing } from '../../assets/Images'
import styles from './TitleSection.module.scss'

const TitleSection = ({title}) => {
  return (
    <div className={styles.titleSection}>
      <img src={iconWing} alt="Superado Logo" />
      <h3>{title}</h3>
    </div>
  )
}

export default TitleSection