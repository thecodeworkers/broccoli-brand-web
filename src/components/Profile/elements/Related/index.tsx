import React from 'react'
import { Product } from '@components'
import styles from './styles.module.scss'
import { useSelector } from 'react-redux'

const Related = ({ data }) => {

  const { resource: { products } } = useSelector((state: any) => state)

  return (
    <>
      {products?.length > 0 ?
        <div className={styles._content}>
          <div className={styles._titleContainer}>
            <h1 className={styles._title}>{data?.alsoLike}</h1>
          </div>
          <div className={styles._productsContainer}>
            <div className={styles._products}>
              {
                products?.sort(() => 0.5 - Math.random()).slice(0, 4).map((product, index) => {
                  return (<div className={styles._product} key={index}><Product data={product} /></div>)
                })
              }
            </div>
          </div>
        </div> : ''
      }
    </>
  )
}

export default Related
