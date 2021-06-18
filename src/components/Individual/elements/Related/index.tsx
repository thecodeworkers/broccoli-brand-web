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
    { data?.nodes?.length > 0 ? 
      <div className={styles._content}>
        <div className={styles._titleContainer}>
          <h1 className={styles._title}>YOU MAY ALSO LIKE</h1>
        </div>
        <div className={styles._productsContainer}>
          <div className={styles._products}>
            { 
              gallery?.map((product, index) => {
                return ( <div className={styles._product} key={index}><Product data={product} /></div> )
              }) 
            }
          </div>
        </div>
      </div> :  '' 
    }
    </>
  )
}

export default Related
