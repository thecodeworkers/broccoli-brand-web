import React from 'react'
import { useSelector } from 'react-redux'
import { wrapper } from '@store'
import { dispatchPage } from '@utils'
import { Shop } from '@components'

const ShopPage = () => {
  const { page: { shopPage: { shop } } } = useSelector((state: any) => state)
  return <Shop data={shop} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  props => dispatchPage(props, 'shopPage')
)

export default ShopPage
