/*=========================================================================================
  File Name: moduleAuthMutations.js
  Description: Auth Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from '../../http/axios/index.js'
import Vue from 'vue'

export default {
  SET_BEARER (state, accessToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  },
  LOGIN (state, data) {
    state.auth = data.access_token
    state.user = data.user
    state.profile = data.profile
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`
    localStorage.setItem('accessToken', data.access_token)
    localStorage.setItem('user', JSON.stringify(data.user))
    localStorage.setItem('profile', JSON.stringify(data.profile))
    Vue.$cookies.set('accessToken', data.access_token)
  },
  CLEAR_AUTH (state, data) {
    state.auth = null
    state.user = null
    state.profile = null
    Vue.$cookies.remove('accessToken')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('user')
    localStorage.removeItem('profile')
    delete axios.defaults.headers.common['Authorization']
  },
  SET_TOKEN (state, data) {
    state.auth = data.access_token
    Vue.$cookies.set('accessToken', data.access_token)
    localStorage.setItem('accessToken', data.access_token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${Vue.$cookies.get('accessToken')}`
  },
  SET_USERS (state, data) {
    state.user = data.user
    localStorage.setItem('user', JSON.stringify(data.user))
  }
}
