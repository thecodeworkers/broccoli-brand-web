import { Button } from '@components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { formikConfig } from './formik'
import styles from './styles.module.scss'

const ContactForm = ({ data }) => {

  const dispatch = useDispatch()
  const formik = formikConfig(dispatch, { subject: data?.subject?.fields[0]?.text, category: data?.category?.fields[0]?.text })
  const { errors, touched } = formik

  const [arrowDown, setArrowDown] = useState<any>({first: false, second: false})

  const changeArrowDown = (flag: any) => {
    if(flag == 1) {
      let newState = arrowDown.first ? {first: false} : {first: true}
      return setArrowDown(prevState => {return {...prevState, ...newState}})
    }

    if(flag == 2) {
      let newState = arrowDown.second ? {second: false} : {second: true}
      return setArrowDown(prevState => {return {...prevState, ...newState}})
    }
  }

  return !data ? null : (
    <>
      <section className={styles._content}>
        <div>
          <div className={styles._formTitleContainer}>
            <h2 className={styles._formTitle}>{data.title}</h2>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className={styles._formContent}>
              <div className={styles._formContainer}>
                <span className={styles._tooltip}>{data?.tooltips?.name}</span>
                <p className={errors.name && touched.name ? [styles._inputError, styles._labelForm].join(' ') : styles._labelForm}>{data.name}</p>
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} name='name' type="text" className={errors.name && touched.name ? [styles._inputError, styles._inputForm].join(' ') : styles._inputForm} />
              </div>
              <div className={styles._formContainer}>
                <span className={styles._tooltip}>{data?.tooltips?.email}</span>
                <p className={errors.email && touched.email ? [styles._inputError, styles._labelForm].join(' ') : styles._labelForm}>{data.email}</p>
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} name='email' type="text" className={errors.email && touched.email ? [styles._inputError, styles._inputForm].join(' ') : styles._inputForm} />
              </div>
              <div className={styles._formContainer}>
                <span className={styles._tooltip}>{data?.tooltips?.phone}</span>
                <p className={errors.phone && touched.phone ? [styles._inputError, styles._labelForm].join(' ') : styles._labelForm}>{data.phone}</p>
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} name='phone' type="text" className={errors.phone && touched.phone ? [styles._inputError, styles._inputForm].join(' ') : styles._inputForm} />
              </div>
              <div className={styles._formContainer}>
                <span className={styles._tooltip}>{data?.tooltips?.orderNumber}</span>
                <p className={errors.orderNumber ? [styles._inputError, styles._labelForm].join(' ') : styles._labelForm} >{data.orderNumber}</p>
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.orderNumber} name='orderNumber' type="text" className={errors.orderNumber ? [styles._inputError, styles._inputForm].join(' ') : styles._inputForm} />
              </div>
              <div className={styles._formContainer}>
                <p className={errors.category && touched.category ? [styles._inputError, styles._labelForm].join(' ') : styles._labelForm}>{data.category.title}</p>
                <label htmlFor="category" className={[styles._customSelect, arrowDown.first ? styles._customSelectDown : ''].join(" ")} onClick={() => { changeArrowDown(1) }}>
                  <select name="category" defaultValue={data.category.fields[0].text} id="category" onChange={formik.handleChange} onBlur={formik.handleBlur} className={styles._selectForm}>
                    {data.category.fields.map((field, index) => <option key={index} value={field.text}>{field.text}</option>)}
                  </select>
                </label>
              </div>
              <div className={styles._formContainer}>
                <p className={errors.subject && touched.subject ? [styles._inputError, styles._labelForm].join(' ') : styles._labelForm}>{data.subject.title}</p>
                <label htmlFor="subject" className={[styles._customSelect,  arrowDown.second ? styles._customSelectDown : ''].join(" ")} onClick={() => {changeArrowDown(2)}}>
                  <select name="subject" defaultValue={data.subject.fields[0].text} id="subject" onChange={formik.handleChange} onBlur={formik.handleBlur} className={styles._selectForm} required>
                    {data.subject.fields.map((field, index) => <option key={index} value={field.text}>{field.text}</option>)}
                  </select>
                </label>
              </div>
              <div className={styles._formContainer}>
                <p className={errors.message && touched.message ? [styles._inputError, styles._labelMessage].join(' ') : styles._labelMessage}>{data.message}</p>
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message} name='message' type="text" className={errors.message && touched.message ? [styles._inputError, styles._inputForm].join(' ') : styles._inputForm} />
              </div>
            </div>
            <div className={styles._buttonContainer}>
              <Button text={data.textButton} borderColor='black' colorText='black' blackHover={true} type='submit' />
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default ContactForm
