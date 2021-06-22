import React from 'react'
import { Product } from '@components'
import styles from './styles.module.scss'

const Colors = ({ data, title }) => {

  return (
    <>
      {
        data?.nodes?.length ? 
        <>
        <div className={styles._content}>
          <div className={styles._titleContainer}>
            <h2 className={styles._title}>{title}</h2>
          </div>
        </div>
        <div className={styles._productsContainer}>
          <div className={styles._products}>
            <div className='_standard'></div>
            <div className={styles._product}><Product data={data?.nodes[1]} /></div>
            <div className={styles._product}><Product data={data.nodes[2]} /></div>
            <div className={styles._product}><Product data={data.nodes[3]} /></div>
          </div>
        </div>
        </> : <div className={styles._noContainer}></div>
      }
      <style jsx>{`
      ._standard {
        background-image: url(${data?.nodes[0]?.image?.mediaItemUrl});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
        border: 1px solid black;
        height: 75vh;
        width: 30%;
        margin-right: 4%;
      }
      @media(max-width: 768px) {
        ._product, ._standard {
          width: 48%;
          margin: 0 0 5% 0;
        }
      }
      @media(max-width: 576px) {
        ._product, ._standard {
          height: 35vh;
        }
      }
    `}</style> 
    </>
  )
}

export default Colors
