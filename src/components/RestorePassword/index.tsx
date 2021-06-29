import { Button } from '@components'
import { setLoader } from '@store/actions'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../Footer'
import Navbar from '../Navbar'
import { formikConfig } from './formik'
import styles from './styles.module.scss'

const RestorePassword = ({query}) => {

  const router = useRouter()

  const { resource: { reset: { reset = {} } } } = useSelector((state: any) => state)

  const dispatch = useDispatch()
  const formik = formikConfig(dispatch, query)
  const { errors, touched } = formik

  useEffect(() => {
    if (query) if (!('key' in query) || !('user' in query)) {
      dispatch(setLoader(true))
      router.push('/')
    }

  }, [query])

  return (
    <div>
      <Head>
        <title>Broccoli</title>
      </Head>
      <Navbar />
      <div className={styles._main}>
        <div className={styles._registerContainer}>
          <div className={styles._loginBox}>
            <div className={styles._modalTitle}>
              <h2 className={styles._title}>{reset.title}</h2>

              <p className={styles._subtitle}>{reset.subtitle}</p>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <label className={errors.password && touched.password ? [styles._inputError, styles._inputBox].join(' ') : [styles._inputBox].join(' ')}>
                <span className={styles._tooltip}>{reset.tooltips?.newPassword}</span>
                {reset.newPassword}
                <input id="password" name="password" type="password" className={errors.password && touched.password ? [styles._inputError, styles._input].join(' ') : styles._input}
                  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
              </label>
              <label className={errors.confirmPassword && touched.confirmPassword ? [styles._inputError, styles._inputBox].join(' ') : [styles._inputBox].join(' ')}>
                <span className={styles._tooltip}>{reset.tooltips?.confirmNewPassword}</span>
                {reset.confirmNewPassword}
                <input id="confirmPassword" name="confirmPassword" type="password" className={errors.confirmPassword && touched.password ? [styles._inputError, styles._input].join(' ') : styles._input}
                  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} />
              </label>
              <div className={styles._button}>
                <Button text={reset.buttonText} borderColor='black' colorText='black' blackHover={true} type='submit' />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default RestorePassword
