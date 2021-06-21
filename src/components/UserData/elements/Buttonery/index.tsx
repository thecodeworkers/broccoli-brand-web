import React from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@components'
import styles from './styles.module.scss'
import { editUser, setLoader } from '@store/actions'

const Buttonery = ({ data }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { user: { checkout } } = useSelector((state: any) => state)

  const navigation = (route, loader = false) => {
    if (router.pathname != route) {
      if (loader) dispatch(setLoader(true))
      router.push(route)
    }
  }

  const editData = () => {
    dispatch(editUser())
  }

  return data ? (
    <div className={styles._main}>
      <div className={styles._buttonContainer}>
        <Button text={data?.checkoutButton} borderColor='black' colorText='black' blackHover={true} onClick={() => navigation('checkout', true)} />
      </div>
      <div className={styles._buttonContainer}>
        <Button disabled={(!checkout?.billing?.isValid || !checkout?.shipping?.isValid)} text={data?.saveButton} borderColor='black' colorText='black' blackHover={true} onClick={() => editData()} />
      </div>
    </div>
  ) : null

}

export default Buttonery