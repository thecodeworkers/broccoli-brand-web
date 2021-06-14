import React, { useEffect } from 'react'
import { Checkout } from '@components'
import { useDispatch } from 'react-redux'
import { setLoader } from '@store/actions'

const CheckoutPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setLoader(false))
  }, [])
  return <Checkout />
}

export default CheckoutPage
