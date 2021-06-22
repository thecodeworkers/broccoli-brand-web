import React, { useEffect } from 'react'
import { Checkout } from '@components'
import { useDispatch } from 'react-redux'
import { checkoutReset, closeModal, setLoader } from '@store/actions'

const CheckoutPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeModal())
    dispatch(setLoader(false))
    dispatch(checkoutReset())
  }, [])
  return <Checkout />
}

export default CheckoutPage
