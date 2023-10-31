<template>
  <section id="logIn" class="pa-login d-flex justify-content-center w-100"
           :style="`background: url(${require('@/assets/images/networkBg.png')}) center center/cover;`">
    <div class="pa-login-wrapper d-flex justify-content-center flex-column align-items-center w-100">
      <div class="pa-login-content d-flex align-items-center flex-column">
        <div class="d-flex justify-content-between align-items-center">
          <div class="pa-login-title">
            비밀번호 재설정
          </div>
          <div class="pa-login-line"></div>
        </div>
        <div class="pa-login-center d-flex flex-column align-items-center">
          <div class="pa-login-info">
            <form class="d-flex flex-column align-content-center">
              <label for="memberId">비밀번호</label>
              <input v-model="password" type="password" id="memberId" placeholder="재설정할 비밀번호를 입력해주세요">
              <label for="password">비밀번호 재설정</label>
              <input v-model="passwordConfirm" type="password" id="password" placeholder="재설정할 비밀번호를 한 번 더 입력해주세요">
            </form>
          </div>
          <div class="pt-4">
            <button class="pa-login-btn" type="button" @click="setPassword">비밀번호 재설정</button>
          </div>
          <div class="pt-4">
            <router-link to="/login">로그인하러 가기</router-link>
          </div>
        </div>
        <div class="pa-login-line-bottom"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'tokenLink',
  created () {
    this.$http.post('/link', {
      key: this.$route.params.key,
      token: this.$route.params.token
    })
        .then(() => {
          this.$vs.notify({
            title: '안내',
            text: '비밀번호를 입력하여 주세요',
            position: 'top-right',
            color: 'success'
          })
        })
        .catch(() => {
          this.$vs.notify({
            title: '실패',
            text: '유효하지 않습니다',
            position: 'top-right',
            color: 'danger'
          })
          this.$router.push('/')
        })
  },
  data: () => ({
    password: '',
    passwordConfirm: ''
  }),
  methods: {
    setPassword () {
      if (this.password !== this.passwordConfirm) {
        this.$vs.notify({
          title: '실패',
          text: '비밀번호가 일치하지 않습니다',
          position: 'top-right',
          color: 'danger'
        })
        return
      }
      this.$http.post('/link/action', {
        password: this.password,
        key: this.$route.params.key,
        token: this.$route.params.token
      })
          .then(() => {
            this.$vs.notify({
              title: '성공',
              text: '비밀번호가 재설정 되었습니다.',
              position: 'top-right',
              color: 'primary'
            })

            this.$router.push('/login')
          })
          .catch(() => {
            this.$vs.notify({
              title: '실패',
              text: '정상적인 링크가 아닙니다',
              position: 'top-right',
              color: 'danger'
            })
          })
    }
  }
}
</script>

<style scoped>

</style>
