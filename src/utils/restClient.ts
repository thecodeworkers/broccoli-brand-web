import { fallbackNewsletterKey, fallbackNewsletterSecret, fallbackRestUrl } from './path'
import axios from 'axios'

const WP_API_URL = process.env.NEXT_PUBLIC_WP_ROOT_API_URL || fallbackRestUrl

const RestClient = async (url, method = 'GET', data = {}) => {
  try {
    const options = {
      method: method,
      data: data,
      auth: {
        username: process.env.NEWSLETTER_KEY || fallbackNewsletterKey,
        password: process.env.NEWSLETTER_SECRET || fallbackNewsletterSecret
      }
    }

    console.log(`${WP_API_URL}${url}`)
    const response = await axios(`${WP_API_URL}${url}`,options)
    console.log(response)
    if (response.data.errors?.length) return response.data.errors[0]

    return response.data.data

  } catch (err) {
    console.log(err)
    return null
  }
}

export default RestClient
