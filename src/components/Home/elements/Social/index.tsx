import React from 'react'
import styles from './styles.module.scss'
import { Button } from '@components'

const Social = ({ data }) => {
  return (
    <>
      <section className={styles._socialContent}>
        <div className={styles._socialImageContainer}>
          <div className='_imageContainer'></div>
        </div>
        <div className={styles._socialInfoContainer}>
          <div className={styles._socialContainer}>
            <div className={styles._socialTitleContainer}>
              <h2 className={styles._socialTitle}>{data.title}</h2>
            </div>
            <div className={styles._socialDescriptionContainer}>
              <p className={styles._socialDescription}>{data.description}
              </p>
            </div>
            <div className={styles._buttonContainer}>
              <Button text={data.textButton} colorText="black" borderColor="black" link={data.linkButton} blackHover={true} />
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          ._imageContainer {
            width: 100%;
            height: 100%;
            background-image: url('${data.image?.mediaItemUrl}');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }          
        `}
      </style>
    </>
  )
}

export default Social
