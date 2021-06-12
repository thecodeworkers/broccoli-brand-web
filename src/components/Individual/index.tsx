import React from 'react'
import Head from 'next/head'
import { Navbar, Footer } from '@components'
import { Details, Gallery, Colors, CompleteLook, Related } from './elements'

const Shop = ({ data }) => {
  return data ? (
    <div>
      <Head>
        <title>Broccoli</title>
      </Head>
      <Navbar />
      <Details data={data} />
      <Gallery data={data} />
      <Colors />
      <CompleteLook />
      <Related  data={data.crossSell} />
      <Footer />
    </div>
  ) : <div></div>
}

export default Shop
