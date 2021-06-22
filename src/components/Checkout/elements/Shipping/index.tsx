import { checkoutForm } from '@store/actions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formikConfig } from './formik'
import styles from './styles.module.scss'

const Shipping = () => {

  const { resource: { checkout: { checkout = {} } } } = useSelector((state: any) => state)
  const { deliveryAddressAndShipping } = checkout

  const dispatch = useDispatch()
  const formik = formikConfig(dispatch)

  const { errors, touched } = formik

  useEffect(() => {
    if (formik.isValid && !Object.keys(errors).length) dispatch(checkoutForm({ 'shipping': { ...formik.values, isValid: formik.isValid } }))
  }, [formik.isValid])

  return (
    <div className={styles._main}>
      <div className={styles._addressBox}>
        <div className={styles._shippingTitleBox}>
          <h2 className={styles._shippingTitle}>{deliveryAddressAndShipping?.delivery?.titleDelivery}</h2>
        </div>
        <div className={styles._formBox}>

          <form onSubmit={formik.handleSubmit}>
            <label className={errors.name && touched.name ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.nameLastname}</span>
              {deliveryAddressAndShipping?.delivery?.nameLastname}
              <input id="nameShipping" name="name" type="text" className={errors.name && touched.name ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
            </label>
            <label className={errors.email && touched.email ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.email}</span>
              {deliveryAddressAndShipping?.delivery?.email}
              <input id="emailShipping" name="email" type="text" className={errors.email && touched.email ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
            </label>
            <div className={styles._selectBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.country}</span>
              <label htmlFor="country" className={styles._selectLabel}>
                {deliveryAddressAndShipping?.delivery?.country}
              </label>
              <label htmlFor="country" className={errors.country && touched.country ? [styles._inputError, styles._customSelect].join(' ') : styles._customSelect}>
                <select onChange={formik.handleChange} onBlur={formik.handleBlur} name="country" id="countryShipping" defaultValue={'Venezuela'} className={styles._selectForm}>
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
              <input id="addressShipping" name="address" type="text" className={errors.address && touched.address ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address} />
            </label>
            <label className={errors.secondAddress && touched.secondAddress ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.secondAddress}</span>
              {deliveryAddressAndShipping?.delivery?.aptSuiteEtc}
              <input id="secondAddressShipping" name="secondAddress" type="text" className={errors.secondAddress && touched.secondAddress ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.secondAddress} />
            </label>
            <label className={errors.city && touched.city ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.city}</span>
              {deliveryAddressAndShipping?.delivery?.city}
              <input id="cityShipping" name="city" type="text" className={errors.city && touched.city ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} />
            </label>
            <label className={errors.zip && touched.zip ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.zip}</span>
              {deliveryAddressAndShipping?.delivery?.postalCode}
              <input id="zipShipping" name="zip" type="text" className={errors.zip && touched.zip ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.zip} />
            </label>
            <label className={errors.phone && touched.phone ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.phone}</span>
              {deliveryAddressAndShipping?.delivery?.phone}
              <input id="phoneShipping" name="phone" type="text" className={errors.phone && touched.phone ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} />
            </label>
          </form>
        </div>
      </div>
      <div className={styles._selectionBox}>
        <div className={styles._shippingBox}>
          <div className={styles._shippingTitleBox}>
            <p className={styles._shippingTitle}>
              {deliveryAddressAndShipping?.shippingTitle}
            </p>
          </div>
          <div className={styles._shippingContent}>
            <div className={styles._radioBox}>
              <label className={formik.values.shippingMethod === 'AMERICAN' ? [styles._radioLabel, styles._radioChecked].join(' ') : styles._radioLabel}>
                <input name="shippingMethod" type="radio" className={errors.shippingMethod && touched.shippingMethod ? [styles._inputError, styles._radio].join(' ') : styles._radio}
                  onChange={formik.handleChange} onBlur={formik.handleBlur} value={'AMERICAN'} />
                Free
              </label>
              <label className={formik.values.shippingMethod === 'MASTERCARD' ? [styles._radioLabel, styles._radioChecked].join(' ') : styles._radioLabel}>
                <input name="shippingMethod" type="radio" className={errors.shippingMethod && touched.shippingMethod ? [styles._inputError, styles._radio].join(' ') : styles._radio}
                  onChange={formik.handleChange} onBlur={formik.handleBlur} value={'MASTERCARD'} />
                Express Courier (Air)
              </label>
              <label className={formik.values.shippingMethod === 'VISA' ? [styles._radioLabel, styles._radioChecked].join(' ') : styles._radioLabel}>
                <input name="shippingMethod" type="radio" className={errors.shippingMethod && touched.shippingMethod ? [styles._inputError, styles._radio].join(' ') : styles._radio}
                  onChange={formik.handleChange} onBlur={formik.handleBlur} value={'VISA'} />
                4 to 5 business days
              </label>
            </div>
          </div>
        </div>
        <div className={styles._taxesBox}>
          <div className={styles._shippingTitleBox}>
            <p className={styles._shippingTitle}>
              {deliveryAddressAndShipping?.taxesTitle}
            </p>
          </div>
          <div className={styles._shippingContent}>
            <label className={formik.values.taxMethod === 'AMERICAN' ? [styles._radioLabelTax, styles._radioChecked].join(' ') : styles._radioLabelTax}>
              <input name="taxMethod" type="radio" className={errors.taxMethod && touched.taxMethod ? [styles._inputError, styles._radio].join(' ') : styles._radio}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={'AMERICAN'} />
              <p className={styles._simpleText}>Prepay $ 000.00 for duties, taxes and fees now to guarantee no additional charges on delivery.</p> 
            </label>
            <label className={formik.values.taxMethod === 'MASTERCARD' ? [styles._radioLabelTax, styles._radioChecked].join(' ') : styles._radioLabelTax}>
              <input name="taxMethod" type="radio" className={errors.taxMethod && touched.taxMethod ? [styles._inputError, styles._radio].join(' ') : styles._radio}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={'MASTERCARD'} />
              <p className={styles._simpleText}>I will pay all applicable duties, taxes and fees on delivery.</p>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shipping
