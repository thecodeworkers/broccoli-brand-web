import styles from './styles.module.scss'
import Sponsor from './Sponsor'

const Sponsors = ({ data }) => {

  return (
    <div className={styles._content}>
      <div className={styles._headerContainer}>
        <h2 className={styles._productsTitle}>{data.title}</h2>
      </div>
      <div className={styles._productContainer}>
        {data?.sponsor?.map((spon, item) => <Sponsor key={item} data={spon} />)}
      </div>
    </div>
  )
}

export default Sponsors
