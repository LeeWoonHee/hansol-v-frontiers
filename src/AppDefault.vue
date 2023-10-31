<template>
  <!-- !!!!!!!!!!!!!!!!!!!!!!!!!주의!!!!!!!!!!!!!!!!!!!! -->
  <!-- !!!!!!!!!!!!!!!!!!!!!!!!!주의!!!!!!!!!!!!!!!!!!!! -->
  <!-- !!!!!!!!!!!!!!!!!!!!!!!!!주의!!!!!!!!!!!!!!!!!!!! -->
  <!--  App.vue 내에 모든 vue component들은 gasp과 scroll.js 동기화를 위하여 최종적인 Mount 확인이 필요합니다. -->
  <!-- 따라서, App.vue 내에 component 추가 시 해당 Component들은 자신의 'mounted' 함수 내에서 this.$emit('mounted')를 호출해야합니다. -->
  <!-- 또한 App.vue 내용 중 해당 Component 등록시 @mounted="routerMounted" 를 추가해야합니다. -->
  <!-- 또, App.vue 의 Data 중 Array load 의 문자열을 추가해야합니다. 문자열의 내용은 작동에 영향을 미치지 않으나, 작업 중 혼선 방지를 위하여 어떤 component를 추가했는지 작성해야합니다. -->
  <!-- 같은 component들을 두번 추가하였더라도 위와같은 방식은 별개로 두번 진행해야합니다. -->
  <!-- 우니쿤의 눈부신 발전과 노고를 치하하기위하여 이 코드를 바칩니다 -->
  <!-- 아리가또네 우니쿤! -->
  <!-- !!!!!!!!!!!!!!!!!!!!!!!!!주의!!!!!!!!!!!!!!!!!!!! -->
  <!-- !!!!!!!!!!!!!!!!!!!!!!!!!주의!!!!!!!!!!!!!!!!!!!! -->
  <!-- !!!!!!!!!!!!!!!!!!!!!!!!!주의!!!!!!!!!!!!!!!!!!!! -->
  <div
      id="app"
      :class="vueAppClasses"
  >
    <!-- Cursor Animation -->
    <div class="cursor1"></div>
    <div class="cursor2"></div>
    <the-nav @mounted="routerMounted"/>
    <nav-panel @mounted="routerMounted"/>

    <div id="smooth-wrapper">
      <div id="smooth-content">
        <router-view
            @setAppClasses="setAppClasses"
            @mounted="routerMounted"
            @destroy="routerUnMounted"
        />
        <the-footer @mounted="routerMounted"/>
      </div>
    </div>
  </div>
</template>

<script>
import themeConfig from '@/../themeConfig.js'
import jwt from '@/http/requests/auth/jwt/index.js'
import TheNav from './components/TheNav'
import NavPanel from './components/NavPanel'
import TheFooter from './components/TheFooter'

export default {
  components: {TheFooter, NavPanel, TheNav},
  data () {
    return {
      vueAppClasses: [],
      load: ['self', 'footer', 'nav', 'nav-panel'],
      loadCount: 0
    }
  },
  watch: {
    '$store.state.theme' (val) {
      this.toggleClassInBody(val)
    },
    '$vs.rtl' (val) {
      document.documentElement.setAttribute('dir', val ? 'rtl' : 'ltr')
    }
  },
  methods: {
    toggleClassInBody (className) {
      if (className === 'dark') {
        if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark')
        document.body.classList.add('theme-dark')
      } else if (className === 'semi-dark') {
        if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark')
        document.body.classList.add('theme-semi-dark')
      } else {
        if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark')
        if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark')
      }
    },
    setAppClasses (classesStr) {
      this.vueAppClasses.push(classesStr)
    },
    handleWindowResize () {
      this.$store.commit('UPDATE_WINDOW_WIDTH', window.innerWidth)

      // Set --vh property
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
    },
    handleScroll () {
      this.$store.commit('UPDATE_WINDOW_SCROLL_Y', window.scrollY)
    },
    async routerMounted () {
      this.loadCount++
      if (this.loadCount === this.load.length) {
        await this.$loadScript('/js/axtra/jquery-3.6.0.min.js')
        await this.$loadScript('/js/axtra/bootstrap.bundle.min.js')
        await this.$loadScript('/js/axtra/swiper-bundle.min.js')
        await this.$loadScript('/js/axtra/counter.js')
        await this.$loadScript('/js/axtra/gsap.min.js')
        await this.$loadScript('/js/axtra/ScrollTrigger.min.js')
        await this.$loadScript('/js/axtra/ScrollToPlugin.min.js')
        await this.$loadScript('/js/axtra/ScrollSmoother.min.js')
        await this.$loadScript('/js/axtra/SplitText.min.js')
        await this.$loadScript('/js/axtra/chroma.min.js')
        await this.$loadScript('/js/axtra/mixitup.min.js')
        await this.$loadScript('/js/axtra/vanilla-tilt.js')
        await this.$loadScript('/js/axtra/jquery.meanmenu.min.js')
        await this.$loadScript('/js/axtra/main.js')
      }
    },
    async routerUnMounted () {
      this.loadCount--
      if (this.loadCount !== this.load.length) {
        await this.$unloadScript('/js/axtra/jquery-3.6.0.min.js')
        await this.$unloadScript('/js/axtra/bootstrap.bundle.min.js')
        await this.$unloadScript('/js/axtra/swiper-bundle.min.js')
        await this.$unloadScript('/js/axtra/counter.js')
        await this.$unloadScript('/js/axtra/gsap.min.js')
        await this.$unloadScript('/js/axtra/ScrollTrigger.min.js')
        await this.$unloadScript('/js/axtra/ScrollToPlugin.min.js')
        await this.$unloadScript('/js/axtra/ScrollSmoother.min.js')
        await this.$unloadScript('/js/axtra/SplitText.min.js')
        await this.$unloadScript('/js/axtra/chroma.min.js')
        await this.$unloadScript('/js/axtra/mixitup.min.js')
        await this.$unloadScript('/js/axtra/vanilla-tilt.js')
        await this.$unloadScript('/js/axtra/jquery.meanmenu.min.js')
        await this.$unloadScript('/js/axtra/main.js')
      }
    }
  },
  mounted () {
    this.toggleClassInBody(themeConfig.theme)
    this.$store.commit('UPDATE_WINDOW_WIDTH', window.innerWidth)

    const vh = window.innerHeight * 0.01
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    if (!this.$cookies.get('referrer')) {
      this.$cookies.set('referrer', document.referrer)
    }

    this.routerMounted()
  },
  async created () {

    // jwt
    jwt.init()

    const dir = this.$vs.rtl ? 'rtl' : 'ltr'
    document.documentElement.setAttribute('dir', dir)

    window.addEventListener('resize', this.handleWindowResize)
    window.addEventListener('scroll', this.handleScroll)

    // Auth0
    try {
      await this.$auth.renewTokens()
    } catch (e) {
      console.error(e)
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.handleWindowResize)
    window.removeEventListener('scroll', this.handleScroll)
  }
}

</script>
<style lang="scss">
#app {
  font-family: "SUIT", sans-serif;
}

</style>
