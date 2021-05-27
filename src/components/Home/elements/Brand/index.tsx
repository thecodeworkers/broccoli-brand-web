import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'

const Brand = () => {

    const [pos, setPos] = useState(0)

    useEffect(() => {
        window.addEventListener("scroll", (event) => {
            let scroll = window.scrollY

            if(scroll > 700) {
                let element = document.getElementById("element")
                element.classList.add("animateMe");
                setPos(scroll)
                console.log("here")
            }
        });
    })

    return (
        <section className={styles._brandContent}>
            <div className={styles._horizontalScroll}>
                {/* <div className={[styles._firstBanner, styles._horizontalScroll1].join(" ")}>1</div> */}
                {/* <div className={styles._secondBanner}>2</div> */}
                <img id="element" src="images/backgrounds/Banner_animado1.png" alt="" />
                <img src="images/backgrounds/Banner_animado2.png" alt="" />
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
