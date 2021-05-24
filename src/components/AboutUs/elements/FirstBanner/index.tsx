import { useState, useEffect } from 'react';
import styles from './styles.module.scss'
import { Button } from '@components'

const FirstBanner = () => {

  return (
    <div className={styles._content}>
      <div className={styles._main}>
        <img src='https://picsum.photos/id/1025/1360/768' className={styles._img}></img>
      </div>
    </div>
  )
}

export default FirstBanner
