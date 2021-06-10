import { useFormik } from 'formik'
import { emailRegex, passwordRegex } from '@utils/regex'
import { signIn } from '@store/actions'
import * as Yup from 'yup'

export const formikConfig = dispatch => (useFormik({
  initialValues: {
    email: '',
    password: ''
  },

  validationSchema: Yup.object({
    email: Yup.string()
      .required()
      .matches(emailRegex),

    password: Yup.string()
      .min(8)
      .required()
      .matches(passwordRegex)
  }),

  onSubmit: values => {
    dispatch(signIn(values))
  }
}))