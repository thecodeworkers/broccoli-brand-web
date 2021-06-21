import React, { useState, useEffect}  from 'react'
import styles from './styles.module.scss'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Colors = ({ data, title }) => {

  const [gallery, setGallery] = useState([])

  useEffect(() => {
    if(data?.length < 4) {
      const imagesArray = data?.slice(0,4);
      for (let index = imagesArray?.length; index < 4; index++) imagesArray.push({image: {mediaItemUrl: 'images/backgrounds/Pic_not_available.png'}})
      return setGallery(imagesArray)
    }

    return setGallery(data)

  }, [data])

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
    gallery?.map((item, index) => (
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
        @media(max-width: 768px) {
          ._img {
            width: 95%;
            height: 35vh;
          }
        }
      `}</style>
    </div>
  ));
    
  return (
    <>
    {
      data?.length ? 
      <div className={styles._content}>
        <div className={styles._titleContainer}>
          <h1 className={styles._title}>{title}</h1>
        </div>
        <Slider {...settings}>
          {renderSlides()}
        </Slider>
      </div> : ''
    }
    </>
  )
}

export default Colors
