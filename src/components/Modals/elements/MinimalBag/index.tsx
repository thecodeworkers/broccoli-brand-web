import { closeModal, openModal } from '@store/actions'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@components'
import styles from './styles.module.scss'

const MinimalBag = () => {

  const { resource: { checkout: { checkout = { bag: {} } }, general: generalPage = {} }, cart: { cart } } = useSelector((state: any) => state)
  const { bag } = checkout
  const { general } = generalPage
  const dispatch = useDispatch()

  const modal = (type) => {
    dispatch(openModal(type))
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
              {(cart?.contents?.itemCount) ? <></> :
                <>
                  <h2 className={[styles._title, styles._titleEmpty].join(' ')}>{bag?.noItems}</h2>
                </>
              }
            </div>
            <div className={styles._totalSubmit}>
              <div className={styles._subtotal}>
                <h2 className={styles._title}>{bag?.total}</h2>
                <h2 className={styles._title}>{cart?.contentsTotal}</h2>
              </div>
              <Button text={bag?.checkoutButton} borderColor='black' colorText='black' blackHover={true} type='button' />
            </div>
          </div>) : (
          <div className={styles._tableContainer}>
            <div className={styles._button}>
              <Button text={general?.navigationBar?.login} borderColor='black' colorText='black' blackHover={true} type='button' onClick={() => modal('login')} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MinimalBag
