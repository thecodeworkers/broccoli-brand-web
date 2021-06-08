import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Bag } from '@images/svg'

const ResponsiveShop = () => {
  
  return (
    <>
      <div className={['_productImage', styles._productImage].join(" ")}>
        <div className={styles._bag}>
          <Bag width='20' height='20' fill='white' />
        </div>
      </div>
      <style jsx>{`
        ._productImage {
          background-image: url(https://picsum.photos/700/700);
          background-repeat: no-repeat;
          background-position: center;
          background-size: 100% 100%;
        }
      `}</style>  
    </>
  )
}

export default ResponsiveShop
