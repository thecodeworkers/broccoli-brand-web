import React from 'react'
import Head from 'next/head'
import { Navbar, Footer, Bag } from '@components'
import { Billing, Payment, Shipping } from './elements'

const Checkout = () => (
  <div>
    <Head>
      <title>Broccoli</title>
    </Head>
    <Navbar />
    <Bag />
    <Shipping />
    <Payment />
    <Billing />
    <Footer />
  </div>
)

export default Checkout
