<template>
  <section
      id="logIn"
      class="pa-login d-flex justify-content-center w-full"
  >

    <div class="w-full py-50" style="background-color: #121212;">

    </div>
    <div class="container g-0 line">
      <span class="line-3"></span>
      <span class="line-3 line-4"></span>
      <div class="pa-login-content align-items-center w-full  blex ">
        <div class=" align-items-center w-full lg:w-2/5 blex-left">
          <div class="blex-left">
            <div class="pa-login-title whitespace-no-wrap blex-left w-full font-bold">
              비밀번호 찾기
            </div>
            <div class="blex-left  w-full pa-login-sub-title">
              가입시 등록한 이메일로 비밀번호를 찾아보세요
            </div>
          </div>
          <div class="pa-login-center w-full blex align-items-center">
            <div class="pa-login-info w-full blex-left">
              <div class="centerx w-full blex-left align-content-center">
                <vs-input
                    label-placeholder="이메일*"
                    v-model="email"
                    type="text"
                    id="memberId"
                    class="w-full vs-input lg:w-9/10"
                />
              </div>
            </div>
            <div>
              <button
                  class="pa-login-btn"
                  type="button"
                  @click="send"
              >비밀번호 재설정 링크 발송
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div class="pa-login-line-bottom"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'passwordFinder',
  data: () => ({
    email: null
  }),
  methods: {
    send () {
      this.$http.post('/link/create', {
        email: this.email
      }).then(() => {
        this.$vs.notify({
          title: '발송',
          text: '이메일이 성공적으로 발송 되었습니다. 이메일을 확인해주세요.',
          color: 'success',
          position: 'top-right'
        })
      }).catch(() => {
        this.$vs.notify({
          title: '발송',
          text: '알 수 없는 이메일입니다.',
          color: 'danger',
          position: 'top-right'
        })
      })
    }
  },
  beforeDestroy () {
    this.$emit('destroy')
  },
  mounted () {
    this.$emit('mounted')
  }
}
</script>

<style
    scoped
    lang="scss"
>
section::v-deep {
  background: #F4F4F4;

  .container {

    padding-top: 150px;
    padding-bottom: 200px;

    .vs-input--placeholder {
      font-weight: 500;
      font-size: 12px !important;
      color: #292929 !important;

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

      &:focus {
        border-bottom: 1px solid #0C6DFF !important;

        .vs-input--placeholder {
          color: #0C6DFF !important;
        }
      }
    }

    .pa-login-content {
      padding: 0 10%;

      .pa-login-title {
        font-size: 3.125vw; //60px;
        line-height: 75px;
        margin-bottom: 12px;
        color: #000000;
      }

      .pa-login-sub-title {
        font-weight: 500;
        font-size: 1.250vw; //24px;
        line-height: 30px;
        margin-bottom: 52px;
        color: #292929;
      }

      .pa-login-info {
        .vs-input {
          width: 70%;
        }

        form {
          border-bottom: 1px solid #898989;
          padding-bottom: 13px;
          max-width: 466px;

          label {
            font-weight: 500;
            font-size: 15px;
            line-height: 19px;
            color: #292929;
          }

          input {
            border: none;
            width: 70%;
            background: #CECECE;
          }
        }
      }

      .pa-login-btn {
        color: #ffffff;
        background: #000000;
        width: 265px;
        height: 55px;
        border-radius: 74px;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        margin-top: 56px;
        cursor: pointer;

        .fa-arrow-right {
          rotate: -45deg;
          margin-left: 2px;
        }
      }
    }

    .line-4 {
      right: 33.3% !important;
      background: #898989;
      opacity: 0.2;
    }

    .line-3 {
      background: #898989;
      opacity: 0.2;
    }

    &:after {
      left: 33.3%;
      background: #898989;
      opacity: 0.2;
      z-index: 0;
    }

    &:before {
      opacity: 0.2;
      background: #898989;
    }
  }

  @media screen and (max-width: 1024px) {
    .pa-login-title {
      font-size: 30px !important; //60px;
    }

    .pa-login-sub-title {
      font-size: 12px !important; //24px;
    }
    .container {
      &:before {
        display: none;
      }

      &:after {
        display: none;
      }

      .line-3 {
        left: 50%;
      }

      .line-4 {
        display: none;
      }
    }
  }
}
</style>
