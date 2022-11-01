import axios from 'axios'
import Config from 'react-native-config'

export const api = axios.create({
  baseURL: Config.BASE_URL,
  timeout: Number(Config.URL_TIME_OUT),
})

/**
 * Handle request data before it request
 */
api.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

/**
 * Handle response and error data before it return
 */
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

// export const api = instance
