import styles from './styles.module.scss'

const Button = ({ borderColor = 'white', text, colorText = 'white', link = '' }) => {
  return (
    <a href={link}>
      <div className={[styles._container, '_main'].join(" ")}>
        <p className={[styles._buttonText, '_textColor'].join(" ")}>{text}</p>
      </div>
      <style jsx>{`
        ._main {
            border-color: ${borderColor};
        }
        ._textColor {
            color: ${colorText};
        }
        `}</style>
    </a>
  )
}

export default Button
