import React from 'react'
import { useSelector } from 'react-redux'
import { wrapper } from '@store'
import { getPages } from '@store/actions'
import { Individual } from '@components'

const IndividualProduct = () => {
  const { page: { productPage: shop } } = useSelector((state: any) => state)
  return <Individual data={shop} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store, params  }) => store.dispatch(getPages('productPage', params.id))
)

export default IndividualProduct
