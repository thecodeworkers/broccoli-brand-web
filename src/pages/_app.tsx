import { FC, useEffect } from 'react'
import { AppProps } from 'next/app'
import { useStore, useSelector } from 'react-redux'
import { wrapper } from '@store'
import '@styles/globals.scss'
import Head from 'next/head'
import { Loader, Login, Register } from '@components'

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {

  const { loader: { show }, modal } = useSelector((state: any) => state)
  const store: any = useStore()

  useEffect(() => {
    store.__persistor.persist()
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      { show && <Loader />}
      { modal.modal ? (modal.modalType === 'register') ? <Register /> : (modal.modalType === 'login') ? <Login /> : null : null}
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(WrappedApp)
