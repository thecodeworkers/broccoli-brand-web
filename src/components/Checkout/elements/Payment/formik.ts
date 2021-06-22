import { useFormik } from 'formik'
import { onlyLettersRegex } from '@utils/regex'
import * as Yup from 'yup'

export const formikConfig = () => (useFormik({
  initialValues: {
    nameCard: '',
  },

  validationSchema: Yup.object({
    nameCard: Yup.string()
      .required()
      .matches(onlyLettersRegex).min(8)
  }),

  onSubmit: values => {
  }
}))
