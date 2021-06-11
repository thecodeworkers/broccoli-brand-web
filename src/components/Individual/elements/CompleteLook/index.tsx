import React, { useState } from 'react'
import { createMarkup } from '@utils';
import { Product } from '@components'
import styles from './styles.module.scss'

const Colors = () => {
    
  return (
    <>
      <div className={styles._content}>
        <div className={styles._titleContainer}>
          <h2 className={styles._title}>COMPLETE THE LOOK</h2>
        </div>
      </div>
      <div className={styles._productsContainer}>
        <div className='_standard'></div>
        <div className={styles._products}>
          <div className={styles._product}><Product /></div>
          <div className={styles._product}><Product /></div>
          <div className={styles._product}><Product /></div>
        </div>
      </div>
      <style jsx>{`
      ._standard {
        background-image: url('images/backgrounds/Pic_not_available.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border: 1px solid black;
        height: 75vh;
        width: 30%;
      }
    `}</style>
    </>
  )
}

export default Colors
