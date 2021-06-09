import { Button } from '@components'
import { closeModal, openModal } from '@store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { formikConfig } from './formik'
import styles from './styles.module.scss'

const Login = () => {

  const { resource: { login: { login = {} } } } = useSelector((state: any) => state)

  const dispatch = useDispatch()
  const formik = formikConfig(dispatch)
  const { errors, touched } = formik

  return (
    <div className={styles._main}>
      <div className={styles._registerContainer}>
        <div className={styles._closeBox}>
          <p className={styles._close} onClick={() => { dispatch(closeModal()) }}>X</p>
        </div>
        <div className={styles._loginBox}>
          <div className={styles._modalTitle}>
            <h2 className={styles._title}>{login.title}</h2>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <label className={errors.email && touched.email ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{login.tooltips?.email}</span>
              {login.email}
              <input id="email" name="email" type="text" className={errors.email && touched.email ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
            </label>
            <label className={errors.password && touched.password ? [styles._inputError, styles._inputBox].join(' ') : [styles._inputBox].join(' ')}>
              <span className={styles._tooltip}>{login.tooltips?.password}</span>
              {login.password}
              <input id="password" name="password" type="password" className={errors.password && touched.password ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
            </label>
            <div className={styles._linkBox}>
              <p className={styles._link} onClick={() => { dispatch(openModal('change')) }}>{login.changePassword}</p>
              <p className={styles._link} onClick={() => { dispatch(openModal('recover')) }}>{login.forgotPassword}</p>
            </div>
            <div className={styles._button}>
              <Button text={login.buttonText} borderColor='black' colorText='black' blackHover={true} type='submit' />
            </div>
            <div className={styles._linkBox}>
              <p className={[styles._link, styles._linkBlack].join(' ')}>{login.guest}</p>
              <p className={[styles._link, styles._linkBlack].join(' ')} onClick={() => { dispatch(openModal('register')) }}>{login.createAccount}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
