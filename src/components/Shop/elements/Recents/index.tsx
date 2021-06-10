import React from 'react'
import styles from './styles.module.scss'
import { Product } from '@components'

const Recents = () => {
  
  return (
    <>
      <section className={styles._recentlyContainer}>
        <div className={styles._recentlyTitleContainer}> 
          <h3 className={styles.recentlyTitle}>RECENTLY VIEWED</h3>
        </div>
        <div className={styles._recentlyContent}>
          <div className={styles._recentlyProductContainer}><Product details={false} /></div>
          <div className={styles._recentlyProductContainer}><Product details={false} /></div>
          <div className={styles._recentlyProductContainer}><Product details={false} /></div>
          <div className={styles._recentlyProductContainer}><Product details={false} /></div>
          <div className={styles._recentlyProductContainer}><Product details={false} /></div>
          <div className={styles._recentlyProductContainer}><Product details={false} /></div>
        </div>
      </section>
    </>
  )
}

export default Recents
