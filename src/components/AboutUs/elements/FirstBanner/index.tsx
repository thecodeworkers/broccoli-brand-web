import { useState, useEffect } from 'react';
import styles from './styles.module.scss'
import { Button } from '@components'

const FirstBanner = ({ data }) => {
  
  return (
    <>
      <div className={styles._content}>
        <div className={styles._main}>
          <div className='_img'></div>
        </div>
      </div>
      <style jsx>{`
      ._img {
        background-image: url(${data?.image?.mediaItemUrl});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
        height: 85vh;
      }
      @media(max-width: 576px) {
        ._img {
          background-image: url(${data?.responsiveImage?.mediaItemUrl});
          background-repeat: no-repeat;
          background-size:100% 100%;
          height: 90vh;
        }
      }
    `}</style>
    </>
  )
}

export default FirstBanner
