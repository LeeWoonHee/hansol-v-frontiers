<template>
  <!-- Header area start -->
  <header class="header__area-3">
    <div class="header__inner-3">
      <div class="header__logo-2">
        <router-link
            to="/"
            class="logo-dark"
        ><img
            src="~@/assets/imgs/logo/logo-black.png"
            alt="Site Logo"
        >
        </router-link>
        <router-link
            to="/"
            class="logo-light"
        ><img
            src="~@/assets/imgs/logo/site-logo-white-2.png"
            alt="Site Logo"
        ></router-link>
      </div>
      <div class="header__nav-2">
        <ul class="main-menu-3 menu-anim">
          <li
              v-for="(header, index) in headers"
              :key="header.label"
              :class="header.groups ? 'has-megamenu' : null"
          >
            <router-link
                v-if="header.link"
                class="link mx-10 px-5"
                active-class="active"
                :to="header.link"
                @click.native="nav_label = header.label"
            >{{
                header.label
              }}
            </router-link>
            <div
                v-else
                @click="header.func"
                class="mx-10 px-5 cursor-pointer"
            >{{
                header.label
              }}
            </div>
            <ul
                v-if="header.children"
                class="main-dropdown"
            >
              <li v-for="child in header.children">
                <router-link
                    class="link"
                    :to="child.link"
                >{{ child.label }}
                </router-link>
              </li>
            </ul>
            <ul
                v-else-if="header.groups"
                :class="header.fullSize ? 'mega-menu' : 'mega-menu-2'"
            >
              <li v-for="group in header.groups">
                <router-link
                    class="link"
                    active-class="active"
                    :to="group.link"
                >{{ group.label }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="header__nav-icon-3">
        <button id="open_offcanvas"><img
            src="~@/assets/imgs/icon/menu-black.png"
            alt="Menubar Icon"
        ></button>
      </div>
    </div>
  </header>
  <!-- Header area end -->
</template>

<script>
export default {
  name : 'TheNav',
  props: {
    headers: {
      type   : Array,
      default: () => []
    }
  },
  data : () => ({
    nav_label: null
  }),
  watch: {
    nav_label() {
      if (this.nav_label === '회원가입') {
        this.$gtag.event('sign_up_gnb', {
          'event_label': 'menu'
        })
      }
      else if (this.nav_label === 'PROGRAMS') {
        this.$gtag.event('programs_gnb', {
          'event_label': 'menu'
        })
      }
      else if (this.nav_label === 'NEWS') {
        this.$gtag.event('news_gnb', {
          'event_label': 'menu'
        })
      }
      else if (this.nav_label === '마이페이지') {
        this.$gtag.event('my_page_gnb', {
          'event_label': 'menu'
        })
      }
      else if (this.nav_label === '로그인') {
        this.$gtag.event('login_gnb', {
          'event_label': 'menu'
        })
      }
    }
  },
  async mounted() {
    await document.body.insertBefore(this.$el, document.body.firstChild)
    this.$emit('mounted')
  },
  beforeDestroy() {
    document.body.removeChild(this.$el)
    this.$emit('destroy')
  }
}
</script>

<style
    scoped
    lang="scss"
>
header::v-deep {
  .header__logo-2 {
    a {
      img {
        max-width: 133px;
      }
    }
  }

  .main-menu-3 {
    li {
      padding: 0 !important;
    }
  }


  .header__inner-3 {
    display: flex !important;
    flex-wrap: wrap !important;
    align-items: center !important;
    justify-content: space-between;
  }

  .header__nav-2 {
    display: block !important;
    @media screen and (max-width: 1024px) {
      display: none !important;
    }
  }

  .header__nav-icon-3 {
    display: none !important;
    // 768
    // 1024
    // 1280
    // 1920
    @media screen and (max-width: 1024px) {
      display: block !important;
    }
  }

  .link {
    &.active {
      font-weight: 900;
    }
  }
}
</style>
