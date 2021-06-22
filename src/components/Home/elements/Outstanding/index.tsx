import styles from './styles.module.scss'
import { Product, Button } from '@components'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { setLoader } from '@store/actions'

const Outstanding = ({ data }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const navigation = (route, loader = false) => {
    if (router.pathname != route) {
      if (loader) dispatch(setLoader(true))
      router.push(route)
    }
  }

  const { resource: { outstanding: products } } = useSelector((state: any) => state)

  return (
    <div className={styles._content}>
      <h2 className={styles._outstandingTitle}>{data.title}</h2>
      <div className={styles._productContainer}>
        {products?.map((product, index) => (
          <div className={styles._product} key={index}><Product data={product} /></div>
        ))}
      </div>
      <div className={styles._buttonContainer}>
        <Button blackHover={true} text={data.textButton} borderColor='black' colorText='black' onClick={() => navigation(data?.linkButton, true)} />
      </div>
    </div >
  )
}

export default Outstanding
