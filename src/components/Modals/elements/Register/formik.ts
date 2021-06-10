import { useFormik } from 'formik'
import { onlyLettersRegex, emailRegex, passwordRegex } from '@utils/regex'
import { signUp } from '@store/actions'
import * as Yup from 'yup'

export const formikConfig = (dispatch) => (useFormik({
  initialValues: {
    name: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
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

    password: Yup.string()
      .min(8)
      .required()
      .matches(passwordRegex),

    confirmPassword: Yup.string()
      .min(8)
      .required()
      .oneOf([Yup.ref('password'), null])
      .matches(passwordRegex),
  }),

  onSubmit: values => {
    dispatch(signUp(values))
  }
}))
