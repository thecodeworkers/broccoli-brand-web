import React from 'react'
import Head from 'next/head'
import { Navbar, Footer, Recents } from '@components'
import { Products } from './elements'

const Shop = ({ data }) => {
  return data ? (
    <div>
      <Head>
        <title>Broccoli</title>
      </Head>
      <Navbar />
      <Products data={data} />
      <Footer />
    </div>
  ) : <div></div>
}

export default Shop
