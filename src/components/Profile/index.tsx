import React from 'react'
import Head from 'next/head'
import { Navbar, Footer, Bag } from '@components'
import { Buttonery, RecentView } from './elements'

const Profile = ({ data }) => (
  <div>
    <Head>
      <title>Broccoli</title>
    </Head>
    <Navbar />
    <Bag />
    <Buttonery data={data} />
    <RecentView data={data} />
    <Footer />
  </div>
)

export default Profile
