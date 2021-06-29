import React,{ useState } from 'react'
import styles from './styles.module.scss'
import { ColorPicker } from '@components'
import { useDispatch, useSelector } from 'react-redux'
import { addToCar, setLoader } from '@store/actions'
import { useRouter } from 'next/router'
import { Bag } from '@images/svg'
import { formatCurrency } from '@utils'

const Product = ({ containerStyles = null, details = true, data = null }) => {

  const dispatch = useDispatch()
  const { resource: { general: texts, currency } } = useSelector((state: any) => state)

  const [selected, setColor] = useState('')

  const add = () => { if (data) dispatch(addToCar(data, 1, { color: selected || 'white', size: 's' })) }
  const router = useRouter()

  const navigation = (route, loader = false) => {
    if (router.pathname != route) {
      if (loader) dispatch(setLoader(true))
      router.push(route)
    }
  }

  const setNewColor = (color) => setColor(color)

  return (
    <section className={!containerStyles ? styles._container : `${styles._container} ${containerStyles}`}>
      <section className={styles._productContainer}>
        <div className={!details ? `${styles._imageProductContainer} ${styles._imageNoDetailProductContainer}` : styles._imageProductContainer}>
          <div className='setImage' onClick={() => navigation(data.id, true)}></div>
          {!details ? (
            <>
              <div className={styles._addToCartNoDetails} onClick={add}>
                <p className={styles._addToCartText}>{texts?.general?.generalText?.addToCartText}</p>
              </div>
              <div className={styles._viewMore} onClick={() => navigation(data.id, true)}>
                <p className={styles._addToCartText}>{texts?.general?.generalText?.viewMoreText}</p>
              </div>
            </>
          ) :
            <>
              <div className={styles._addToCart} onClick={add}>
                <p className={styles._addToCartText}>{texts?.general?.generalText?.addToCartText}</p>
              </div>
            </>
          }
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
                    data?.attributes?.nodes[0]?.options?.map((color, item) => <ColorPicker checked={color === selected} onClick={(checked) => setNewColor(color)} key={item} color={color} />) :
                    <ColorPicker key='1' color='black' />
                }
              </div>
              <div className={styles._productSizesContainer}>
                <p className={styles._producSizes}>{data?.price ? formatCurrency(currency, data?.price) : data?.attributes?.nodes[1]?.options?.join(", ")}</p>
              </div>
            </div>
            <div className={styles._bag} onClick={add}><Bag width='15' height='15' fill='black' /></div>
          </div>
        ) : null}
      </section>
      <style jsx>
        {`
          .setImage {
            background-image: url(${data ? data?.image?.mediaItemUrl : 'images/backgrounds/Pic_not_available.png'});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            width: 100%;
            height: 100%;
            cursor: pointer;
          }
        `}
      </style>
    </section>
  )
}

export default Product
