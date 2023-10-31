<template>
  <main></main>
</template>

<script>
export default {
  name: 'kakao',
  created () {
    alert()
    this.$http.post('auth/login/kakao', {
      code: this.$route.query.code
    })
  }
}
</script>

<style scoped>

</style>
