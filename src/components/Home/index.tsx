import React from 'react'
import Head from 'next/head'
import { FirstBanner, Outstanding } from './elements'
import { Navbar, Footer } from '@components'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Broccoli</title>
      </Head>
      <Navbar />
      <FirstBanner />
      <Outstanding />
      <Footer />
    </div>
  )
}

export default Home
