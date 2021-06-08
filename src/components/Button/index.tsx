import styles from './styles.module.scss'

const Button = ({ borderColor = 'white', text, colorText = 'white', link = '', blackHover = false, type = "button" }) => {
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
        ._main:hover {
          border-color: ${blackHover ? 'black' : 'white'}
        }
        ._textColor {
          color: ${colorText};
        }
        `}</style>
    </>
  )
}

export default Button
