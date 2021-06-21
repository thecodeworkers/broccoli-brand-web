import React from 'react'
import Head from 'next/head'
import { Navbar, Footer, Bag } from '@components'
import { Billing, Payment, Shipping } from './elements'
import getStripe from '@utils/getStripe'
import { Elements } from '@stripe/react-stripe-js'
import { useSelector } from 'react-redux'

const stripe = getStripe()

const Checkout = () => {
  const { cart: { cart } } = useSelector((state: any) => state)
  return (
    <div>
      <Head>
        <title>Broccoli</title>
      </Head>
      <Navbar />
      <Bag cart={cart} />
      <Elements stripe={stripe}>
        <Shipping />
        <Payment />
        <Billing />
      </Elements>
      <Footer />
    </div>
  )
}

export default Checkout
