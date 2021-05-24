import React from 'react'
import Head from 'next/head'
import { FirstBanner } from './elements'
import { Navbar, Footer, ContactForm } from '@components'

const AboutUs = () => {

  return (
    <div >
        <Head>
        <title>Broccoli</title>
        </Head>
        <Navbar />
        <FirstBanner />
        <ContactForm />
        <Footer />
    </div>
  )
}

export default AboutUs;

