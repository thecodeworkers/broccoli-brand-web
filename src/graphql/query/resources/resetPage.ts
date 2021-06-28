import { resetId } from '@utils/pageIds'

const resetPage = (language) => `
resetPage: page(id: "${resetId}") {
  translation(language: ${language}) {
    reset {
      title
      subtitle
      newPassword
      confirmNewPassword
      buttonText
      tooltips {
        newPassword
        confirmNewPassword
      }
    }
    id
  }
}
`

export default resetPage;