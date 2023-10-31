<template>
  <body>
  <section>
    <div class="switcher__items">
      <div class="switcher__item">
        <div class="switch__title-wrap">
          <h2 class="switcher__title">Cursor</h2>
        </div>
        <div class="switcher__btn">
          <select
              name="cursor-style"
              id="cursor_style"
          >
            <option value="1">default</option>
            <option
                selected
                value="2"
            >animated
            </option>
          </select>
        </div>
      </div>

      <div class="switcher__item">
        <div class="switch__title-wrap">
          <h2 class="switcher__title">mode</h2>
        </div>
        <div class="switcher__btn mode-type wc-col-2">
          <button
              class="active"
              data-mode="light"
          >light
          </button>
          <button data-mode="dark">dark</button>
        </div>
      </div>

      <div class="switcher__item">
        <div class="switch__title-wrap">
          <h2 class="switcher__title">Language Support</h2>
        </div>
        <div class="switcher__btn lang_dir wc-col-2">
          <button
              class="active"
              data-mode="ltr"
          >LTR
          </button>
          <button data-mode="rtl">RTL</button>
        </div>
      </div>
    </div>
    <div
        class="has-smooth"
        id="has_smooth"
    ></div>
  </section>
  <b-nav/>
  <transition
      :name="routerTransition"
      mode="out-in"
  >
    <keep-alive>
      <router-view
          @load="routerLoaded('router')"
          :key="$route.fullPath"
          @changeRouteTitle="changeRouteTitle"
          @setAppClasses="(classesStr) => $emit('setAppClasses', classesStr)"
          @update_nav_menu=""
      />
    </keep-alive>
  </transition>
  <Footer/>
  </body>
</template>


<script>
import BackToTop from 'vue-backtotop'
import themeConfig from '@/../themeConfig.js'
import vSelect from 'vue-select'
import BNav from '@/components/navs/index.vue'
import Footer from '@/components/footers/index.vue'
import bootstrapCss from '@/assets/css/bootstrap.min.css'
import all_minCss from '@/assets/css/all.min.css'
import swiperCss from '@/assets/css/swiper-bundle.min.css'
import progressbarCss from '@/assets/css/progressbar.css'
import mean_menuCss from '@/assets/css/meanmenu.min.css'
import masterCss from '@/assets/css/master.css'
import styleCss from '@/assets/css/style.css'
import vue from 'vue'

export default {
  components: {
    BackToTop,
    vSelect,
    BNav,
    Footer,
    bootstrapCss,
    all_minCss,
    swiperCss,
    progressbarCss,
    mean_menuCss,
    masterCss,
    styleCss
  },

  data() {
    return {
      routerMounted    : false,
      mainMounted      : false,
      disableCustomizer: themeConfig.disableCustomizer,
      disableThemeTour : themeConfig.disableThemeTour,
      dynamicWatchers  : {},
      hideScrollToTop  : themeConfig.hideScrollToTop,
      isNavbarDark     : false,
      routerTransition : themeConfig.routerTransition || 'none',
      routeTitle       : this.$route.meta.pageTitle,
      steps            : [],
    }
  },
  watch   : {
    '$route'() {
      this.routeTitle = this.$route.meta.pageTitle
    },
    isThemeDark(val) {
      const color = this.navbarColor === '#fff' && val ? '#10163a' : '#fff'
      this.updateNavbarColor(color)
    },
    '$store.state.mainLayoutType'(val) {
      this.setNavMenuVisibility(val)
      this.disableThemeTour = true
    },
  },
  computed: {
    bodyOverlay() {
      return this.$store.state.bodyOverlay
    },
    contentAreaClass() {
      if (this.mainLayoutType === 'vertical') {
        if (this.verticalNavMenuWidth === 'default') {
          return 'content-area-reduced'
        }
        else if (this.verticalNavMenuWidth === 'reduced') {
          return 'content-area-lg'
        }
        else {
          return 'content-area-full'
        }
      }
      else {
        return 'content-area-full'
      }
    },
    footerClasses() {
      return {
        'footer-hidden': this.footerType === 'hidden',
        'footer-sticky': this.footerType === 'sticky',
        'footer-static': this.footerType === 'static'
      }
    },
    isAppPage() {
      return this.$route.meta.no_scroll
    },
    isThemeDark() {
      return this.$store.state.theme === 'dark'
    },
    layoutTypeClass() {
      return `main-${ this.mainLayoutType }`
    },
    mainLayoutType() {
      return this.$store.state.mainLayoutType
    },
    navbarClasses() {
      return {
        'navbar-hidden'  : this.navbarType === 'hidden',
        'navbar-sticky'  : this.navbarType === 'sticky',
        'navbar-static'  : this.navbarType === 'static',
        'navbar-floating': this.navbarType === 'floating'
      }
    },
    verticalNavMenuWidth() {
      return this.$store.state.verticalNavMenuWidth
    },
  },
  methods : {

    async routerLoaded(type) {
      if (type === 'main') {
        this.mainMounted = true
      }
      else {
        this.routerMounted = true
      }
      if (this.routerMounted && this.mainMounted) {
        this.$emit('load')
      }
    },
    changeRouteTitle(title) {
      this.routeTitle = title
    },
    updateNavbar(val) {
      if (val === 'static') {
        this.updateNavbarColor(this.isThemeDark ? '#10163a' : '#fff')
      }
      this.navbarType = val
    },
    updateNavbarColor(val) {
      this.navbarColor = val
      if (val === '#fff') {
        this.isNavbarDark = false
      }
      else {
        this.isNavbarDark = true
      }
    },
    updateFooter(val) {
      this.footerType = val
    },
    updateRouterTransition(val) {
      this.routerTransition = val
    },
    setNavMenuVisibility(layoutType) {
      if ((layoutType === 'horizontal' && this.windowWidth >= 1200) || (layoutType === 'vertical' && this.windowWidth < 1200)) {
        this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', false)
        this.$store.dispatch('updateVerticalNavMenuWidth', 'no-nav-menu')
      }
      else {
        this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true)
      }
    },
    toggleHideScrollToTop(val) {
      this.hideScrollToTop = val
    },
  },
  async created() {
    // this.scripts.forEach((x) => {
    //   this.$loadScript(x)
    // })

    const color = this.navbarColor === '#fff' && this.isThemeDark ? '#10163a' : this.navbarColor
    this.updateNavbarColor(color)
    this.setNavMenuVisibility(this.$store.state.mainLayoutType)

    // Dynamic Watchers for tour
    // Reason: Once tour is disabled it is not required to enable it.
    // So, watcher is required for just disabling it.
    this.dynamicWatchers.windowWidth = this.$watch('$store.state.windowWidth', (val) => {
      if (val < 1200) {
        this.disableThemeTour = true
        this.dynamicWatchers.windowWidth()
      }
    })

    this.dynamicWatchers.verticalNavMenuWidth = this.$watch('$store.state.verticalNavMenuWidth', () => {
      this.disableThemeTour = true
      this.dynamicWatchers.verticalNavMenuWidth()
    })

    this.dynamicWatchers.rtl = this.$watch('$vs.rtl', () => {
      this.disableThemeTour = true
      this.dynamicWatchers.rtl()
    })
  },
  beforeDestroy() {
    // this.scripts.forEach((x) => {
    //   this.$unloadScript(x)
    // })

    this.$emit('destroy')

    Object.keys(this.dynamicWatchers).map(i => {
      this.dynamicWatchers[i]()
      delete this.dynamicWatchers[i]
    })
  },

  mounted() {
    this.$emit('mounted')
  },
}

</script>


<style lang="scss">
body {
  font-family: SUIT;


}

.con-vs-popup {
  z-index: 53000;
}

</style>
