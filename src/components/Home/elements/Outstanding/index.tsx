import styles from './styles.module.scss'
import { Product, Button } from '@components'

const Outstanding = () => {

  return (
    <div className={styles._content}>
      <h2 className={styles._outstandingTitle}>DESTACADOS</h2>
      <div className={styles._productContainer}>
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className={styles._buttonContainer}>
        <Button text="VIEW MORE" borderColor='black' colorText='black' blackHover={true} />
      </div>
    </div>
  )
}

export default Outstanding
