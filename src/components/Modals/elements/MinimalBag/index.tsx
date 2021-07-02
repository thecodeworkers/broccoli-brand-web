import { closeModal, openModal, removeFromCart, setLoader, updateQuantity } from '@store/actions'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@components'
import styles from './styles.module.scss'
import { useRouter } from 'next/router'
import { formatCurrency } from '@utils'

const MinimalBag = () => {

  const { resource: { checkout: { checkout = { bag: {} } }, general: generalPage = {} }, intermittence: { currency }, cart: { cart } } = useSelector((state: any) => state)
  const { bag } = checkout
  const { general } = generalPage
  const dispatch = useDispatch()
  const router = useRouter()

  const modal = (type) => {
    dispatch(openModal(type))
  }

  const removeItem = (key) => {
    dispatch(removeFromCart(key))
  }

  const navigation = (route, loader = false) => {
    if (router.pathname != route) {
      if (loader) dispatch(setLoader(true))
      router.push(route)
    }
  }

  const modifyQuantity = (product: any, type: any) => {
    dispatch(updateQuantity(product, type))
  }

  return (
    <div className={styles._main}>
      <div className={styles._bagContainer}>
        <div className={styles._closeBox}>
          <p className={styles._close} onClick={() => { dispatch(closeModal()) }}>X</p>
        </div>
        {(cart?.total) ? (
          <div className={styles._bagContent}>
            <div className={styles._titleContainer}>
              <div className={styles._titleBox}>
                <h2 className={styles._title}>{bag?.bagTitle}</h2>
                <p className={styles._itemsTitle}>{cart?.contents?.itemCount} {bag?.items}</p>
              </div>
            </div>
            <div className={styles._tableContainer}>
              {(cart?.contents?.itemCount) ? cart?.contents?.nodes.map((data, index) => {
                return (
                  <div className={styles._bagItem} key={index}>
                    <div className={styles._itemImage}>
                      <img src={data?.product?.node?.image?.mediaItemUrl} alt={data?.product?.node?.image?.slug} />
                    </div>
                    <div className={styles._itemContent}>
                      <p className={styles._itemName}>{data?.product?.node?.name}</p>
                      <p className={styles._itemName}>{data?.variation?.attributes[0]?.name} <span className={styles._color} style={{ backgroundColor: data?.variation?.attributes[0]?.value }}></span></p>
                      <p className={styles._itemName}>{data?.variation?.attributes[1]?.name} <span className={styles._data}>{data?.variation?.attributes[1]?.value}</span></p>
                      <p className={styles._itemName}> Quantity
                        <span className={[styles._dataText, styles._quantityButton].join(' ')} onClick={() => modifyQuantity(data?.key, 'minus')}>-</span>
                        <span className={styles._dataText} >{data?.quantity}</span>
                        <span className={[styles._dataText, styles._quantityButton].join(' ')} onClick={() => modifyQuantity(data?.key, 'add')}>+</span>
                      </p>
                      <p className={styles._price}>{formatCurrency(currency, data?.total)}</p>
                      <div className={styles._button}>
                        <Button text={bag?.remove} borderColor='black' colorText='black' blackHover={true} type='button' onClick={() => removeItem(data?.key)} />
                      </div>
                    </div>
                  </div>
                )
              }) :
                <>
                  <h2 className={[styles._title, styles._titleEmpty].join(' ')}>{bag?.noItems}</h2>
                </>
              }
            </div>
            <div className={styles._totalSubmit}>
              <div className={styles._subtotal}>
                <h2 className={styles._title}>{bag?.subtotal}</h2>
                <h2 className={styles._title}>{formatCurrency(currency, cart?.contentsTotal)}</h2>
              </div>
              <Button disabled={!cart?.contents?.itemCount} text={bag?.checkoutButton} borderColor='black' colorText='black' blackHover={true} type='button' onClick={() => navigation('checkout', true)} />
            </div>
          </div>) : (
          <div className={styles._tableContainer}>
            <div className={styles._button}>
              <Button text={general?.navigationBar?.login} borderColor='black' colorText='black' blackHover={true} type='button' onClick={() => modal('login')} />
            </div>
          </div>
        )}
      </div>
    </div >
  )
}

export default MinimalBag
