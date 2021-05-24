import React from 'react'
import Head from 'next/head'
import { FirstBanner, Social, Outstanding } from './elements'
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
      <Social />
      <Footer />
    </div>
  )
}

export default Home
