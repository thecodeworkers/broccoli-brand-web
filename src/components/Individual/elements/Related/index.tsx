import React from 'react'
import { Product } from '@components'
import styles from './styles.module.scss'

const Related = () => {
    
  return (
    <>
      <div className={styles._content}>
        <div className={styles._titleContainer}>
          <h1 className={styles._title}>YOU MAY ALSO LIKE</h1>
        </div>
        <div className={styles._productsContainer}>
          <div className={styles._products}>
            <div className={styles._product}><Product /></div>
            <div className={styles._product}><Product /></div>
            <div className={styles._product}><Product /></div>
            <div className={styles._product}><Product /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Related
