import React  from 'react'
import styles from './styles.module.scss'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Colors = ({ data, title }) => {
  const settings = {
    dots:false,
    slidesToShow:4,
    slidesToScroll:1,
    autoplay:false,
    autoplaySpeed:3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  }


  const renderSlides = () =>
    data?.map((item, index) => (
      <div className={styles._slideContainer} key={index}>
        <div className='_img'></div>
        <style jsx>{`
        ._img {
          background-image: url(${item?.image?.mediaItemUrl});
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          height: 50vh;
          width: 95%;
        }
        ._standard {
          background-image: url('images/backgrounds/Pic_not_available.png');
          background-repeat: no-repeat;
          background-position: center;
          background-size: 100% 100%;
          border: 1px solid black;
          height: 50vh;
          width: 24%;
        }
        @media(max-width: 768px) {
          ._img, ._standard {
            width: 95%;
            height: 35vh;
          }
        }
      `}</style>
    </div>
  ));
    
  return (
    <>
      <div className={styles._content}>
        <div className={styles._titleContainer}>
          <h1 className={styles._title}>{title}</h1>
        </div>
        <Slider {...settings}>
          {renderSlides()}
        </Slider>
      </div>
    </>
  )
}

export default Colors
