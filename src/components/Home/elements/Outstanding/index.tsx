import styles from './styles.module.scss'
import { Product, Button } from '@components'

const Outstanding = ({data}) => {

  return (
    <div className={styles._content}>
      <h2 className={styles._outstandingTitle}>{data.title}</h2>
      <div className={styles._productContainer}>
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className={styles._buttonContainer}>
        <Button text={data.textButton} borderColor='black' colorText='black' link={data.linkButton} />
      </div>
    </div>
  )
}

export default Outstanding
