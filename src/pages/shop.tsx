import React from 'react'
import { useSelector } from 'react-redux'
import { wrapper } from '@store'  
import { getPages } from '@store/actions'
import { Shop } from '@components'

const ShopPage = () => {
  const { page: { shopPage: { shop } } } = useSelector((state: any) => state)
  return <Shop data={shop} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getPages('shopPage'))
)

export default ShopPage
