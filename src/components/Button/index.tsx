import styles from './styles.module.scss'

const Button = ({ borderColor = 'white', text, colorText = 'white', link = '', blackHover = false, type }) => {
  return (
    <>
      <a href={link}>
        <button type={type} className={[styles._container, '_main', blackHover ? styles._blackHover : styles._whiteHover].join(" ")}>
          <p className={[styles._buttonText, '_textColor'].join(" ")}>{text}</p>
        </button>
      </a>
      <style jsx>{`
        ._main {
          border-color: ${borderColor};
        }
        ._textColor {
          color: ${colorText};
        }
        ${blackHover} 
        `}</style>
    </>
  )
}

export default Button
