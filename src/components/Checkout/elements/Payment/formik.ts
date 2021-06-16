import { useFormik } from 'formik'
import { onlyLettersRegex, emailRegex } from '@utils/regex'
import * as Yup from 'yup'

export const formikConfig = (dispatch) => (useFormik({
  initialValues: {
    nameCard: '',
    securityCode: '',
    cardNumber: '',
    month: '',
    year: '',
    method: ''
  },

  validationSchema: Yup.object({
    nameCard: Yup.string()
      .required()
      .matches(onlyLettersRegex),
    securityCode: Yup.string()
      .required()
      .matches(emailRegex),
    cardNumber: Yup.string()
      .required(),
    month: Yup.string()
      .required(),
    year: Yup.string()
      .min(8)
      .required(),
    method: Yup.string().required()
  }),

  onSubmit: values => {
  }
}))
