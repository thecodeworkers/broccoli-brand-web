import { useFormik } from 'formik'
import { onlyLettersRegex, emailRegex } from '@utils/regex'
import * as Yup from 'yup'

export const formikConfig = (dispatch) => (useFormik({
  initialValues: {
    name: '',
    email: '',
    country: '',
    address: '',
    secondAddress: '',
    city: '',
    zip: '',
    phone: '',
    addressSelection: '',
    discountCode: '',
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
    address: Yup.string()
      .required(),
    secondAddress: Yup.string()
      .min(8)
      .required(),
    city: Yup.string()
      .required(),
    zip: Yup.string()
    .required(),
    phone: Yup.string()
    .required(),
    discountCode: Yup.string(),
  }),

  onSubmit: values => {
  }
}))
