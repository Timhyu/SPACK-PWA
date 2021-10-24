import axios from 'axios'

const isProd = process.env.NODE_ENV === 'production'
const baseURL = isProd
  ? `${process.env.VUE_APP_GRAPHQL_URL}`
  : `${process.env.VUE_APP_HOST}`

axios.defaults.baseURL = baseURL
axios.defaults.timeout = 60 * 1000
axios.defaults.headers.post['Accept'] = 'application/json'
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.withCredentials = true

axios.interceptors.request.use(
  (config: any) => {
    config.timeout = 60 * 1000
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (res: any) => {
    const xhr: any = res.request

    if (xhr.readyState == 4) {
      if (xhr.status == 200 || xhr.status == 304) {
        return Promise.resolve(res)
      } else {
        return Promise.resolve(res)
      }
    } else {
      return Promise.resolve(xhr)
    }
  },
  (error: any) => {
    if (error && error.response) {
      const res: any = {}
      res.code = error.response.status
      res.message = error.response
      return Promise.reject(res)
    }

    return Promise.reject(error)
  }
)

const api: any = {
  async get(url: string, data: any) {
    try {
      const res: any = await axios.get(url, data)

      return new Promise((resolve, reject) => {
        if (res.status == 200) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      })
    } catch (err) {
      return new Promise((resolve, reject) => {
        reject(err)
      })
    }
  },
  async post(url: string, data: any) {
    try {
      const res: any = await axios.post(url, data)

      return new Promise((resolve, reject) => {
        if (res.status == 200) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      })
    } catch (err) {
      return new Promise((resolve, reject) => {
        reject(err)
      })
    }
  },
  async put(url: string, data: any) {
    try {
      const res: any = await axios.put(url, data)

      return new Promise((resolve, reject) => {
        if (res.status == 200) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      })
    } catch (err) {
      return new Promise((resolve, reject) => {
        reject(err)
      })
    }
  }
}

export default api
