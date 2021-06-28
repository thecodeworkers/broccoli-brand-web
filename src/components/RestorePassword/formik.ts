import { useFormik } from 'formik'
import { passwordRegex } from '@utils/regex'
import { restorePassword } from '@store/actions'
import * as Yup from 'yup'

export const formikConfig = (dispatch, query) => (useFormik({
  initialValues: {
    password: '',
    confirmPassword: ''
  },

  validationSchema: Yup.object({
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
    dispatch(restorePassword({ ...values, ...query }))
  }
}))