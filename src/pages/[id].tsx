import React from 'react'
import { useSelector } from 'react-redux'
import { wrapper } from '@store'
import { Individual } from '@components'
import { dispatchPage } from '@utils'

const IndividualProduct = () => {
  const { page: { productPage: shop } } = useSelector((state: any) => state)
  return <Individual data={shop} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  (props) => dispatchPage(props, 'productPage')
)

export default IndividualProduct
