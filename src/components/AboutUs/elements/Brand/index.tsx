import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'

const Brand = ({ data }) => {

  const [pos, setPos] = useState(0)

  useEffect(() => {
    const handleUserScroll = () => {
      let scroll = window.scrollY
      if(scroll > 300) setPos(scroll - 300)
    };

    window.addEventListener('scroll', handleUserScroll);
    return () => window.removeEventListener('scroll', handleUserScroll);
  })

  return (
    <section className={styles._principalBrandContent}>
      <div className={styles._imageContainer} style={{ transform: `translate(calc(-${pos}px))` }}>
        <div className='_firstBrand' ></div>
      </div>
      <style jsx>
        {`
			    ._firstBrand {
				    background-image: url('${data.mediaItemUrl}');
				    background-repeat: repeat-x;
				    background-size: contain;
				    height: 30vh;
			    }
			  `}
      </style>
      <style jsx>
			{` @media(max-width: 576px) {
        ._firstBrand  {
          height: 20vh;
        }
			`}
			</style>
    </section>
  )
}

export default Brand
