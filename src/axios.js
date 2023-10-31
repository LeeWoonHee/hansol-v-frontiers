// axios
import axios from 'axios'
import store from './store/store'
import router from './router'

const baseURL = 'https://api.bluepoint-oi.com'
// const baseURL = process.env.NODE_ENV === 'production' ? 'https://api.bluepoint-oi.com' : 'http://192.168.35.93:8000'

if (localStorage.getItem('accessToken')) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${ localStorage.getItem('accessToken') }`
}
axios.interceptors.request.use((config) => {
  if (localStorage.getItem('accessToken')) {
    config.headers.common['Authorization'] = `Bearer ${ localStorage.getItem('accessToken') }`
  }
  return config
})
axios.interceptors.response.use((config) => {
  if (config.headers['Authorization']) {
    localStorage.setItem('accessToken', config.headers['Authorization'].replace('Bearer ', ''))
  }

  return config
}, (error) => {
  // const { config, response: { status } } = error
  const {
          response
        } = error

  // if (status === 401) {
  if (response && (response.status === 401 || response.status === 409)) {
    store.dispatch('auth/logout')
    router.push('/')
  }

  return Promise.reject(error)
})

export default axios.create({
                              baseURL
                              // You can add your headers here
                            })
