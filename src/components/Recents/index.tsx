import React from 'react'
import styles from './styles.module.scss'
import { Bag } from '@images/svg'
import { useDispatch, useSelector } from 'react-redux'
import { addToCar, setLoader } from '@store/actions'
import { useRouter } from 'next/router'

const Recents = ({ data }) => {

  const { resource: { general: texts } } = useSelector((state: any) => state)
  const router = useRouter()

  const dispatch = useDispatch()
  const add = () => { if (data) dispatch(addToCar(data, 1)) }

  const navigation = (route, loader = false) => {
    if (router.pathname != route) {
      if (loader) dispatch(setLoader(true))
      router.push(route)
    }
  }

  return (
    <>
      <div className={styles._recentlyContent}>
        <div className='_image'></div>
        <div className={styles._addToCart}>
          <p className={styles._addToCartText} onClick={add}>{texts?.general?.generalText?.addToCartText}</p>
        </div>
        <div className={styles._viewMore} >
          <p className={styles._addToCartText} onClick={() => navigation(data.id, true)}>{texts?.general?.generalText?.viewMoreText}</p>
        </div>
        <div className={styles._bag} onClick={add}><Bag width='20' height='20' fill='white' /></div>
      </div>
      <style jsx>
        {`
          ._image {
            background-image: url(${data?.image?.mediaItemUrl ? data?.image?.mediaItemUrl : 'images/backgrounds/Pic_not_available.png'});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            width: 100%;
            height: 100%;
            cursor: pointer;
          }
        `}
      </style>
    </>
  )
}

export default Recents
