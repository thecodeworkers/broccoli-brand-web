import React, { useState } from 'react'
import { createMarkup } from '@utils';
import { ColorPicker, Button } from '@components'
import styles from './styles.module.scss'

const Details = ({ data }) => {
  
  console.log(data)
  
  return (
    <>
      <div className={styles._content}>
        <section className={styles._detailsContainter}>
          <div className={styles._leftContainer}>
            <div className='_img'></div>
          </div>
          <div className={styles._rightContainer}>
            <div><h1>{data.name}</h1></div>

            <div className={styles._boxContainer}>
              <div className={styles._half}>{data.price}</div>
              <div className={styles._half} dangerouslySetInnerHTML={createMarkup(data.shortDescription)}></div>
            </div>

            <div className={styles._colorsContainer}>
              <div>
                <p>COLORS*</p>
                <div>
                  {data?.attributes?.nodes[0].options.map((item, index) => (
                    <ColorPicker color={item} />
                  ))}
                </div>
              </div>
              <div className={styles._buttonContainer}>
                <Button borderColor='black' colorText='black' text='VIEW ALL COLORS' blackHover={true} />
              </div>
            </div>

            <div>
            <div>
                <p>SIZES*</p>
                <div>
                  {data?.attributes?.nodes[1].options.map((item, index) => (
                    <p>{item}</p>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className={styles._buttonContainer}>
                <Button borderColor='black' colorText='black' text='ADD TO CART' blackHover={true} />
              </div>
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
      ._img {
        background-image: url(${data?.image?.mediaItemUrl});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
        height: 85vh;
      }
      @media(max-width: 576px) {
        ._img {
          background-image: url(${data?.responsiveImage?.mediaItemUrl});
          background-repeat: no-repeat;
          background-size:100% 100%;
          height: 90vh;
        }
      }
    `}</style>
    </>
  )
}

export default Details
