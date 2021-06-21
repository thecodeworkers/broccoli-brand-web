import React from 'react'
import Recents from 'src/components/Recents'
import styles from './styles.module.scss'
import { Button } from '@components'
import { useSelector } from 'react-redux'

const RecentView = ({ data }) => {

  const { shop: { recent } } = useSelector((state: any) => state)
  return (
    <section className={styles._recentlyContainer} >
      <div className={styles._recentlyTitleContainer}>
        <h3 className={styles.recentlyTitle}>{data?.historyNavigation}</h3>
      </div>
      <div className={styles._recentsContainer}>
        {[...recent, ...new Array(6)].splice(0, 6).map((rec, index) => (
          <Recents data={rec} key={index} />
        ))}
        <div className={styles._buttonContainer}>
          <Button borderColor="black" colorText='black' text='VIEW MORE' link='#' blackHover={true} />
        </div>
      </div>
    </section>
  )
}

export default RecentView


