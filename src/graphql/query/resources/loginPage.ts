import { loginId } from '@utils/pageIds'

const login = (language) => `
loginPage: page(id: "${loginId}") {
  translation(language: ${language}) {
    login {
      title
      email
      password
      remember
      buttonText
      createAccount
      changePassword
      forgotPassword
      guest
    }
    id
  }
}
`

export default login;