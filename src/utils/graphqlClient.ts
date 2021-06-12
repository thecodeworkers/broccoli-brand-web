import { fallbackUrl } from './path'
import axios from 'axios'

const WP_API_URL = process.env.WP_API_URL || fallbackUrl

const GraphQlClient = async (query, variables = {}, auth = null, wcAuth = null) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': (auth) ? `BEARER ${auth}` : '',
      'woocommerce-session': wcAuth ? `Session ${wcAuth}` : ''
    }
    const response = await axios.post(WP_API_URL, { query, variables }, { headers })
    if (response.data.errors?.length) return response.data.errors[0]
    return response.data.data

  } catch (err) {
    return null
  }
}

export default GraphQlClient
