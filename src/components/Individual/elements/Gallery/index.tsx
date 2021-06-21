import React, { useEffect, useState } from 'react'
import { createMarkup } from '@utils';
import styles from './styles.module.scss'

const Gallery = ({ data, texts }) => {

  const [gallery, setGallery] = useState([])
  
  useEffect(() => {
    const imagesArray = data?.galleryImages?.nodes.slice(0,4);
    for (let index = imagesArray?.length; index < 4; index++) imagesArray.push({mediaItemUrl: 'images/backgrounds/Pic_not_available.png'})

    setGallery(imagesArray)
  }, [data])

  return (
    <>
      <section className={styles._galleryContainter}>
        <div className={styles._leftContainer}>
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
          <div className={styles._descriptionContainer}>
            <h1 className={styles._descriptionTitle}>DESCRIPTION</h1>
            <div className={styles._description} dangerouslySetInnerHTML={createMarkup(data.description)}></div>
          </div>
          <div className={styles._fabricContainer}>
            <h1 className={styles._descriptionTitle}>THE FABRIC</h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
