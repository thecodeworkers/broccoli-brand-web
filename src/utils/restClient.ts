import { fallbackNewsletterKey, fallbackNewsletterSecret, fallbackRestUrl } from './path'
import axios from 'axios'

const WP_API_URL = process.env.NEXT_PUBLIC_WP_ROOT_API_URL || fallbackRestUrl

const RestClient = async (url, method = 'GET', data = {}) => {
  try {
    const options: any = {
      method: method,
      data: data,
      auth: {
        username: process.env.NEWSLETTER_KEY || fallbackNewsletterKey,
        password: process.env.NEWSLETTER_SECRET || fallbackNewsletterSecret
      }
    }

    const response = await axios(`${WP_API_URL}${url}`, options)
    return response.data

  } catch (err) {
    return null
  }
}

export default RestClient
