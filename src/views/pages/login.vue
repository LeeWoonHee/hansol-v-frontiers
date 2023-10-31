<template>
  <section class="contact__area-6">

    <div class="w-full py-50" style="background-color: #121212;">

    </div>
    <div class="container g-0 line blex">
      <span class="line-3"></span>
      <span class="line-3 line-4"></span>


      <div class="blex login w-full">
        <div class="w-full lg:w-3/10 blex-left">
          <div class="pa-login-title font-bold w-full blex-left">
            LOG IN
          </div>
          <div class="pa-login-sub-title font-semibold w-full blex-left">
            로그인
          </div>
        </div>
      </div>


      <div class="pa-login-center blex w-full lg:w-3/10">


        <div class="pa-login-info">
          <div class="w-full blex align-content-center emailForm">
            <div class="centerx w-full vs-input">
              <vs-input
                  label-placeholder="이메일*"
                  id="memberId"
                  type="text"
                  v-model="email"
                  class="w-full"
              />
            </div>
          </div>
          <div class="w-full blex align-content-center passwordForm">
            <div class="centerx w-full vs-input">
              <vs-input
                  label-placeholder="비밀번호*"
                  id="password"
                  type="password"
                  v-model="password"
                  class="w-full"
                  @keypress.enter="login"
              />
            </div>
          </div>
        </div>


        <div class="login-content-bottom">
          <router-link
              to="/sign-up"
              class="pa-grey-btn pa-sign-btn font-semibold"
          >회원가입
          </router-link>
          <router-link
              to="/help"
              class="pa-grey-btn font-semibold password-find-btn"
          >비밀번호 찾기
          </router-link>
        </div>
        <div class="w-full blex mozzi-btn-content">
          <div class="w-full blex mozziBtn">
            <mozzi-btn
                @click="login"
                color="#fff"
                from-color="#000000"
                to-color="#0C6DFF"
                class="blex"
            >
              로그인
            </mozzi-btn>
          </div>
          <div class="w-full blex mozziBtn">
            <mozzi-btn
                @click="loginWithKakao"
                color="#000"
                from-color="#f9e000"
                to-color="#964b00"
                class="kakaoBtn blex"
            >
              <svg
                  width="20"
                  height="16"
                  viewBox="0 0 24 24"
                  style="margin-top: -2px; margin-right: 2px;"
              >
                <path
                    d="M12 0.96c-6.63 0-12 4.33-12 9.68 0.143 3.528 2.236 6.536 5.225 7.986l0.055 0.024s-1.22 3.46-2.81 4.39c2.71-0.396 5.122-1.436 7.15-2.959l-0.040 0.029c0.727 0.127 1.565 0.2 2.419 0.2 0 0 0.001 0 0.001 0h-0c6.63 0 12-4.33 12-9.67s-5.37-9.68-12-9.68z"
                >
                </path>
              </svg>
              <div>
                카카오톡으로 로그인하기
              </div>
            </mozzi-btn>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MozziBtn from '@/views/pages/components/MozziBtn.vue'

export default {
  name      : 'login',
  components: { MozziBtn },
  data      : () => ({
    email   : '',
    password: ''
  }),
  methods   : {
    loginWithKakao() {
      window.Kakao.Auth.login({
                                success: this.afterLogin,
                                fail   : this.test
                              })
    },

    afterLogin(authObj) {
      this.$store.dispatch('auth/socialLogin', authObj.access_token)
          .then(() => {
            this.$vs.notify({
                              title   : '로그인',
                              text    : '환영합니다',
                              color   : 'success',
                              position: 'top-right'
                            })
            this.$gtag.event('kakao_login_click', {
              'event_label': 'login'
            })
            if (this.$route.params.hasOwnProperty('to')) {
              window.location.href = this.$route.params.to
            }
            else {
              window.location.href = '/'
            }
          })
    },
    login() {
      this.$store.dispatch('auth/login', {
        email   : this.email,
        password: this.password
      }).then((res) => {
        this.$vs.notify({
                          title   : '로그인',
                          text    : '환영합니다',
                          color   : 'primary',
                          position: 'top-right'
                        })
        this.$gtag.event('login_click', {
          'event_label': 'login'
        })
        if (this.$route.params.hasOwnProperty('to')) {
          window.location.href = this.$route.params.to
        }
        else {
          window.location.href = '/'
        }
      }).catch(({ response }) => {
        this.$vs.notify({
                          title   : '잠시만요!',
                          color   : 'warning',
                          text    : '아이디 또는 비밀번호가 일치하지 않습니다',
                          position: 'top-right'
                        })
      })
    }
  },
  beforeDestroy() {
    this.$emit('destroy')
  },
  mounted() {
    this.$emit('mounted')
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('fd6cc9c346b6b0dc12a535c5c169b882')
    }

    if (this.$route.query.notification) {
      this.$vs.notify({
                        title   : '잠시만요',
                        color   : 'warning',
                        text    : this.$route.query.notification,
                        position: 'top-right'
                      })

      this.$router.replace({ query: this.$route.query.to ? { to: this.$route.query.to } : {} })
    }
  },
  updated() {
    if (this.$route.query.notification) {
      this.$vs.notify({
                        title   : '잠시만요',
                        color   : 'warning',
                        text    : this.$route.query.notification,
                        position: 'top-right',
                        duration: 5000
                      })
      this.$router.replace({ query: this.$route.query.to ? { to: this.$route.query.to } : {} })
    }
  }

}
</script>

<style
    scoped
    lang="scss"
>
.contact__area-6::v-deep {
  background: #F4F4F4;

  .container {
    //padding: 200px 0;
    padding-top: 15.260vw; //293px;
    padding-bottom: 15.417vw; //296px;
    .vs-input--placeholder {
      font-weight: 500;
      font-size: 12px !important;
      color: #292929 !important;
      padding: 0.7rem !important;
    }

    .vs-con-input {
      input {
        &::selection {
          color: #292929 !important;
        }
      }
    }

    .vs-input--input {
      padding-right: 20px !important;
      padding-left: 20px !important;
      border: none !important;
      background: #F4F4F4;
      border-radius: 0;
      font-size: 14px !important;
      font-weight: 500;
      box-shadow: none;
      border-bottom: 1px solid #898989 !important;
      color: #292929 !important;
    }

    .login {

      width: 100%;
      margin-bottom: 51px;

      .pa-login-title {
        text-align: left;
        font-size: 60px;
        line-height: 75px;
        font-weight:700;
        color: #000;
        @media (max-width: 767px) {
          font-size: 32px;
          line-height: 40px;
        }
      }

      .pa-login-sub-title {
        text-align: left;
        font-size: 28px;
        line-height: 35px;
        color: #292929;
        @media (max-width: 767px) {
          font-size: 18px;
          line-height: 23px;
        }
      }
    }

    .pa-login-center {

      .pa-login-info {
        width: 100%;
        margin-bottom: 23px;

        .centerx {

          input {


            .vs-placeholder-label {


            }

            &:default {

            }
          }

          .vs-input--placeholder {
            font-weight: 500;
            font-size: 12px !important;
            color: #292929 !important;

            &:focus {
              color: #0C6DFF !important;
            }

            span {

            }

          }

          .vs-input--input {
            padding-right: 20px !important;
            padding-left: 20px !important;
            border: none !important;
            background: #F4F4F4;
            border-radius: 0;
            font-size: 14px !important;
            font-weight: 500;
            box-shadow: none;
            border-bottom: 1px solid #898989 !important;

            .vs-input--placeholder {
              font-weight: 500;
              font-size: 12px !important;
            }

            &:focus {
              .vs-input--placeholder {

              }

              span {
                font-size: 12px !important;

              }

              border-bottom: 1px solid #0C6DFF !important;
            }
          }

          input {

          }
        }

        form {
          display: flex;
          justify-content: space-between;
          padding-bottom: 12px;
          border-bottom: 1px solid #898989;

          input {
            border: none;
            width: 70%;
          }
        }

        .emailForm {
          margin-bottom: 42px;
        }

        .passwordForm {
          .vs-con-input-label {
            margin-top: 0;
          }
        }
      }

      .login-content-bottom {
        width: 100%;
        text-align: left;
        margin-bottom: 45px;

        .pa-sign-btn {
          margin-right: 28px;
          color: #0C6DFF;
        }

        .password-find-btn {
          color: #898989;
        }

      }

      .mozzi-btn-content {

        .mozziBtn {
          height: 100%;

          .kakaoBtn {
            margin-top: 15px;
          }

          button {

          }
        }


      }
    }

    .line-4 {
      right: 33.3% !important;
      background: #898989;
      opacity: 0.2;
    }
  }

  .line-3 {
    background: #898989;
    opacity: 0.2;
  }

  .line {
    &:after {
      left: 33.3%;
      background: #898989;
      opacity: 0.2;
    }

    &:before {
      background: #898989;
      opacity: 0.2;
    }
  }

  .hs-btn_wrapper {
    .wc-btn-primary {
      height: 45px;
      width: 250px;

      div {
        font-size: 14px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }
    }
  }
}

@media screen and (max-width: 1700px) {
  .contact__area-6::v-deep {
    .container {
      padding-top: 100px;
      padding-bottom: 100px;
    }
  }

}


@media screen and (max-width: 1024px) {
  .container {
    &:before {
      left: 50%;
      z-index: 1;
    }

    &:after {
      display: none;
    }

    .line-3 {
      display: none;
    }

    .line-4 {
      display: none;
    }
  }
}

@media screen and (max-width: 768px) {
  .contact__area-6::v-deep {


    .container {
      padding-top: 100px;
      padding-bottom: 243px;

      .login {
        padding: 0;
      }

      .pa-login-center {
        padding: 0;
      }


    }
  }
}

</style>

