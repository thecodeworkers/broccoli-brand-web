import { setAlert } from '@store/actions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.scss'
import { ErrorIcon, Check } from '@images/icons'

const Alert = () => {
  const { alert = {} } = useSelector((state: any) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setAlert('', false, 'success'))
    }, 5000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className={(alert.type === 'warning') ? [styles._main, styles._borderWarning].join(' ') : [styles._main, styles._borderSuccess].join(' ')}>
      {alert.type === 'warning' ? (
        <div className={styles._iconBox}>
          <ErrorIcon />
        </div>
      ) : (
        <div className={styles._iconBox}>
          <Check />
        </div>
      )}
      <p className={(alert.type === 'warning') ? [styles._message, styles._warning].join(' ') : [styles._message, styles._success].join(' ')}>{alert.message}</p>
    </div>
  )
}

export default Alert