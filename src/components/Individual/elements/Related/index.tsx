import React, { useEffect, useState } from 'react'
import { Product } from '@components'
import styles from './styles.module.scss'

const Related = ({ data }) => {

  const [gallery, setGallery] = useState([])
  
  useEffect(() => {
    const imagesArray = data?.nodes?.slice(0,4);
    setGallery(imagesArray)
  }, [data])
    
  return (
    <>
      <div className={styles._content}>
        <div className={styles._titleContainer}>
          <h1 className={styles._title}>YOU MAY ALSO LIKE</h1>
        </div>
        <div className={styles._productsContainer}>
          <div className={styles._products}>
            { 
              data?.nodes?.length > 0 ? 
              gallery?.map((product, index) => {
                return (
                  <div className={styles._product}><Product key={index} data={product} /></div>
                )
              }) : <h2 className={styles._noProductsText}>No products</h2>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Related
