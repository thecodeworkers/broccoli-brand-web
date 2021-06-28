import React, { useState, useEffect } from 'react'
import { createMarkup, scrolling } from '@utils';
import { ColorPicker, Button } from '@components'
import styles from './styles.module.scss'
import { useDispatch } from 'react-redux';
import { addToCar } from '@store/actions';

const Details = ({ data, texts, reference }) => {
  const dispatch = useDispatch()

  const [gallery, setGallery] = useState([])
  const [selectedColor, setColor] = useState('')
  const [selectedSize, setSize] = useState('')

  const addProduct = () => {
    if (data) dispatch(addToCar(data, 1, { color: selectedColor, size: selectedSize }));
  }

  useEffect(() => {
    const imagesArray = data?.galleryImages?.nodes.slice(0, 4);
    for (let index = imagesArray?.length; index < 4; index++) imagesArray.push({ mediaItemUrl: 'images/backgrounds/Pic_not_available.png' })
    setGallery(imagesArray)
    setColor(data?.attributes?.nodes[0].options[0])
    setSize(data?.attributes?.nodes[1].options[0])
  }, [data])

  return (
    <>
      <div className={styles._content}>
        <section className={styles._detailsContainter}>
          <div className={styles._leftContainer}>
            <div className='_img'></div>
            <style jsx>{`
            ._img {
              background-image: url(${data?.image?.mediaItemUrl});
              background-repeat: no-repeat;
              background-position: center;
              background-size: 100% 100%;
              height: 100%;
            }
            @media(max-width: 576px) {
              ._img {
                background-image: url(${data?.image?.mediaItemUrl});
                background-repeat: no-repeat;
                background-size:100% 100%;
                height: 45vh;
              }
            }
          `}</style>
          </div>
          <div className={styles._gallerySection}>
            {
              gallery?.map((item, index) => {
                return (
                  <div key={index} className={[`_banner${index}`, (index == 0 || index == 3) ? styles._bigPic : styles._smallPic].join(" ")}>
                    <style jsx>{`
                  ._banner${index} {
                    background-image: url('${item?.mediaItemUrl}');
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                  }
                  `}</style>
                  </div>
                )
              })}
          </div>
          <div className={styles._rightContainer}>
            <div>
              <div className={styles._productNameContainer}>
                <h1 className={styles._productName}>{data?.name}</h1>
              </div>

              <div className={styles._boxContainer}>
                <div className={styles._half}>
                  <h2 className={styles._price}>{data?.price}</h2>
                </div>
                <div className={styles._half}>
                  <div id={styles._shortDescription} className={styles._circlesContainer} dangerouslySetInnerHTML={createMarkup(data?.shortDescription)}></div>
                </div>
              </div>

              <div className={styles._colorsContainer}>
                <div className={styles._typeColors}>
                  <div className={styles._components}>
                    <div className={styles._textContent}>
                      <p className={styles._colorText}>{texts?.individual?.colors}*</p>
                      <span className={styles._span}>{texts?.individual?.selectColor}</span>
                    </div>
                    <div className={styles._circlesContainer}>
                      {data?.attributes?.nodes[0].options.map((item, index) => (
                        <div key={index} className={styles._circle}>
                          <ColorPicker checked={item === selectedColor} onClick={(check) => setColor(item)} color={item} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles._buttonContainer} >
                  <div className={styles._buttonContent}>
                    <div className={styles._button} onClick={() => scrolling(reference, 100)} >
                      <Button borderColor='black' colorText='black' text='VIEW ALL COLORS' blackHover={true} />
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles._sizesContainer}>
                <div className={styles._sizesContent}>
                  <div className={styles._sizes}>
                    <div className={styles._textContent}>
                      <p className={styles._colorText}>{texts?.individual?.sizes}*</p>
                      <span className={styles._span}>{texts?.individual?.selectSize}</span>
                    </div>
                    <div className={styles._checkboxContainer}>
                      {data?.attributes?.nodes[1].options.map((item, index) => (
                        <div key={index} className={styles._individualCheck}>
                          <label className={styles._labelFilter}>
                            <input type='radio' checked={item === selectedSize} onChange={() => setSize(item)} className={styles._checkbox} id='choice1-1' name='choice1' />
                            <span className={styles._filterText}>{item}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles._lastButtonContainer}>
              <div className={styles._buttonContainer}>
                <Button borderColor='black' colorText='black' text={texts?.addToCartText} blackHover={true} onClick={addProduct} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Details
