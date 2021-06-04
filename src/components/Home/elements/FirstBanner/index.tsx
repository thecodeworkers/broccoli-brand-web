import { useState, useEffect } from 'react';
import styles from './styles.module.scss'
import { Button } from '@components'

const FirstBanner = ({ data }) => {
  
  const [currentIndex, setcurrentIndex] = useState(0);
  const [newArray, setNewArray] = useState(data.banner)

  let interval;

  useEffect(() => {
    changeImage(currentIndex, styles._show)

    return () => clearTimeout(interval)

  }, [currentIndex])

  const changeImage = (index, stylus) => {

    newArray.map((res, mapIndex) => { newArray[mapIndex].className = styles._hidden })
    newArray[index].className = stylus

    setNewArray([...newArray])

    interval = setTimeout(() => {
      if (currentIndex < newArray.length - 1) return setcurrentIndex(currentIndex + 1)
      else setcurrentIndex(0)
    }, 4000);
  }

  return (
    <div className={styles._content}>
      <div className={styles._main}>
        {
          Array.from(Array(newArray?.length).keys()).map((index) => {
            const currentClass = index + 1;
            return (
              <div className={newArray[index].className} id={currentClass.toString()} key={index}>
                <div className={`_banner${index}`}>
                  <style jsx>{`
                    ._banner${index} {
                      background-image: url(${newArray[index]?.image?.mediaItemUrl});
                      background-repeat: no-repeat;
                      background-position: center;
                      background-size: 100% 100%;
                      height: 85vh;
                    }
                    @media(max-width: 576px) {
                      ._banner${index} {
                        background-image: url(${newArray[index]?.responsiveImage?.mediaItemUrl});
                        background-repeat: no-repeat;
                        background-size:100% 100%;
                        height: 90vh;
                      }
                    }
                  `}</style>
                </div>
              </div>
            )
          })
        }
        <div className={styles._leftShopContainer}>
          <h2 className={styles._textTitle}>{data.firstTitleButton}</h2>
          <div className={styles._buttonContainer}>
            <Button borderColor="white" text={data.firstTextButton} link={data.firstButtonLink} blackHover={true} />
          </div>
        </div>

        <div className={styles._rightShopContainer}>
          <h2 className={styles._textTitle}>{data.secondTitleButton}</h2>
          <div className={styles._buttonContainer}>
            <Button borderColor="white" text={data.secondTextButton} link={data.secondButtonLink} blackHover={true} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstBanner
