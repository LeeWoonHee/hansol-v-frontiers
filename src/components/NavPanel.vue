<template>
  <div class="offcanvas__area">
    <div class="offcanvas__body">
      <div class="offcanvas__left">
        <div class="offcanvas__logo">
          <router-link to="/"><img src="~@/assets/imgs/logo/site-logo-white-2.png" alt="Offcanvas Logo"></router-link>
        </div>
        <div class="offcanvas__social">
          <h3 class="social-title">Follow Us</h3>
          <ul>
            <li
                v-for="(value, key) in snses"
                :key="key"
            >
              <a :href="value" target="_blank">{{ key }}</a>
            </li>
          </ul>
        </div>
        <div class="offcanvas__links">
          <ul>
            <li
                v-for="(value, key) in sites"
            >
              <a :href="value">{{ key }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="offcanvas__mid">
        <div v-if="$store.getters['auth/isAuth']" @click="logout" style="font-size: 16px;" class="blex">
          <mdicon name="logout" style="top: -1px;"></mdicon>
          로그아웃
        </div>
        <div class="offcanvas__menu-wrapper">
          <nav class="offcanvas__menu">
            <ul class="menu-anim">
              <li
                  v-for="(header, index) in headers"
                  :key="header.label"
              >
                <router-link v-if="header.link" :to="header.link">
                  {{ header.label }}
                </router-link>
                <ul v-if="header.children">
                  <li
                      v-for="(child, index) in header.children"
                      :key="child.label"
                  >
                    <router-link :to="child.link">
                      {{ child.label }}
                    </router-link>
                  </li>
                  <li
                      v-for="(group, index) in header.groups"
                      :key="index"
                  >
                    <router-link :to="group.link">
                      {{ group.label }}
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="offcanvas__right">
        <div class="offcanvas__search">
        </div>
        <div class="offcanvas__contact">
          <h3>Get in touch</h3>
          <ul>
            <li><a :href="`tel:${contact}`" v-if="contact">{{ contact }}</a></li>
            <li><a :href="`mailto:${email}`" v-if="email">{{ email }}</a></li>
            <li v-if="address">{{ address }}</li>
          </ul>
        </div>
        <img src="~@/assets/imgs/shape/11.png" alt="shape" class="shape-1">
        <img src="~@/assets/imgs/shape/12.png" alt="shape" class="shape-2">
      </div>
      <div class="offcanvas__close">
        <button type="button" id="close_offcanvas">
          <mdicon name="closeThick"></mdicon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavPanel',
  props: {
    address: {
      type: String,
      default: null
    },
    contact: {
      type: String,
      default: null
    },
    email: {
      type: String,
      default: null
    },
    headers: {
      type: Array,
      default: () => []
    },
    sites: {
      type: Object,
      default: () => ({})
    },
    snses: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('auth/logout').finally(() => {
        window.location.href = '/'
      })
    }
  },
  async mounted () {
    await document.body.insertBefore(this.$el, document.body.firstChild)
    // await document.body.appendChild(this.$el)
    this.$nextTick(() => {
      this.$emit('mounted')
    })
  },
  beforeDestroy () {
    document.body.removeChild(this.$el)
    this.$emit('destroy')
    // await document.body.insertBefore(this.$el, document.body.firstChild)
  }
}
</script>

<style scoped lang="scss">
div.offcanvas__area::v-deep {
  z-index: 10000;

  .mean-nav ul li {
    position: relative;
    float: left;
    width: 100%;

    a {

      &.mean-expand {
        padding: 11px 12px 13px 12px;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 2;
        box-sizing: content-box;
        background: rgba(255, 255, 255, .1);
      }
    }
  }

  .function-menu {
    padding: 20px 20px 100px 15px;
    border-top: 1px solid #0a0a0a;
    transform: translateY(var(--y)) translateZ(0);
    -webkit-transition: -webkit-transform .4s ease, -webkit-box-shadow .4s ease;
    font-size: 20px;
    width: 100%;
    text-align: center;
    font-weight: 400;
    line-height: 1;
    color: var(--white);
    text-transform: capitalize;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    outline: none;
  }
}
</style>
