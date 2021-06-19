import React, { useEffect } from 'react'
import Head from 'next/head'
import { Navbar, Footer } from '@components'
import { Details, Gallery, Colors, CompleteLook, Related } from './elements'
import { useDispatch } from 'react-redux'
import { recentlyView } from '@store/actions'

const Shop = ({ data }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (Object.entries(data).length !== 0) dispatch(recentlyView(data))
  }, [data])

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
      <Related data={data.crossSell} />
      <Footer />
    </div>
  ) : <div></div>
}

export default Shop
