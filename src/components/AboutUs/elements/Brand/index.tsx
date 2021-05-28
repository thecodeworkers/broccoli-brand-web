import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'

const Brand = () => {

	const [pos, setPos] = useState(0)

	useEffect(() => {
		window.addEventListener("scroll", () => {
			let scroll = window.scrollY
			setPos(scroll)
		});
	})

	return (
		<section className={styles._principalBrandContent}>
				<div className={styles._imageContainer} style={{transform: `translate(calc(-${pos}px))`}}>
					<div className='_firstBrand' ></div>
				</div>
			<style jsx>
			{`
			._firstBrand {
				background-image: url('images/backgrounds/Banner_animado3.png');
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
