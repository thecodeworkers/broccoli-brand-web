
import { shopId } from '@utils/pageIds'

const shop = (language) => `
shopPage:page(id: "${shopId}") {
  translation(language: ${language}) {
    shop {
      recentlyTitle
      categories
      sortBy {
        orderBy
        new
        lowestCost
        highestCost
        collection
        basics
      }
    }
  }
}
`

export default shop

