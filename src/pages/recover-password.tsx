import React from 'react'
import { RestorePassword } from '@components'
import { dispatchPage } from '@utils'
import { wrapper } from '@store'

const RestorePage = (props) => {
  return <RestorePassword query={props.query} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  props => {
    dispatchPage(props, 'restorePage')
    return { props: { query: props.query } }
  }
)

export default RestorePage
