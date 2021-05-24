import styles from './styles.module.scss'
import { ColorPicker, Button } from '@components'

const Product = () => {

  return (
    <section className={styles._container}>
        <section className={styles._productContainer}>
            <div className={styles._imageProductContainer}>
                <div className={styles._image}></div>
                <div className={styles._addToCart}>
                    <p className={styles._addToCartText}>ADD TO CART</p>
                </div>
            </div>
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
        </section>
    </section>
  )
}

export default Product
