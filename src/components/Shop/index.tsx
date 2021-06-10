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
      <Products data={data} />
      <Footer />
    </div>
  ) : <div></div>
  // return (
  //   <div>
  //     <Head>
  //       <title>Broccoli</title>
  //     </Head>
  //     <Navbar />
  //     <Products />
  //     <Footer />
  //   </div>
  // )
}

export default Shop
