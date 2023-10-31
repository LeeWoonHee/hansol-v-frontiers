import Vue from 'vue'
import App from './App.vue'

// Vue.extend({
// 	mixins: [{
// 		methods: {
// 			$success: (text, title = '성공') => {
// 				Vue.prototype.$vs.notify({
// 					title,
// 					text,
// 					position: 'top-right',
// 					iconPack: 'feather',
// 					color: 'primary',
// 					icon: 'icon-check'
// 				})
// 			},
// 			$warning: (text, title = '알림') => {
// 				Vue.prototype.$vs.notify({
// 					title,
// 					text,
// 					position: 'top-right',
// 					iconPack: 'feather',
// 					color: 'warning',
// 					icon: 'icon-alert-circle'
// 				})
// 			},
// 			$error: (text, title = '실패') => {
// 				Vue.prototype.$vs.notify({
// 					title,
// 					text,
// 					position: 'top-right',
// 					iconPack: 'feather',
// 					color: 'error',
// 					icon: 'icon-alert-triangle'
// 				})
// 			}
// 		}
// 	}]
// })

import uploader from './plugins/uploader'

Vue.use(uploader)

import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'

Vue.use(VueAwesomeSwiper /* { default options with global component } */)

// cookies
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)

// axios
import axios from './axios.js'

axios.interceptors.request.use((config) => {
  if (localStorage.getItem('accessToken') || Vue.$cookies.get('accessToken')) {
    config.headers.common['Authorization'] = `Bearer ${ localStorage.getItem('accessToken') || Vue.$cookies.get('accessToken') }`
  }
  return config
})
axios.interceptors.response.use((config) => {
  if (config.headers['Authorization']) {
    localStorage.setItem('accessToken', config.headers['Authorization'].replace('Bearer ', ''))
    Vue.$cookies.set('accessToken', config.headers['Authorization'].replace('Bearer ', ''))
  }

  return config
}, (error) => {
  // const { config, response: { status } } = error
  const {
          response
        } = error

  // if (status === 401) {
  if (response && (response.status === 401 || response.status === 409)) {
    localStorage.removeItem('accessToken')
    Vue.$cookies.remove('accessToken')
    store.commit('auth/CLEAR_AUTH')
    store.dispatch('auth/logout')
  }

  return Promise.reject(error)
})
Vue.prototype.$http = axios
store.dispatch('getProgram')
// video
import Embed from 'v-video-embed'

// global register
Vue.use(Embed)

// gtag
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: { id: 'G-STEMNHHHLH' },
}, router)

// gtm
import VueGtm from '@gtm-support/vue2-gtm';

Vue.use(VueGtm, {
  id       : 'GTM-M6QRT37',
});

// import VueAnalytics from 'vue-analytics'

// Vue.use(VueAnalytics, {
//   id   : 'UA-219507228-1', // 콘솔에서 본인의 키를 확인하세요!
//   router, // 원활한 트래킹을 위해 router를 꼭 바인드 해 주어야 합니다!
//   debug: {
//     // sendHitTask: process.env.NODE_ENV === 'production'
//   }
// })

// API Calls
import './http/requests'

// mock
import './fake-db/index.js'

// Theme Configurations
import '../themeConfig.js'

// Firebase
import '@/firebase/firebaseConfig'

// Material Design Icons
import mdiVue from 'mdi-vue'
import * as mdijs from '@mdi/js'
import * as mdijsAdd from '@/else/vue/extenstions/mdiExtenstions'

Vue.use(mdiVue, {
  icons: Object.assign(Object.assign({}, mdijs), mdijsAdd)
})

// Auth0 Plugin
import AuthPlugin from './plugins/auth'

Vue.use(AuthPlugin)

//
import LoadScript from 'vue-plugin-load-script'
// vue.prototype.$loadScript = LoadScript
Vue.use(LoadScript)

// Vue.loadScript('/js/axtra/jquery-3.6.0.min.js')
// Vue.loadScript('/js/axtra/bootstrap.bundle.min.js')
// Vue.loadScript('/js/axtra/swiper-bundle.min.js')
// Vue.loadScript('/js/axtra/counter.js')
// Vue.loadScript('/js/axtra/gsap.min.js')
// Vue.loadScript('/js/axtra/ScrollTrigger.min.js')
// Vue.loadScript('/js/axtra/ScrollToPlugin.min.js')
// Vue.loadScript('/js/axtra/ScrollSmoother.min.js')
// Vue.loadScript('/js/axtra/SplitText.min.js')
// Vue.loadScript('/js/axtra/chroma.min.js')
// Vue.loadScript('/js/axtra/mixitup.min.js')
// Vue.loadScript('/js/axtra/vanilla-tilt.js')
// Vue.loadScript('/js/axtra/jquery.meanmenu.min.js')
// Vue.loadScript('/js/axtra/main.js')

// ACL
import acl from './acl/acl'

// Globally Registered Components
import './globalComponents.js'

// Styles: SCSS
import './assets/scss/main.scss'

// Tailwind
import '@/assets/css/main.css'

// pixel
import VueFacebookPixel from 'vue-analytics-facebook-pixel'

Vue.use(VueFacebookPixel)
Vue.analytics.fbq.init('512979193529427')

// Vue Router
import router from './router'

// Vuex Store
import store from './store/store'

// i18n
import i18n from './i18n/i18n'

// Vuexy Admin Filters
import './filters/filters'

// Clipboard
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

//window
vue.prototype.$window = window

// Tour
import VueTour from 'vue-tour'

Vue.use(VueTour)
require('vue-tour/dist/vue-tour.css')

// vue carousel
import Carousel3d from 'vue-carousel-3d'

Vue.use(Carousel3d)

// VeeValidate
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

// moment js
import vueMoment from 'vue-moment'

Vue.use(vueMoment)

// // Google Maps
// import * as VueGoogleMaps from 'vue2-google-maps'
//
// Vue.use(VueGoogleMaps, {
//   load: {
//     // Add your API key here
//     key      : 'YOUR_KEY',
//     libraries: 'places' // This is required if you use the Auto complete plug-in
//   }
// })

//swiper

// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'

Vue.use(VueHammer)

// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

// Feather font icon
require('./assets/css/iconfont.css')

// Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(VueYouTubeEmbed, {
  global     : true,
  componentId: 'youtube-media'
})

// Vuesax Component Framework
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css'
import vue from 'vue' // Vuesax
Vue.use(Vuesax)

Vue.config.productionTip = false

if (localStorage.getItem('accessToken') || Vue.$cookies.get('accessToken')) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${ localStorage.getItem('accessToken') || Vue.$cookies.get('accessToken') }`
  store.dispatch('auth/getAuthByToken', localStorage.getItem('accessToken') || Vue.$cookies.get('accessToken'))
    .then((res) => {
      store.commit('auth/SET_USERS', { user: store.state.auth.user || JSON.parse(localStorage.getItem('user')) })
    }).catch(() => {
    store.dispatch('auth/logout')
  }).finally(() => {
    new Vue({
              router,
              store,
              i18n,
              acl,
              render: h => h(App)
            }).$mount('#app')
  })
}
else {
  new Vue({
            router,
            store,
            i18n,
            acl,
            render: h => h(App)
          }).$mount('#app')
}
