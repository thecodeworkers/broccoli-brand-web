
import { shopId } from '@utils/pageIds'

const shop = (language) => `
shopPage:page(id: "${shopId}") {
  translation(language: ${language}) {
    shop {
      recentlyTitle
    }
  }
}
`

export default shop

