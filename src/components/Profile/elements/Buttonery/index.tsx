import React from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { Button } from '@components'
import styles from './styles.module.scss'
import { openModal, setLoader } from '@store/actions'

const Buttonery = ({ data }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const navigation = (route, loader = false) => {
    if (router.pathname != route) {
      if (loader) dispatch(setLoader(true))
      router.push(route)
    }
  }

  return data ? (
    <div className={styles._main}>
      <div className={styles._buttonContainer}>
        <Button text={data?.editBillingButton} borderColor='black' colorText='black' blackHover={true} onClick={() => navigation('edit-user', true)} />
      </div>
      <div className={styles._buttonContainer}>
        <Button text={data?.checkoutButton} borderColor='black' colorText='black' blackHover={true} onClick={() => navigation('checkout', true)} />
      </div>
    </div>
  ) : null

}

export default Buttonery