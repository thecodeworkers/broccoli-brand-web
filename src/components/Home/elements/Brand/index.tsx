import React, { useEffect, useState, useCallback } from 'react'
import styles from './styles.module.scss'

const Brand = ({data}) => {

	const [pos, setPos] = useState(0)

	useEffect(() => {
    const handleUserScroll = (event) => {
      let scroll = window.scrollY
      if(scroll > 700) setPos(scroll)
    };

		window.addEventListener('scroll', handleUserScroll);
    return () => window.removeEventListener('scroll', handleUserScroll);
	})

	return (
		<section className={styles._principalBrandContent}>
				<div className={styles._imageContainer} style={{transform: `translate(calc(-${pos}px + 300px))`}}>
					{/* <img id="element" style={{transform: `translate(-${pos}px)`}} src="images/backgrounds/Banner_animado1.png" alt="" /> */}
					<div className='_firstBrand' ></div>
				</div>
				<div className={styles._imageContainer} style={{transform: `translate(calc(${pos}px - 9000px))`}}>
					{/* <img style={{transform: `translate(calc(-3000px + ${pos}px))`}} src="images/backgrounds/Banner_animado2.png" alt="" /> */}
					<div className='_secondBrand' ></div>
				</div>
			<style jsx>
			{`
			._firstBrand {
				background-image: url('${data.topImage.mediaItemUrl}');
				background-repeat: repeat-x;
				background-size: contain;
				height: 30vh;
			}
			._secondBrand {
				background-image: url('${data.bottomImage.mediaItemUrl}');
				background-repeat: repeat-x;
				background-size: contain;
				height: 30vh;
			}
			`}
			</style>
		</section>
	)
}

export default Brand
