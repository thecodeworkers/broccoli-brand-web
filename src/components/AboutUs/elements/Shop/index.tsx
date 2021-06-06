import styles from './styles.module.scss'
import { Product, ResponsiveShop, Button } from '@components'

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

      <div className={styles._productReponsiveContainer}>
        <div className={styles._responsiveShopContainer}>
          <div className={styles._shopContainer}><ResponsiveShop /></div>
          <div className={styles._shopContainer}><ResponsiveShop /></div>
          <div className={styles._shopContainer}><ResponsiveShop /></div>
          <div className={styles._shopContainer}><ResponsiveShop /></div>
        </div>
        <div className={styles._buttonContainer}>
          <Button borderColor='black' text='VIEW MORE' colorText='black' blackHover={true} />
        </div>
      </div>
    </div>
  )
}

export default Shop
