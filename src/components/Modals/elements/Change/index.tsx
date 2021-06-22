import { Button } from '@components'
import { closeModal, guestUser, openModal } from '@store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { formikConfig } from './formik'
import styles from './styles.module.scss'

const Login = () => {

  const { resource: { change: { change = {} } } } = useSelector((state: any) => state)

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
            <h2 className={styles._title}>{change.title}</h2>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <label className={errors.oldPassword && touched.oldPassword ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{change.tooltips?.oldPassword}</span>
              {change.oldPassword}
              <input id="oldPassword" name="oldPassword" type="password" className={errors.oldPassword && touched.oldPassword ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.oldPassword} />
            </label>
            <label className={errors.password && touched.password ? [styles._inputError, styles._inputBox].join(' ') : [styles._inputBox].join(' ')}>
              <span className={styles._tooltip}>{change.tooltips?.newPassword}</span>
              {change.newPassword}
              <input id="password" name="password" type="password" className={errors.password && touched.password ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
            </label>
            <label className={errors.confirmPassword && touched.confirmPassword ? [styles._inputError, styles._inputBox].join(' ') : [styles._inputBox].join(' ')}>
              <span className={styles._tooltip}>{change.tooltips?.confirmNewPassword}</span>
              {change.confirmNewPassword}
              <input id="confirmPassword" name="confirmPassword" type="password" className={errors.confirmPassword && touched.password ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} />
            </label>
            <div className={styles._button}>
              <Button text={change.buttonText} borderColor='black' colorText='black' blackHover={true} type='submit' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
