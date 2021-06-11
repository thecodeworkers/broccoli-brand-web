import styles from './styles.module.scss'
import { ColorPicker } from '@components'
import { useDispatch } from 'react-redux'
import { addToCar } from '@store/actions'

const Product = ({ containerStyles = null, details = true, data = null }) => {
  
  const dispatch = useDispatch()
  const add = () => { if (data) dispatch(addToCar(data?.databaseId, 1)) }

  return (
    <section className={!containerStyles ? styles._container : `${styles._container} ${containerStyles}`}>
      <section className={styles._productContainer}>
        <div className={!details ? `${styles._imageProductContainer} ${styles._imageNoDetailProductContainer}` : styles._imageProductContainer}>
          <div className='_image'></div>
          <div className={styles._addToCart} onClick={add}>
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
                <p className={styles._productName}>{data ? data?.name : 'Standard Product'}</p>
              </div>
              <div className={styles._colorSelector}>
                {
                  data ?
                    data?.attributes?.nodes[0].options.map((color, item) => <ColorPicker key={item} color={color} />) :
                    <ColorPicker key='1' color='black' />
                }
              </div>
              <div className={styles._productSizesContainer}>
                <p className={styles._producSizes}>{data ? data?.attributes?.nodes[1].options.join(", ") : ' XS, L'}</p>
              </div>
            </div>
          </div>
        ) : null}
      </section>
      <style jsx>
        {`
          ._image {
            background-image: url(${data ? data.image?.mediaItemUrl : 'https://picsum.photos/200/300'});
            background-size: cover;
            background-repeat: no-repeat;
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </section>
  )
}

export default Product
