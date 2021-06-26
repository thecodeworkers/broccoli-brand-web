import axios from 'axios'

const RestClient = async (url: string, method: string = 'GET', data: any | null = null, auth: any | null = null) => {
  const headers = {
    'Content-Type': 'application/json'
  }

  if(auth) {
    headers['auth'] = {
      username: process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_KEY,
      password: process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_SECRET
    }
  }

  const objectRequest: any = { method, url, data, headers }
  const response = await axios(objectRequest)

  return response?.data
}

export default RestClient
