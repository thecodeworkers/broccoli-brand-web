import styles from './styles.module.scss'
import { Product, Button } from '@components'
import { useSelector } from 'react-redux'
import resource from '@graphql/query/resources'

const Outstanding = ({ data }) => {

  const { resource: { outstanding: products }} = useSelector((state: any) => state)

  return (
    <div className={styles._content}>
      <h2 className={styles._outstandingTitle}>{data.title}</h2>
      <div className={styles._productContainer}>
        {products?.map((product, index) => (
          <div className={styles._product} key={index}><Product data={product} /></div>
        ))}
      </div>
      <div className={styles._buttonContainer}>
        <Button blackHover={true} text={data.textButton} borderColor='black' colorText='black' link={data.linkButton} />
      </div>
    </div >
  )
}

export default Outstanding
