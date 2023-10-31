/*=========================================================================================
  File Name: moduleAuthGetters.js
  Description: Auth Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
import Vue from 'vue'


export default {
  isAuth (state) {
    return !!state.auth || localStorage.getItem('accessToken') || Vue.$cookies.get('accessToken')
  }
}
