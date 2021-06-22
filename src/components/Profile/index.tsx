import React from 'react'
import Head from 'next/head'
import { Navbar, Footer, Bag } from '@components'
import { Buttonery, RecentView, Related, Orders } from './elements'
import { useSelector } from 'react-redux'

const Profile = ({ data }) => {
  const { cart: { cart } } = useSelector((state: any) => state)
  
  return (
    <div>
      <Head>
        <title>Broccoli</title>
      </Head>
      <Navbar />
      <Bag cart={cart} />
      <Buttonery data={data} />
      <Orders data={data} />
      <RecentView data={data} />
      <Related data={data} />
      <Footer />
    </div>
  )
}

export default Profile
