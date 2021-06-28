import { useFormik } from 'formik'
import { onlyLettersRegex, emailRegex } from '@utils/regex'
import * as Yup from 'yup'

export const formikConfig = (dispatch) => (useFormik({
  initialValues: {
    name: '',
    email: '',
    country: '',
    address_1: '',
    address_2: '',
    city: '',
    postcode: '',
    phone: '',
    shippingMethod: '',
    taxMethod: '',
  },

  validationSchema: Yup.object({
    name: Yup.string()
      .required()
      .matches(onlyLettersRegex),
    email: Yup.string()
      .required()
      .matches(emailRegex),
    country: Yup.string()
      .required(),
    address_1: Yup.string()
      .required(),
    address_2: Yup.string()
      .min(8)
      .required(),
    city: Yup.string()
      .required(),
    postcode: Yup.string()
      .min(4)
      .required(),
    phone: Yup.string()
      .required(),
    shippingMethod: Yup.string()
      .required(),
    taxMethod: Yup.string()
      .required(),
  }),

  onSubmit: values => {
  }
}))
