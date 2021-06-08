import { useFormik } from 'formik'
import { onlyLettersRegex, emailRegex, passwordRegex } from '@utils/regex'
import { signUp } from '@store/actions'
import * as Yup from 'yup'

export const formikConfig = (dispatch) => (useFormik({
  initialValues: {
    name: '',
    lastname: '',
    email: '',
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
    console.log('hola')
    dispatch(signUp(values))
  }
}))
