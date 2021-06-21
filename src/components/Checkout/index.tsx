import React from 'react'
import Head from 'next/head'
import { Navbar, Footer, Bag } from '@components'
import { Billing, Payment, Shipping } from './elements'
import getStripe from '@utils/getStripe'
import { Elements } from '@stripe/react-stripe-js'

const stripe = getStripe()

const Checkout = () => (
  <div>
    <Head>
      <title>Broccoli</title>
    </Head>
    <Navbar />
    <Bag />
    <Elements stripe={stripe}>
      <Shipping />
      <Payment />
      <Billing />
    </Elements>
    <Footer />
  </div>
)

export default Checkout
