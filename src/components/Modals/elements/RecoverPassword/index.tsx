import { Button } from '@components'
import { closeModal, openModal } from '@store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { formikConfig } from './formik'
import styles from './styles.module.scss'

const RecoverPassword = () => {

  const { resource: { recover: { recover = {} } } } = useSelector((state: any) => state)

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
            <h2 className={styles._title}>{recover.title}</h2>
            <p className={styles._subtitle}>{recover.subtitle}</p>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <label className={errors.email && touched.email ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{recover.tooltips?.email}</span>
              {recover.email}
              <input id="email" name="email" type="text" className={errors.email && touched.email ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
            </label>
            <div className={styles._linkBox}>
              <p className={styles._link} onClick={() => { dispatch(openModal('login')) }}>{recover.login}</p>
              <p className={styles._link} onClick={() => { dispatch(openModal('register')) }}>{recover.createAccount}</p>
            </div>
            <div className={styles._button}>
              <Button text={recover.buttonText} borderColor='black' colorText='black' blackHover={true} type='submit' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RecoverPassword
