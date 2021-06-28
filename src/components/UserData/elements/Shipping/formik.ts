import { useFormik } from 'formik'
import { onlyLettersRegex, emailRegex } from '@utils/regex'
import * as Yup from 'yup'

export const formikConfig = (def = null) => (useFormik({
  initialValues: {
    name: (def?.name) ? def?.name : '',
    email: (def?.email) ? def?.email : '',
    country: (def?.country) ? def?.country : '',
    address_1: (def?.address1) ? def?.address1 : '',
    address_2: (def?.address2) ? def?.address2 : '',
    city: (def?.city) ? def?.city : '',
    postcode: (def?.postcode) ? def?.postcode : '',
    phone: (def?.phone) ? def?.phone : '',
  },

  validationSchema: Yup.object({
    name: Yup.string()
      .required()
      .matches(onlyLettersRegex),
    email: Yup.string()
      .required()
      .matches(emailRegex),
    country: Yup.string()
      .required(),
    address_1: Yup.string()
      .required(),
    address_2: Yup.string()
      .min(8)
      .required(),
    city: Yup.string()
      .required(),
    postcode: Yup.string()
      .required(),
    phone: Yup.string()
      .required(),
  }),

  onSubmit: values => {
  }
}))
