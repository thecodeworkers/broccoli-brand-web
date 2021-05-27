import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'

const Brand = () => {

	const [pos, setPos] = useState(0)
	const [wide, setWide] = useState(0)

	useEffect(() => {
		console.log("in useeffect")
		window.addEventListener("scroll", (event) => {
			let scroll = window.scrollY
			
			if(scroll > 700) {
				// let element = document.getElementById("element")
				// element.classList.add("animateMe");
				setPos(scroll)
			}
		});
	})

	return (
		<section className={styles._brandContent}>
			<div className={styles._horizontalScroll}>
				<div className={styles._imageContainer}>
					<img id="element" style={{transform: `translate(-${pos}px)`}} src="images/backgrounds/Banner_animado1.png" alt="" />
				</div>
				<div className={styles._imageContainer}>
					<img style={{transform: `translate(calc(-3000px + ${pos}px))`}} src="images/backgrounds/Banner_animado2.png" alt="" />
				</div>
			</div>
			<style jsx>
			{`
			animateMe: {
				transform: translateX(${pos});
			}
			`}
			</style>
		</section>
	)
}

export default Brand
