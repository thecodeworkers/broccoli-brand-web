import { useState, useEffect } from 'react';
import styles from './styles.module.scss'
import { Button } from '@components'

const FirstBanner = ({ data }) => {

  return (
    <>
      <div className={styles._content}>
        <div className={styles._main}>
          <div className={[`_banner`, styles._bannerContainer].join(' ')}>
            <img className={styles._imageWeb} src={data?.image?.mediaItemUrl} />
            <img className={styles._imageResponsive} src={data?.responsiveImage?.mediaItemUrl} />
          </div>
        </div>
      </div>
    </>
  )
}

export default FirstBanner
