<!-- =========================================================================================
  File Name: FullPage.vue
  Description: Full page layout
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="layout--full-page">
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'full-page',
  beforeDestroy() {
    this.$emit( 'destroy' )
  },
  mounted() {
    this.$emit( 'mounted' )
  },
}
</script>