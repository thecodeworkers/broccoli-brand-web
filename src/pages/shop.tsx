import React from 'react'
import { useSelector } from 'react-redux'
import { wrapper } from '@store'  
import { getPages } from '@store/actions'
import { Shop } from '@components'
import { getResources } from '@store/actions'


const ShopPage = () => {
  const { page: { shopPage: { shop } } } = useSelector((state: any) => state)

  return <Shop data={shop} />
}

export const getStaticProps = wrapper.getStaticProps(
  ({ store }) => store.dispatch(getPages('shopPage'))
)

export default ShopPage
