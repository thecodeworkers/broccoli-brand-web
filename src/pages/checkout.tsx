import React, { useEffect } from 'react'
import { Checkout } from '@components'
import { useDispatch } from 'react-redux'
import { closeModal, setLoader } from '@store/actions'

const CheckoutPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeModal())
    dispatch(setLoader(false))
  }, [])
  return <Checkout />
}

export default CheckoutPage
