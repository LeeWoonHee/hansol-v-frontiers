<template>
  <!-- Header area start -->
  <header class="header__area-3">
    <div class="header__inner-3">
      <div class="header__logo-2">
        <a href="index.html" class="logo-dark"><img src="~@/assets/imgs/logo/logo-black.png" alt="Site Logo"></a>
        <a href="index.html" class="logo-light"><img src="~@/assets/imgs/logo/site-logo-white-2.png"
                                                     alt="Site Logo"></a>
      </div>
      <div class="header__nav-2">
        <ul class="main-menu-3 menu-anim">
          <li
              v-for="(header, index) in headers"
              :key="index"
              :class="header.groups ? 'has-megamenu' : null"
          >
            <router-link :to="header.link">{{ header.label }}</router-link>
            <ul v-if="header.children" class="main-dropdown">
              <li v-for="child in header.children">
                <router-link :to="child.link">{{ child.label }}</router-link>
              </li>
            </ul>
            <ul
                v-else-if="header.groups"
                :class="header.fullSize ? 'mega-menu' : 'mega-menu-2'"
            >
              <li v-for="child in header.children">
                <router-link :to="child.link">{{ child.label }}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="header__nav-icon-3">
        <button id="open_offcanvas"><img src="~@/assets/imgs/icon/menu-black.png" alt="Menubar Icon"></button>
      </div>
    </div>
  </header>
  <!-- Header area end -->
</template>

<script>
export default {
  name: 'TheNav',
  props: {
    headers: {
      type: Array,
      default: () => []
    }
  },
  async mounted () {
    await document.body.insertBefore(this.$el, document.body.firstChild)
    // await document.body.appendChild(this.$el)
    this.$emit('mounted')
  }
}
</script>

<style scoped lang="scss">
header::v-deep {
  .header__nav-icon-3 {
    display: none;
    // 768
    // 1024
    // 1280
    // 1920
    @media screen and (max-width: 1280px) {
      display: block;
    }
  }
}
</style>
