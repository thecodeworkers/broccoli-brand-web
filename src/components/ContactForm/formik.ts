import { useFormik } from 'formik'
import { emailRegex, onlyLettersRegex } from '@utils/regex'
import { sendMail } from '@store/actions'
import * as Yup from 'yup'

export const formikConfig = dispatch => (useFormik({
  initialValues: {
    name: '',
    email: '',
    phone: '',
    orderNumber: '',
    category: '',
    subject: '',
    message: ''
  },

  validationSchema: Yup.object({
    name: Yup.string()
      .required()
      .matches(onlyLettersRegex),
    email: Yup.string()
      .required()
      .matches(emailRegex),
    phone: Yup.string()
      .required(),
    orderNumber: Yup.string(),
    category: Yup.string()
      .required(),
    subject: Yup.string()
      .required(),
    message: Yup.string()
      .required(),
  }),

  onSubmit: values => {
    dispatch(sendMail(values))
  }
}))