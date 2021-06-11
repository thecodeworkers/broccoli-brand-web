import React, { useState } from 'react'
import { createMarkup } from '@utils';
import { ColorPicker, Button } from '@components'
import styles from './styles.module.scss'

const Colors = ({ data }) => {
    
  return (
    <>
      <div className={styles._content}>
        <div className={styles._titleContainer}>
          <h1 className={styles._title}>ALL COLORS</h1>
        </div>
        <div className={styles._slideContainer}>
          <div className='_img'></div>
          <div className='_img'></div>
          <div className='_img'></div>
          <div className='_standard'></div>
        </div>

      </div>
      <style jsx>{`
      ._img {
        background-image: url('https://picsum.photos/200/300');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 50vh;
        width: 24%;
      }
      ._standard {
        background-image: url('images/backgrounds/Pic_not_available.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border: 1px solid black;
        height: 50vh;
        width: 24%;
      }
    `}</style>
    </>
  )
}

export default Colors
