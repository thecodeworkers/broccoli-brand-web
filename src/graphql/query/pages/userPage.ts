
import { userId } from '@utils/pageIds'

const user = (language) => `
userPage:page(id: "${userId}") {
  translation(language: ${language}) {
    id
    userPage {
      subtitle
      userInformation
      saveButton
      checkoutButton
    }
  }
}
`

export default user

