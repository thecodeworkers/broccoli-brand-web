import { useState, useEffect } from 'react';
import styles from './styles.module.scss'
import { Button } from '@components'

const FirstBanner = ({ data }) => {

  return (
    <div className={styles._content}>
      <div className={styles._main}>
        <img src={data?.mediaItemUrl} className={styles._img}></img>
      </div>
    </div>
  )
}

export default FirstBanner
