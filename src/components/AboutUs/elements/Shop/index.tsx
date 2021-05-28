import styles from './styles.module.scss'
import { Product } from '@components'

const Shop = ({ data }) => {

  return (
    <div className={styles._content}>
      <div className={styles._headerContainer}>
        <h2 className={styles._productsTitle}>{data.title}</h2>
        <p className={styles._productsText}>{data.description}</p>
      </div>

      <div className={styles._productContainer}>
        <Product containerStyles={styles._product} details={false} />
        <Product containerStyles={styles._product} details={false} />
        <Product containerStyles={styles._product} details={false} />
      </div>
    </div>
  )
}

export default Shop
