import styles from './styles.module.scss'
import { Collection } from '@components'

const Collections = () => {

  return (
    <>
      <section className={styles._collectionContent}>
        <div className={styles._collectionContainer}>
            <div className={styles._collectionTitleContainer}>
                <h2 className={styles._collectionTitle}>PRIMERA COLECCIÓN</h2>
            </div>
            <div className={styles._collectionDescriptionContainer}>
                <p className={styles._collectionDescription}> Para nosotros, ORIGEN es conectar con tu esencia, buscamos conectar con nuestra raíz. Somos lo que hacemos. 
                    Trabajamos para hacer lo que nos gusta y por eso somos buenos en lo que nos gusta.
                </p>
            </div>
        </div>
        <div className={styles._productsContainer}>
          <Collection />
          <Collection />
          <Collection />
        </div>
      </section>
    </>
  )
}

export default Collections
