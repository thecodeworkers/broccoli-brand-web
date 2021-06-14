import { changeId } from '@utils/pageIds'

const login = (language) => `
changePage: page(id: "${changeId}") {
  translation(language: ${language}) {
    change {
      title
      oldPassword
      newPassword
      confirmNewPassword
      login
      createAccount
      buttonText
      tooltips {
        oldPassword
        newPassword
        confirmNewPassword
      }
    }
    id
  }
}
`

export default login;