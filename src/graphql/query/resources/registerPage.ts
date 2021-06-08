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
    }
    id
  }
}
`

export default register;