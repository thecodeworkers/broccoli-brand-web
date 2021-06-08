import { Button } from '@components'
import { closeModal, openModal } from '@store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { formikConfig } from './formik'
import styles from './styles.module.scss'

const Register = () => {

  const { resource: { register: { register } } } = useSelector((state: any) => state)

  const dispatch = useDispatch()
  const formik = formikConfig(dispatch)
  const { errors, touched } = formik

  return (
    <div className={styles._main}>
      <div className={styles._registerContainer}>
        <div className={styles._closeBox}>
          <p className={styles._close} onClick={() => { dispatch(closeModal()) }}>X</p>
        </div>
        <div className={styles._modalTitle}>
          <h2 className={styles._title}>{register.title}</h2>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <label className={errors.name && touched.name ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
            {register.name}
            <input id="name" name="name" type="text" className={errors.name && touched.name ? [styles._inputError, styles._input].join(' ') : styles._input}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
          </label>
          <label className={errors.email && touched.email ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
            {register.email}
            <input id="email" name="email" type="text" className={errors.email && touched.email ? [styles._inputError, styles._input].join(' ') : styles._input}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
          </label>
          <div className={styles._doubleInput}>
            <label className={errors.password && touched.password ? [styles._inputError, styles._inputBox, styles._inputBoxDouble].join(' ') : [styles._inputBox, styles._inputBoxDouble].join(' ')}>
              {register.password}
              <input id="password" name="password" type="password" className={errors.password && touched.password ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
            </label>
            <label className={errors.confirmPassword && touched.confirmPassword ? [styles._inputError, styles._inputBox, styles._inputBoxDouble].join(' ') : [styles._inputBox, styles._inputBoxDouble].join(' ')}>
              {register.confirmPassword}
              <input id="confirmPassword" name="confirmPassword" type="password" className={errors.confirmPassword && touched.confirmPassword ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} />
            </label>
          </div>
          <div className={styles._linkBox}>
            <p className={styles._link} onClick={() => { dispatch(openModal('login')) }}>{register.login}</p>
          </div>
          <div className={styles._button}>
            <Button text={register.buttonText} borderColor='black' colorText='black' blackHover={true} type='submit' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
