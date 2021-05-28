import React from 'react'
import Head from 'next/head'
import { FirstBanner, Contact, Shop, Sponsors } from './elements'
import { Navbar, Footer } from '@components'

const AboutUs = ({ data }) => {

  return !data ? null : (
    <div >
      <Head>
        <title>Broccoli</title>
      </Head>
      <Navbar />
      <FirstBanner data={data.mainBanner} />
      <Shop data={data.shop} />
      <Sponsors data={data.sponsors} />
      <Contact data={data.contact} />
      <Footer />
    </div>
  )
}

export default AboutUs;

