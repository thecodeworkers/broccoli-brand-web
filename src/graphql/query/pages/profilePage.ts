
import { profileId } from '@utils/pageIds'

const profile = (language) => `
profilePage:page(id: "${profileId}") {
  translation(language: ${language}) {
    id
    profile {
      checkoutButton
      editBillingButton
      orders {
        title
        table {
          search
          order
          hour
          date
          status
        }
      }
    }
  }
}
`

export default profile

