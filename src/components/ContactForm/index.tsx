import { Button } from '@components'
import styles from './styles.module.scss'

const ContactForm = ({ data }) => {

  return !data ? null : (
    <>
      <section className={styles._content}>
        <div>
          <div className={styles._formTitleContainer}>
            <h2 className={styles._formTitle}>{data.title}</h2>
          </div>
          <div className={styles._formContent}>
            <div className={styles._formContainer}>
              <p className={styles._labelForm}>{data.name}</p>
              <input type="text" className={styles._inputForm} />
            </div>
            <div className={styles._formContainer}>
              <p className={styles._labelForm}>{data.email}</p>
              <input type="text" className={styles._inputForm} />
            </div>
            <div className={styles._formContainer}>
              <p className={styles._labelForm}>{data.phone}</p>
              <input type="text" className={styles._inputForm} />
            </div>
            <div className={styles._formContainer}>
              <p className={styles._labelForm}>{data.orderNumber}</p>
              <input type="text" className={styles._inputForm} />
            </div>
            <div className={styles._formContainer}>
              <p className={styles._labelForm}>{data.category.title}</p>
              <label htmlFor="category" className={styles._customSelect}>
                <select name="category" id="category" defaultValue={data.category.fields[0].text} className={styles._selectForm}>
                  {data.category.fields.map((field, index) => <option key={index} value={field.text}>{field.text}</option>)}
                </select>
              </label>
            </div>
            <div className={styles._formContainer}>
              <p className={styles._labelForm}>{data.subject.title}</p>
              <label htmlFor="subject" className={styles._customSelect}>
                <select name="subject" id="subject" defaultValue={data.subject.fields[0].text} className={styles._selectForm}>
                  {data.subject.fields.map((field, index) => <option key={index} value={field.text}>{field.text}</option>)}
                </select>
              </label>
            </div>
            <div className={styles._formContainer}>
              <p className={styles._labelMessage}>{data.message}</p>
              <input type="text" className={styles._inputForm} />
            </div>
          </div>
          <div className={styles._buttonContainer}>
            <Button text={data.textButton} borderColor='black' colorText='black' />
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactForm
