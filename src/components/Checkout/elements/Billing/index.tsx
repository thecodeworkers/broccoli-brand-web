import { Button } from '@components'
import { useDispatch, useSelector } from 'react-redux'
import { formikConfig } from './formik'
import styles from './styles.module.scss'

const Billing = () => {

  const { resource: { checkout: { checkout = {} } }, cart: { cart } } = useSelector((state: any) => state)
  const { deliveryAddressAndShipping, billingAndSummary } = checkout

  const dispatch = useDispatch()
  const formik = formikConfig(dispatch)

  const { errors, touched } = formik

  return (
    <div className={styles._main}>
      <div className={styles._addressBox}>
        <div className={styles._shippingTitleBox}>
          <h2 className={styles._shippingTitle}>{billingAndSummary?.billingTitle}</h2>
        </div>
        <div className={styles._formBox}>
          <form onSubmit={formik.handleSubmit}>
            <div className={styles._addressSelection}>
              <label className={formik.values.addressSelection === 'AMERICAN' ? [styles._radioLabelTax, styles._radioChecked].join(' ') : styles._radioLabelTax}>
                <input name="addressSelection" type="radio" className={errors.addressSelection && touched.addressSelection ? [styles._inputError, styles._radio].join(' ') : styles._radio}
                  onChange={formik.handleChange} onBlur={formik.handleBlur} value={'AMERICAN'} />
                {billingAndSummary?.default}
              </label>
              <label className={formik.values.addressSelection === 'MASTERCARD' ? [styles._radioLabelTax, styles._radioChecked].join(' ') : styles._radioLabelTax}>
                <input name="addressSelection" type="radio" className={errors.addressSelection && touched.addressSelection ? [styles._inputError, styles._radio].join(' ') : styles._radio}
                  onChange={formik.handleChange} onBlur={formik.handleBlur} value={'MASTERCARD'} />
                {billingAndSummary?.alternative}
              </label>
            </div>
            <label className={errors.name && touched.name ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.nameLastname}</span>
              {deliveryAddressAndShipping?.delivery?.nameLastname}
              <input id="name" name="name" type="text" className={errors.name && touched.name ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
            </label>
            <label className={errors.email && touched.email ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.email}</span>
              {deliveryAddressAndShipping?.delivery?.email}
              <input id="email" name="email" type="text" className={errors.email && touched.email ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
            </label>
            <div className={styles._selectBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.country}</span>
              <label htmlFor="country" className={styles._selectLabel}>
                {deliveryAddressAndShipping?.delivery?.country}
              </label>
              <label htmlFor="country" className={errors.country && touched.country ? [styles._inputError, styles._customSelect].join(' ') : styles._customSelect}>
                <select onChange={formik.handleChange} onBlur={formik.handleBlur} name="country" id="country" value={formik.values.country} className={styles._selectForm}>
                  <option value={'Venezuela'}>{'Venezuela'}</option>
                  <option value={'Mexico'}>{'Mexico'}</option>
                  <option value={'Estados Unidos'}>{'Estados Unidos'}</option>
                  <option value={'Panama'}>{'Panama'}</option>
                </select>
              </label>
            </div>
            <label className={errors.address && touched.address ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.address}</span>
              {deliveryAddressAndShipping?.delivery?.address}
              <input id="address" name="address" type="text" className={errors.address && touched.address ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address} />
            </label>
            <label className={errors.secondAddress && touched.secondAddress ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.secondAddress}</span>
              {deliveryAddressAndShipping?.delivery?.aptSuiteEtc}
              <input id="secondAddress" name="secondAddress" type="text" className={errors.secondAddress && touched.secondAddress ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.secondAddress} />
            </label>
            <label className={errors.city && touched.city ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.city}</span>
              {deliveryAddressAndShipping?.delivery?.city}
              <input id="city" name="city" type="text" className={errors.city && touched.city ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} />
            </label>
            <label className={errors.zip && touched.zip ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.zip}</span>
              {deliveryAddressAndShipping?.delivery?.postalCode}
              <input id="zip" name="zip" type="text" className={errors.zip && touched.zip ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.zip} />
            </label>
            <label className={errors.phone && touched.phone ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.phone}</span>
              {deliveryAddressAndShipping?.delivery?.phone}
              <input id="phone" name="phone" type="text" className={errors.phone && touched.phone ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} />
            </label>
          </form>
        </div>
      </div>
      <div className={styles._selectionBox}>
        <div className={styles._shippingBox}>
          <div className={styles._shippingTitleBox}>
            <p className={styles._shippingTitle}>
              {billingAndSummary?.summaryTitle}
            </p>
          </div>
          <div className={styles._formBox}>
            <form>
              <div className={styles._discountBox}>
                <div className={styles._discountInput}>
                  <label className={errors.discountCode && touched.discountCode ? [styles._inputError, styles._inputBox, styles._inputDiscount].join(' ') : [styles._inputBox, styles._inputDiscount].join(' ')}>
                    <span className={styles._tooltip}>{billingAndSummary?.tooltips?.discountCode}</span>
                    {billingAndSummary?.discountCode}
                    <input id="discountCode" name="discountCode" type="text" className={errors.discountCode && touched.discountCode ? [styles._inputError, styles._input].join(' ') : styles._input}
                      onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.discountCode} />
                  </label>
                </div>
                <div className={styles._discountButton}>
                  <Button text={billingAndSummary?.applyButton} borderColor='black' colorText='black' blackHover={true} type='submit' />
                </div>
              </div>
            </form>
            <div className={styles._informationBox}>
              <p className={styles._informationText}>{billingAndSummary?.totalItems} <span>{cart?.contentsTotal}</span></p>
              <p className={styles._informationText}>{billingAndSummary?.shipping} <span>{cart?.shippingTotal}</span></p>
              <p className={styles._informationText}>{billingAndSummary?.taxesFees} <span>{cart?.totalTax}</span></p>
              <p className={[styles._informationText, styles._totalBilling].join(' ')}>{billingAndSummary?.orderTotal} <span>{cart?.total}</span></p>
              <p className={styles._informationText}>{billingAndSummary?.taxesDescription}</p>
              <p className={styles._informationText}>{billingAndSummary?.payAccept}</p>
              <div className={styles._buttonBox}>
                <div className={styles._discountButton}>
                  <Button text={billingAndSummary?.payButton} borderColor='white' colorText='white' type='submit' />
                </div>
                <p className={styles._payTime}>
                  You have 0h to cancel this order
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billing
