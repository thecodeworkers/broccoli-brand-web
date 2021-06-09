import { FC, useEffect } from 'react'
import { AppProps } from 'next/app'
import { useStore, useSelector, useDispatch } from 'react-redux'
import { wrapper } from '@store'
import '@styles/globals.scss'
import Head from 'next/head'
import { Alert, Loader, Modals } from '@components'
import { closeModal } from '@store/actions'

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {

  const { loader: { show }, modal, alert = {} } = useSelector((state: any) => state)
  const dispatch = useDispatch()
  const store: any = useStore()

  useEffect(() => {
    store.__persistor.persist()
    dispatch(closeModal())
  }, [])

  console.log(alert)

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {alert.show ? <Alert /> : null}

      { show && <Loader />}
      { modal.modal ? <Modals /> : null}
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(WrappedApp)
