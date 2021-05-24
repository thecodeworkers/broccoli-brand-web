import styles from './styles.module.scss'

const ColorPicker = ({ color }) => {

  return (
    <>
        <div className={styles._colorContainer}>
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
