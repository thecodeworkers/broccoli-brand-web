import { useFormik } from 'formik'
import { emailRegex } from '@utils/regex'
import { forgotPassword } from '@store/actions'
import * as Yup from 'yup'

export const formikConfig = dispatch => (useFormik({
  initialValues: {
    email: '',
  },

  validationSchema: Yup.object({
    email: Yup.string()
      .required()
      .matches(emailRegex),
  }),

  onSubmit: values => {
    dispatch(forgotPassword(values))
  }
}))