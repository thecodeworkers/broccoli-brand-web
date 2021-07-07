import React, { useEffect, useState } from 'react'
import { createMarkup } from '@utils';
import styles from './styles.module.scss'
import { ArrowLeft, ArrowRight } from '@images/icons'

const Gallery = ({ data }) => {

  const [gallery, setGallery] = useState([])
  const [selectPicture, setSelectPicture] = useState(0)
  const [showMax, setShowMax] = useState(false)

  useEffect(() => {
    const imagesArray = data?.galleryImages?.nodes.slice(0, 4);
    for (let index = imagesArray?.length; index < 4; index++) imagesArray.push({ mediaItemUrl: 'images/backgrounds/Pic_not_available.png' })

    setGallery(imagesArray)
  }, [data])

  const showPicture = (index) => {
    setSelectPicture(index)
    setShowMax(true)
  }

  const nextPic = () => {
    let nextIndex = selectPicture + 1
    setSelectPicture((nextIndex > gallery.length) ? 0 : nextIndex)
  }


  const backPic = () => {
    let backIndex = selectPicture - 1
    setSelectPicture((backIndex < 0) ? gallery.length : backIndex)
  }
  return (
    <>
      <section className={styles._galleryContainter}>
        <div className={styles._leftContainer}>
          {
            gallery?.map((item, index) => {
              return (
                <div key={index} onClick={() => showPicture(index + 1)} className={[`_banner${index}`, (index == 0 || index == 3) ? styles._bigPic : styles._smallPic].join(" ")}>
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
            <div className={styles._description} dangerouslySetInnerHTML={createMarkup(data?.description)}></div>
          </div>
        </div>
      </section>
      {showMax && <div className={styles._expandContainer}>
        <div className={styles._close} onClick={() => setShowMax(false)}>X</div>
        <div className={styles._expandItem}>
          <div onClick={backPic} className={[styles._arrow, styles._arrowLeft].join(' ')}>
            <ArrowLeft />
          </div>
          {(gallery) && <img className={styles._expandImage} src={[...[{ mediaItemUrl: data?.image?.mediaItemUrl }], ...gallery][selectPicture]?.mediaItemUrl} />}
          <div onClick={nextPic} className={[styles._arrow, styles._arrowRight].join(' ')}>
            <ArrowRight />
          </div>
        </div>
      </div>}
    </>
  )
}

export default Gallery
