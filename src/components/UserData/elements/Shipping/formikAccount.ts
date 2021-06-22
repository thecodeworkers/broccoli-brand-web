import { useFormik } from 'formik'
import { onlyLettersRegex, emailRegex } from '@utils/regex'
import * as Yup from 'yup'

export const formikAccountConfig = (dispatch) => (useFormik({
  initialValues: {
    name: '',
    email: '',
  },

  validationSchema: Yup.object({
    name: Yup.string().matches(onlyLettersRegex),
    email: Yup.string().matches(emailRegex)
  }),

  onSubmit: values => {
  }
}))
