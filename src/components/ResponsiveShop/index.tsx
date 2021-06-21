import React from 'react'
import styles from './styles.module.scss'
import { Bag } from '@images/svg'
import { useDispatch } from 'react-redux'
import { addToCar } from '@store/actions'

const ResponsiveShop = ({ data = null }) => {

  const dispatch = useDispatch()
  const add = () => { if (data) dispatch(addToCar(data?.databaseId, 1)) }
  
  return (
    <>
      <div className={['_productImage', styles._productImage].join(" ")}>
        <div className={styles._bag} onClick={add}>
          <Bag width='20' height='20' fill='white' />
        </div>
      </div>
      <style jsx>{`
        ._productImage {
          background-image: url(${data?.image?.mediaItemUrl});
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
      `}</style>  
    </>
  )
}

export default ResponsiveShop
