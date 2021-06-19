import React, { useState } from 'react'
import styles from './styles.module.scss'

const ColorPicker = ({ color, onClick = null }) => {
  const [check, setChecked] = useState(false);

  const setData = () =>{
    onClick(!check)
    setChecked(!check)
  }
  return (
    <>
      <div className={styles._colorContainer} onClick={setData}>
        <div className={[styles._colorCircle, '_background'].join(" ")}></div>
        <div className={styles._colorCircleHover}></div>
      </div>
      <style jsx>{`
        ._background {
            background-color: ${color};
        }
        `}</style>
    </>
  )
}

export default ColorPicker
