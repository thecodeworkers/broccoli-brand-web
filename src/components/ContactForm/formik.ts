import { useFormik } from 'formik'
import { emailRegex, onlyLettersRegex } from '@utils/regex'
import { sendMail } from '@store/actions'
import * as Yup from 'yup'

export const formikConfig = (dispatch, def: any = null) => (useFormik({
  initialValues: {
    name: (def) ? def.name : '',
    email: (def) ? def.email : '',
    phone: (def) ? def.phone : '',
    orderNumber: (def) ? def.orderNumber : '',
    category: (def) ? def.category : '',
    subject: (def) ? def.subject : '',
    message: (def) ? def.message : ''
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