import React from 'react'
import styles from './styles.module.scss'
import { Product } from '@components'
import { useSelector } from 'react-redux'

const Recents = ({ data }) => {

  const { shop: { recent } } = useSelector((state: any) => state)

  return recent.length ? (
    <>
      <section className={styles._recentlyContainer}>
        <div className={styles._recentlyTitleContainer}>
          <h3 className={styles.recentlyTitle}>{data?.recentlyTitle}</h3>
        </div>
        <div className={styles._recentlyContent}>
          {[...recent, ...new Array(6)].splice(0,6).map((rec, index) => (
            <div key={index} className={styles._recentlyProductContainer}><Product data={rec} details={false} /></div>
          ))}
        </div>
      </section>
    </>
  ) : null
}

export default Recents
