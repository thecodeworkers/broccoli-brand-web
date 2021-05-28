import styles from './styles.module.scss'
import { Product } from '@components'

const Brands = () => {

  return (
    <div className={styles._content}>
      <div className={styles._headerContainer}>
        <h2 className={styles._productsTitle}>MAIN TITLE</h2>
        <p className={styles._productsText}>Para nosotros, ORIGEN es conectar con tu esencia, buscamos conectar con nuestra raíz. Somos lo que hacemos. Trabajamos para hacer lo que nos gusta y por eso somos buenos en lo que nos gusta.</p>
      </div>

      <div className={styles._productContainer}>
        <Product containerStyles={styles._product} details={false} />
        <Product containerStyles={styles._product} details={false} />
        <Product containerStyles={styles._product} details={false} />
      </div>
    </div>
  )
}

export default Brands
