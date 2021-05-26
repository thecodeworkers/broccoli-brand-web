import styles from './styles.module.scss'
import { ColorPicker } from '@components'

const Product = ({ containerStyles = null, details = true }) => {

  return (
    <section className={!containerStyles ? styles._container : `${styles._container} ${containerStyles}`}>
      <section className={styles._productContainer}>
        <div className={!details ? `${styles._imageProductContainer} ${styles._imageNoDetailProductContainer}` : styles._imageProductContainer}>
          <div className={styles._image}></div>
          <div className={styles._addToCart}>
            <p className={styles._addToCartText}>ADD TO CART</p>
          </div>
          {!details ? (
            <div className={styles._viewMore}>
              <p className={styles._addToCartText}>VIEW MORE</p>
            </div>
          ) : null}
        </div>
        {details ? (
          <div className={styles._specsContainer}>

            <div className={styles._specs}>
              <div className={styles._productNameContainer}>
                <p className={styles._productName}>Casupo Jacket</p>
              </div>
              <div className={styles._colorSelector}>
                <ColorPicker color="white" />
                <ColorPicker color="#AA0594" />
                <ColorPicker color="#FFE926" />
                <ColorPicker color="#0F0943" />
              </div>
              <div className={styles._productSizesContainer}>
                <p className={styles._producSizes}>XS, S, M, L, XL</p>
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </section>
  )
}

export default Product
