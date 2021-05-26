import styles from './styles.module.scss'
import Sponsor from './Sponsor'

const Sponsors = () => {

  return (
    <div className={styles._content}>
      <div className={styles._headerContainer}>
        <h2 className={styles._productsTitle}>MAIN TITLE</h2>
      </div>
      <div className={styles._productContainer}>
        <Sponsor  />
        <Sponsor  />
        <Sponsor  />
      </div>
    </div>
  )
}

export default Sponsors
