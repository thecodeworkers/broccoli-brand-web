import React from 'react'
import Head from 'next/head'
import { Navbar, Footer } from '@components'

const Shop = ({ data }) => {
  return data ? (
    <div>
      <Head>
        <title>Broccoli</title>
      </Head>
      <Navbar />
      <h1>Individual</h1>
      <Footer />
    </div>
  ) : <div></div>
}

export default Shop
