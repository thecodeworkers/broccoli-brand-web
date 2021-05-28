import React from 'react'
import styles from './styles.module.scss'
import { Button } from '@components'

const Social = () => {

  return (
    <section className={styles._socialContent}>
      <div className={styles._socialImageContainer}>
        <div className={styles._imageContainer}></div>
      </div>
      <div className={styles._socialInfoContainer}>
        <div className={styles._socialContainer}>
          <div className={styles._socialTitleContainer}>
            <h2 className={styles._socialTitle}>@broccolibrand</h2>
          </div>
          <div className={styles._socialDescriptionContainer}>
            <p className={styles._socialDescription}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit id, rutrum ac vitae sed varius potenti sociosqu,
              lobortis cum pharetra orci et platea augue. Accumsan aenean ornare interdum luctus sociosqu condimentum pellentesque,
              urna feugiat tempus placerat hendrerit donec ut, tellus leo aptent tortor euismod conubia.
              Ullamcorper condimentum laoreet facilisis malesuada nunc a hac, potenti proin per aptent venenatis semper,
              facilisi est molestie justo euismod porttitor.
                    </p>
          </div>
          <div className={styles._buttonContainer}>
            <Button text="FOLLOW US" colorText="black" borderColor="black" blackHover={true} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Social
