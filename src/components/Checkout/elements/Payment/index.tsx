import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formikConfig } from './formik'
import { Mastercard, Visa, American } from '@images/svg'
import styles from './styles.module.scss'

const Payment = () => {

  const { resource: { checkout: { checkout = {} } } } = useSelector((state: any) => state)
  const { payment } = checkout

  const dispatch = useDispatch()
  const formik = formikConfig(dispatch)

  const { errors, touched } = formik

  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));

  const date = useRef(new Date()).current

  return (
    <div className={styles._main}>
      <div className={styles._paymentBox}>
        {/* <div className={styles._paymentTitle}>
          <h2 className={styles._title}>{payment?.title}</h2>
          <h2 className={styles._title}>{payment?.security}</h2>
        </div> */}
        <div className={styles._formBox}>
          <form onSubmit={formik.handleSubmit}>
            <div className={styles._formContainer}>
              <div className={styles._leftSide}>
              <div className={styles._paymentTitle}>
                <h2 className={styles._title}>{payment?.title}</h2>
              </div>
                <div className={styles._paymentContainer}>
                  <div>
                    <p className={styles._selectLabel}>{payment?.chooseMethod}</p>
                    <div className={styles._radioBox}>
                      <label className={formik.values.method === 'AMERICAN' ? [styles._radioLabel, styles._radioChecked].join(' ') : styles._radioLabel}>
                        <input name="method" type="radio" className={errors.method && touched.method ? [styles._inputError, styles._radio].join(' ') : styles._radio}
                          onChange={formik.handleChange} onBlur={formik.handleBlur} value={'AMERICAN'} />
                        <American width='4rem' height='4rem' />
                      </label>
                      <label className={formik.values.method === 'MASTERCARD' ? [styles._radioLabel, styles._radioChecked].join(' ') : styles._radioLabel}>
                        <input name="method" type="radio" className={errors.method && touched.method ? [styles._inputError, styles._radio].join(' ') : styles._radio}
                          onChange={formik.handleChange} onBlur={formik.handleBlur} value={'MASTERCARD'} />
                        <Mastercard width='4rem' height='4rem' />
                      </label>
                      <label className={formik.values.method === 'VISA' ? [styles._radioLabel, styles._radioChecked].join(' ') : styles._radioLabel}>
                        <input name="method" type="radio" className={errors.method && touched.method ? [styles._inputError, styles._radio].join(' ') : styles._radio}
                          onChange={formik.handleChange} onBlur={formik.handleBlur} value={'VISA'} />
                        <Visa width='4rem' height='4rem' />
                      </label>
                    </div>
                  </div>
                  <label className={errors.nameCard && touched.nameCard ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
                    <span className={styles._tooltip}>{payment?.tooltips?.nameCard}</span>
                    {payment?.nameCard}
                    <input id="nameCard" name="nameCard" type="text" className={errors.nameCard && touched.nameCard ? [styles._inputError, styles._input].join(' ') : styles._input}
                      onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.nameCard} />
                  </label>
                  <label className={errors.securityCode && touched.securityCode ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
                    <span className={styles._tooltip}>{payment?.tooltips?.securityCode}</span>
                    <p>{payment?.securityCode}</p>
                    <input id="securityCode" name="securityCode" type="text" className={errors.securityCode && touched.securityCode ? [styles._inputError, styles._input].join(' ') : styles._input}
                      onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.securityCode} />
                  </label>
                </div>
              </div>

              <div className={styles._rightSide}>
              <div className={styles._secureTitle}>
                <h2 className={styles._title}>{payment?.security}</h2>
              </div>
                <div className={styles._secureContainer}>
                  <label className={errors.cardNumber && touched.cardNumber ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
                    <span className={styles._tooltip}>{payment?.tooltips?.cardNumber}</span>
                    {payment?.cardNumber}
                    <input id="cardNumber" name="cardNumber" type="text" className={errors.cardNumber && touched.cardNumber ? [styles._inputError, styles._input].join(' ') : styles._input}
                      onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cardNumber} />
                  </label>
                  <div>
                    <p className={styles._selectLabel}>{payment?.expiryDate}</p>
                    <div className={styles._doubleSelect}>
                      <div className={styles._selectBox}>
                        <span className={styles._tooltip}>{payment?.tooltips?.month}</span>
                        <label htmlFor="month" className={errors.month && touched.month ? [styles._inputError, styles._customSelect].join(' ') : styles._customSelect}>
                          <select onChange={formik.handleChange} onBlur={formik.handleBlur} name="month" id="month" placeholder={payment?.month} value={formik.values.month} className={styles._selectForm}>
                            {range(1, 12, 1).map((data, index) => {
                              return <option key={index} value={index + 1}>{index + 1}</option>
                            })}
                          </select>
                        </label>
                      </div>
                      <div className={styles._selectBox}>
                        <span className={styles._tooltip}>{payment?.tooltips?.year}</span>
                        <label htmlFor="year" className={errors.year && touched.year ? [styles._inputError, styles._customSelect].join(' ') : styles._customSelect}>
                          <select onChange={formik.handleChange} onBlur={formik.handleBlur} name="year" id="year" placeholder={payment?.year} value={formik.values.year} className={styles._selectForm}>
                            {range(1, 20, 1).map((data, index) => {
                              return <option key={index} value={date.getFullYear() + index}>{date.getFullYear() + index}</option>
                            })}
                          </select>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Payment
