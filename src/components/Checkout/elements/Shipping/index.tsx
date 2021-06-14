import { Button } from '@components'
import { closeModal, guestUser, openModal } from '@store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { formikConfig } from './formik'
import styles from './styles.module.scss'

const Shipping = () => {

  const { resource: { checkout: { checkout = {} } } } = useSelector((state: any) => state)
  const { deliveryAddressAndShipping } = checkout

  const dispatch = useDispatch()
  const formik = formikConfig(dispatch)

  const { errors, touched } = formik

  return (
    <div className={styles._main}>
      <div className={styles._addressBox}>
        <div className={styles._shippingTitleBox}>
          <h2 className={styles._shippingTitle}>{deliveryAddressAndShipping?.delivery?.titleDelivery}</h2>
        </div>
        <div className={styles._formBox}>

          <form onSubmit={formik.handleSubmit}>
            <label className={errors.name && touched.name ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.tooltips?.name}</span>
              {deliveryAddressAndShipping?.delivery?.nameLastname}
              <input id="name" name="name" type="text" className={errors.name && touched.name ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
            </label>
            <label className={errors.email && touched.email ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.tooltips?.email}</span>
              {deliveryAddressAndShipping?.delivery?.email}
              <input id="email" name="email" type="text" className={errors.email && touched.email ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
            </label>
            <div className={styles._selectBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.tooltips?.country}</span>
              <label htmlFor="country" className={styles._selectLabel}>
                {deliveryAddressAndShipping?.delivery?.country}
              </label>
              <label htmlFor="country" className={errors.country && touched.country ? [styles._inputError, styles._customSelect].join(' ') : styles._customSelect}>
                <select onChange={formik.handleChange} onBlur={formik.handleBlur} name="country" id="country" value={formik.values.country} className={styles._selectForm}>
                  <option value={''}>{'Hola'}</option>
                  <option value={''}>{'Hola'}</option>
                  <option value={''}>{'Hola'}</option>
                  <option value={''}>{'Hola'}</option>
                </select>
              </label>
            </div>
            <label className={errors.address && touched.address ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.tooltips?.address}</span>
              {deliveryAddressAndShipping?.delivery?.address}
              <input id="address" name="address" type="text" className={errors.address && touched.address ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address} />
            </label>
            <label className={errors.secondAddress && touched.secondAddress ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.tooltips?.secondAddress}</span>
              {deliveryAddressAndShipping?.delivery?.secondAddress}
              <input id="secondAddress" name="secondAddress" type="text" className={errors.secondAddress && touched.secondAddress ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.secondAddress} />
            </label>
            <label className={errors.city && touched.city ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.tooltips?.city}</span>
              {deliveryAddressAndShipping?.delivery?.city}
              <input id="city" name="city" type="text" className={errors.city && touched.city ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} />
            </label>
            <label className={errors.zip && touched.zip ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.tooltips?.zip}</span>
              {deliveryAddressAndShipping?.delivery?.zip}
              <input id="zip" name="zip" type="text" className={errors.zip && touched.zip ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.zip} />
            </label>
            <label className={errors.phone && touched.phone ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.tooltips?.phone}</span>
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
              Prepay $ 000.00 for duties, taxes and fees now to guarantee no additional charges on delivery.
            </label>
            <label className={formik.values.taxMethod === 'MASTERCARD' ? [styles._radioLabelTax, styles._radioChecked].join(' ') : styles._radioLabelTax}>
              <input name="taxMethod" type="radio" className={errors.taxMethod && touched.taxMethod ? [styles._inputError, styles._radio].join(' ') : styles._radio}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={'MASTERCARD'} />
              I will pay all applicable duties, taxes and fees on delivery.
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shipping
