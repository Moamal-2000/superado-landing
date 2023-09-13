import { iconWing } from '../../assets/Images'
import styles from './TitleInterSection.module.scss'

const TitleInterSection = ({title}) => {
  return (
    <div className={styles.titleInterSection}>
      <img src={iconWing} alt="Superado Logo" />
      <h3>{title}</h3>
    </div>
  )
}

export default TitleInterSection
