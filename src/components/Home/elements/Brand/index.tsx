import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'

const Brand = ({data}) => {

	const [pos, setPos] = useState(0)
  const [responsive, setResponsive] = useState('');

	useEffect(() => {
    const handleUserScroll = (event) => {
      let scroll = window.scrollY
      if(scroll > 700) setPos(scroll)
    };

		window.addEventListener('scroll', handleUserScroll);
    return () => window.removeEventListener('scroll', handleUserScroll);
	})

  useEffect(() => {
    if(window.innerWidth <= 576) setResponsive('576');
    if(window.innerWidth >576 && window.innerWidth <= 768) setResponsive('768');
    window.addEventListener('resize', checkWidth);

    return () => window.removeEventListener('resize', checkWidth);
  }, [responsive]);

  const checkWidth = () => {
    if(window.matchMedia('(max-width: 576px) and (min-width: 370px)').matches) return setResponsive('576');
    if(window.matchMedia('(max-width: 991px) and (min-width: 769px)').matches) return setResponsive('769');
    if(window.matchMedia('(min-width: 992px)').matches) return setResponsive('992');
  };
  
	return (
		<section className={styles._principalBrandContent}>
				<div className={styles._imageContainer} style={{transform: `translate(calc(-${pos}px + 300px))`}}>
					<div className='_firstBrand' ></div>
				</div>
				<div className={styles._imageContainer} style={{
          transform: responsive >= '991' ? `translate(calc(${pos}px - 9000px))` : `translate(calc(${pos}px - 3000px))`
          }}>
					<div className='_secondBrand' ></div>
				</div>
			<style jsx>
			{`
			._firstBrand {
				background-image: url('${data.topImage?.mediaItemUrl}');
				background-repeat: repeat-x;
				background-size: contain;
				height: 30vh;
			}
			._secondBrand {
				background-image: url('${data.bottomImage?.mediaItemUrl}');
				background-repeat: repeat-x;
				background-size: contain;
				height: 30vh;
			}
      @media(max-width: 576px) {
        ._firstBrand, ._secondBrand  {
          height: 20vh;
        }
			`}
			</style>
		</section>
	)
}

export default Brand
