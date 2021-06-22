import { formatWooCommerceAmount } from "./stripeFormat"

export const exchangeProduct = (products, trade, currency, iso) => {
  if (iso !== 'USD') return products.map((product, index) => {
    product.exchange = `${currency} ${trade * formatWooCommerceAmount(product.price)}`
    return product
  })
  return products
}