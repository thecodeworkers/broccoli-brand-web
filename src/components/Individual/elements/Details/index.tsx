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
            <div className={styles._productNameContainer}>
              <h1 className={styles._productName}>{data.name}</h1>
            </div>

            <div className={styles._boxContainer}>
              <div className={styles._half}>
                <h2 className={styles._price}>{data.price}</h2>
              </div>
              <div className={styles._half} dangerouslySetInnerHTML={createMarkup(data.shortDescription)}></div>
            </div>

            <div className={styles._colorsContainer}>
              <div className={styles._typeColors}>
                <div className={styles._components}>
                  <div className={styles._textContent}>
                    <p className={styles._colorText}>COLORS*</p>
                    <span>Select one color</span>
                  </div>
                  <div className={styles._circlesContainer}>
                    {data?.attributes?.nodes[0].options.map((item, index) => (
                      <div className={styles._circle}>
                        <ColorPicker key={index} color={item} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles._buttonContainer}>
                <div className={styles._buttonContent}>
                  <div className={styles._button}>
                    <Button borderColor='black' colorText='black' text='VIEW ALL COLORS' blackHover={true} />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles._sizesContainer}>
              <div className={styles._sizesContent}>
                <div className={styles._sizes}>
                  <div className={styles._textContent}>
                    <p className={styles._colorText}>SIZES*</p>
                    <span>Select one color</span>
                  </div>
                  <div className={styles._checkboxContainer}>
                    {data?.attributes?.nodes[1].options.map((item, index) => (
                      <div key={index}>
                        <label className={styles._labelFilter}>
                        <input type='checkbox' className={styles._checkbox} id='choice1-1' name='choice1' />
                        <span className={styles._filterText}>{item}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles._lastButtonContainer}>
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
