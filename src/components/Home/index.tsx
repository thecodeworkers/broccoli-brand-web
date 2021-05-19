import React from 'react'
import Head from 'next/head'
import { FirstBanner } from './elements'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Broccoli</title>
      </Head>
      <FirstBanner />
    </div>
  )
}

export default Home
