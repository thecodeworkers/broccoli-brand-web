import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import { Navbar, Footer } from '@components'
import { Details, Gallery, Colors, CompleteLook, Related } from './elements'
import { useDispatch, useSelector} from 'react-redux'
import { recentlyView } from '@store/actions'

const Shop = ({ data }) => {
  const dispatch = useDispatch()
  const colors = useRef()

  const { resource: { general: { general } } } = useSelector((state: any) => state)

  useEffect(() => {
    if (Object.entries(data).length !== 0) dispatch(recentlyView(data))
  }, [data])

  return data ? (
    <div>
      <Head>
        <title>Broccoli</title>
      </Head>
      <Navbar />
      <Details data={data} texts={general?.generalText} reference={colors} />
      <Gallery data={data} />
      <div ref={colors}>
      {/* <Colors data={data?.productData?.allColors} title={general?.generalText?.individual?.allColorsText} /> */}
      </div>
      {/* <CompleteLook data={data?.upsell} title={general?.generalText?.individual?.completeLookText} />
      <Related data={data?.crossSell} title={general?.generalText?.individual?.alsoLikeText} /> */}
      <Footer />
    </div>
  ) : <div></div>
}

export default Shop
