import styles from './styles.module.scss'

const Product = () => {

  return (
    <section className={styles._mainContainer}>
        <section className={styles._collectionContainer}>
            <div className={styles._imageCollectionContainer}>
                <div className={styles._image}></div>
                <div className={styles._addToCart}>
                    <p className={styles._addToCartText}>ADD TO CART</p>
                </div>
                <div className={styles._viewMore}>
                    <p className={styles._viewMoreText}>VIEW MORE</p>
                </div>
            </div>
        </section>
    </section>
  )
}

export default Product
