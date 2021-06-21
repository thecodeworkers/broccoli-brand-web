import styles from './styles.module.scss'
import { Product, ResponsiveShop, Button } from '@components'
import { useSelector } from 'react-redux'

const Shop = ({ data }) => {

  const { resource: { collection , general}  } = useSelector((state: any) => state)
  
  return (
    <div className={styles._content}>
      <div className={styles._headerContainer}>
        <h2 className={styles._productsTitle}>{data.title}</h2>
        <p className={styles._productsText}>{data.description}</p>
      </div>

      <div className={styles._productContainer}>
        {collection.map((collect, index) => (
          <Product containerStyles={styles._product} data={collect} key={index} details={false} />
        ))}
      </div>

      <div className={styles._productReponsiveContainer}>
        <div className={styles._responsiveShopContainer}>
          {collection.map((collect, index) => (
            <div className={styles._shopContainer} key={index} >
              <ResponsiveShop data={collect} />
            </div>
          ))}
        </div>
        <div className={styles._buttonContainer}>
          <Button borderColor='black' text={general?.general?.generalText?.viewMoreText} colorText='black' blackHover={true} />
        </div>
      </div>
    </div>
  )
}

export default Shop
