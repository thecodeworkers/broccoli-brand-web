import { registerId } from '@utils/pageIds'
const register = (language) => `
registerPage: page(id: "${registerId}") {
  translation(language: ${language}) {
    register {
      title
      name
      email
      phone
      password
      confirmPassword
      login
      buttonText
      tooltips {
        name
        email
        phone
        password
        confirmPassword
      }
    }
    id
  }
}
`

export default register;