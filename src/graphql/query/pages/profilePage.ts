
import { profileId } from '@utils/pageIds'

const profile = (language) => `
profilePage:page(id: "${profileId}") {
  translation(language: ${language}) {
    id
    profile {
      checkoutButton
      editBillingButton
      alsoLike
      historyNavigation
      orders {
        title
        table {
          searchPlaceholder
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

