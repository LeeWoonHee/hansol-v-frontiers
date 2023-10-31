/*=========================================================================================
  File Name: actions.js
  Description: Vuex Store - actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
import axios from '../axios'

const actions = {

  // /////////////////////////////////////////////
  // COMPONENTS
  // /////////////////////////////////////////////

  // Vertical NavMenu
  updateVerticalNavMenuWidth ({commit}, width) {
    commit('UPDATE_VERTICAL_NAV_MENU_WIDTH', width)
  },

  // VxAutoSuggest
  updateStarredPage ({commit}, payload) {
    commit('UPDATE_STARRED_PAGE', payload)
  },

  // The Navbar
  arrangeStarredPagesLimited ({commit}, list) {
    commit('ARRANGE_STARRED_PAGES_LIMITED', list)
  },
  arrangeStarredPagesMore ({commit}, list) {
    commit('ARRANGE_STARRED_PAGES_MORE', list)
  },

  // /////////////////////////////////////////////
  // UI
  // /////////////////////////////////////////////

  toggleContentOverlay ({commit}) {
    commit('TOGGLE_CONTENT_OVERLAY')
  },
  updateTheme ({commit}, val) {
    commit('UPDATE_THEME', val)
  },

  // /////////////////////////////////////////////
  // User/Account
  // /////////////////////////////////////////////

  updateUserInfo ({commit}, payload) {
    commit('UPDATE_USER_INFO', payload)
  },
  updateUserRole ({dispatch}, payload) {
    // Change client side
    payload.aclChangeRole(payload.userRole)

    // Make API call to server for changing role

    // Change userInfo in localStorage and store
    dispatch('updateUserInfo', {userRole: payload.userRole})
  },
  getProgram ({commit}) {
    return new Promise((resolve, reject) => {
      axios.get('/program/5')
        .then((res) => {
          commit('SET_PROGRAM', res.data)
          resolve(res)
        })
        .catch((res) => {
          reject(res)
        })
    })
  }
}

export default actions
