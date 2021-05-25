import styles from './styles.module.scss'
import { ContactForm } from '@components'

const Contact = () => {

  return (
    <>
      <section className={styles._content}>
        <div className={styles._contactFormContainer}>
          <ContactForm />
        </div>
        <div className={styles._imageContactContainer}>
          <div className={styles._imageContact}></div>
        </div>
      </section>
    </>
  )
}

export default Contact
