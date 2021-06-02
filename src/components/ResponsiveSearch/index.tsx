import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Cancel } from '@images/svg'

const ResponsiveSearch = ({ show = false, method}) => {

  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (show) return setVisible(true)
    if(!visible && !show) return setVisible(true)
    if(visible && show) return setVisible(false)
    return setVisible(false)
  }, [show])
  
  return (
    <div className={visible ? styles._mainIn : styles._mainOut}>
      <div className={styles._searcherContainer}>
        <div className={styles._inputContainer}>
          <input type="text" className={styles._input} placeholder='SEARCH' />
        </div>
        <div className={styles._xContainer} onClick={() => setVisible(false)}>
          <Cancel />
        </div>
      </div>
    </div>
  )
}

export default ResponsiveSearch
