import { useState, useEffect } from 'react';
import styles from './styles.module.scss'
import { Button } from '@components'

const FirstBanner = () => {

  let data = [
		{
			className: '',
			image: {
				mediaItemUrl: 'https://picsum.photos/id/240/1360/768'
			}
		},
		{
			className: '',
			image: {
				mediaItemUrl: 'https://picsum.photos/id/238/1360/768'
			}
		}
	]

  const [currentIndex, setcurrentIndex] = useState(1);
  const [newArray, setNewArray] = useState(data)

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
                <img src={newArray[index]?.image?.mediaItemUrl} className={styles._img}></img>
              </div>
            )
          })
        }
				<div className={styles._leftShopContainer}>
					<h2 className={styles._textTitle}>TÍTULO LARGO</h2>
					<div className={styles._buttonContainer}>
						<Button borderColor="white" text="GO TO SHOP"  />
					</div>
				</div>

				<div className={styles._rightShopContainer}>
					<h2 className={styles._textTitle}>BETO COLLECTION</h2>
					<div className={styles._buttonContainer}>
						<Button borderColor="white" text="GO TO SHOP"  />
					</div>
				</div>
      </div>
    </div>
  )
}

export default FirstBanner
