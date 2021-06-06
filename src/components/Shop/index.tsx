import React from 'react'
import Head from 'next/head'
import { Navbar, Footer } from '@components'
import { Products } from './elements'

const Shop = ({ data }) => {
  return data ? (
    <div>
      <Head>
        <title>Broccoli</title>
      </Head>
      <Navbar />
      <Products />
      <Footer />
    </div>
  ) : <div></div>
}

export default Shop
