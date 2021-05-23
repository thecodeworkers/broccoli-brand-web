import React from 'react'
import Head from 'next/head'
import { FirstBanner, Contact } from './elements'
import { Navbar, Footer } from '@components'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Broccoli</title>
      </Head>
      <Navbar />
      <FirstBanner />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
