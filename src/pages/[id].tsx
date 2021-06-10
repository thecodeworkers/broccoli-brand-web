import React from 'react'
import { useSelector } from 'react-redux'
import { wrapper } from '@store'
import { getPages } from '@store/actions'
import { Individual } from '@components'

const IndividualProduct = () => {
  const state = useSelector((state: any) => state)
  console.log(state)
  return <Individual data={{}} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store, params  }) => store.dispatch(getPages('productPage', params.id))
)

export default IndividualProduct
