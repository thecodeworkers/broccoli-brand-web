import { Button } from '@components'
import styles from './styles.module.scss'

const ContactForm = () => {

  return (
    <>
      <section className={styles._content}>
        <div>
          <div className={styles._formTitleContainer}>
            <h2 className={styles._formTitle}>CONTACT US</h2>
          </div>
          <div className={styles._formContent}>
            <div className={styles._formContainer}>
              <p className={styles._labelForm}>First and Last Name</p>
              <input type="text" className={styles._inputForm} />
            </div>
            <div className={styles._formContainer}>
              <p className={styles._labelForm}>Email</p>
              <input type="text" className={styles._inputForm} />
            </div>
            <div className={styles._formContainer}>
              <p className={styles._labelForm}>Phone</p>
              <input type="text" className={styles._inputForm} />
            </div>
            <div className={styles._formContainer}>
              <p className={styles._labelForm}>Order Number</p>
              <input type="text" className={styles._inputForm} />
            </div>
            <div className={styles._formContainer}>
              <p className={styles._labelForm}>Category</p>
              <label htmlFor="category" className={styles._customSelect}>
                <select name="category" id="category" defaultValue="CUSTOMER SERVICE" className={styles._selectForm}>
                  <option value="">CUSTOMER SERVICE</option>
                  <option value="">CUSTOMER SERVICE</option>
                </select>
              </label>
            </div>
            <div className={styles._formContainer}>
              <p className={styles._labelForm}>Subject</p>
              <label htmlFor="subject" className={styles._customSelect}>
                <select name="subject" id="subject" defaultValue="ORDER INQUIRY" className={styles._selectForm}>
                  <option value="">ORDER INQUIRY</option>
                  <option value="">CUSTOMER SERVICE</option>
                </select>
              </label>
            </div>
            <div className={styles._formContainer}>
              <p className={styles._labelMessage}>Message</p>
              <input type="text" className={styles._inputForm} />
            </div>
          </div>
          <div className={styles._buttonContainer}>
            <Button text='ENVIAR' borderColor='black' colorText='black' blackHover={true} />
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactForm
