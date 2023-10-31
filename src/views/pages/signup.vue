<template>
  <section class="contact__area-6">

    <div
        class="w-full py-50"
        style="background-color: #121212;"
    >

    </div>
    <div class="container g-0 line w-full blex">
      <span class="line-3"></span>
      <div class="pa-sign-in-content align-items-center">

        <div class=" w-full  blex">
          <div class="w-full  blex-left lg:w-3/5">
            <div class="pa-sign-in-title w-full blex-left">
              SIGN UP
            </div>
            <div class="pa-sign-in-sub-title w-full blex-left">
              회원가입
            </div>
          </div>
        </div>
        <div class="w-full blex">
          <div class="pa-sign-in-info-left  w-full blex lg:w-3/5">


            <div class="pa-sign-in-info-wrapper blex w-full">

              <div class="vs-input-form blex  form-item lg:w-1/2 w-full lg:pr-10">
                <div class="centerx w-full justify-content-between blex vs-input">
                  <vs-input
                      label-placeholder="성함*"
                      id="memberId"
                      type="text"
                      v-model="name"
                      class="w-full"
                  />
                </div>
              </div>
              <div class="pa-brith-content form-item form-right lg:w-1/2 lg:pl-10">
                <div class="blex justify-content-between w-full align-items-center date-item">
                  <div
                      class="birthday-title w-1/4"
                      for="birth"
                  >생년월일*
                  </div>
                  <vs-input
                      label-placeholder="년도"
                      type="text"
                      v-model="year"
                      class=" pa-text-sm-input w-1/4"
                      autocomplete="off"
                  />

                  <vs-input
                      label-placeholder="월"
                      type="text"
                      v-model="month"
                      class=" pa-text-sm-input w-1/4"
                      autocomplete="off"
                  />
                  <vs-input
                      label-placeholder="일"
                      type="text"
                      v-model="day"
                      class=" pa-text-sm-input w-1/4"
                      autocomplete="off"
                  />

                </div>
              </div>
            </div>
            <div class="pa-sign-in-info-wrapper blex w-full ">
              <div class="vs-input-form  form-item w-full lg:w-1/2 lg:pr-10">
                <div class="centerx w-full vs-input">
                  <vs-input
                      label-placeholder="이메일*"
                      id="email"
                      type="text"
                      v-model="email"
                      autocomplete="off"
                      class="w-full pa-text-input"
                  />
                </div>
              </div>

              <div class="vs-input-form  form-item w-full lg:w-1/2 lg:pl-10">
                <div class="centerx w-full vs-input">
                  <vs-input
                      label-placeholder="휴대폰 번호*"
                      v-model="contact"
                      type="text"
                      autocomplete="off"
                      placeholder=""
                      class="w-full pa-text-input"
                  />
                </div>
              </div>
            </div>

            <div class="pa-sign-in-info-wrapper blex w-full">

              <div class="vs-input-form  form-item w-full lg:w-1/2 lg:pr-10">
                <div class="centerx w-full vs-input">
                  <vs-input
                      label-placeholder="비밀번호*"
                      v-model="password"
                      type="password"
                      id="password"
                      autocomplete="off"
                      placeholder=""
                      class="w-full pa-text-input"
                  />
                </div>
              </div>

              <div class="vs-input-form  form-item w-full lg:w-1/2 lg:pl-10">
                <div class="centerx w-full vs-input">
                  <vs-input
                      label-placeholder="비밀번호 확인*"
                      v-model="password_confirm"
                      type="password"
                      id="passwordComfirm"
                      autocomplete="off"
                      placeholder=""
                      class="w-full pa-text-input"
                  />
                </div>
              </div>
            </div>

            <div class="pa-sign-in-info-wrapper w-full blex-left">

              <div class="lg:w-1/2 form-favorite-item w-full lg:pr-10">
                <div class="blex w-full vs-input justify-content-between">
                  <!--                  <vs-input-->
                  <!--                      label-placeholder="전문 관심 분야 (선택)"-->
                  <!--                      multiple-->
                  <!--                      type="select"-->
                  <!--                      :closeOnSelect="false"-->
                  <!--                      :options="tagOptions"-->
                  <!--                      v-model="tags"-->
                  <!--                      :dir="$vs.rtl ? 'rtl' : 'ltr'"-->
                  <!--                      label="name"-->
                  <!--                      class="tags-input-wrapper stretchable"-->
                  <!--                  >-->
                  <!--               -->
                  <!--                    <div slot="no-options">죄송합니다. 일치하는 항목이 없습니다.</div>-->
                  <!--                  </vs-input>-->
                  <label>전문 관심 분야<span class="required">(필수)</span></label>
                  <v-select
                      class="tags-input-wrapper w-1/2"
                      multiple
                      :closeOnSelect="false"
                      :options="tagOptions"
                      v-model="tags"
                      :dir="$vs.rtl ? 'rtl' : 'ltr'"
                      label="name"
                  >
                    <div slot="no-options">죄송합니다. 일치하는 항목이 없습니다.</div>
                  </v-select>
                </div>
              </div>
            </div>

            <form class="pa-sign-in-info-wrapper blex-left w-full ">

              <div class="allTerms lg:pr-10 blex-left align-items-center w-full lg:w-1/2">
                <div class="allTerms-form w-full d-flex justify-content-between">

                  <label for="allTerms-label">모든 약관 동의</label>
                  <input
                      type="checkbox"
                      id="allTerms"
                      class="pa-check-input"
                      v-model="agree"
                  >
                </div>
              </div>
            </form>

            <form class="pa-sign-in-info-wrapper blex w-full agree-wrapper top-agree-wrapper">

              <div class="terms-item blex lg:pr-10 w-full lg:w-1/2 justify-content-between align-items-center">
                <div class="top-form-border terms-item w-full blex justify-content-between">
                  <label for="emailAgree">이메일 수신 동의<span class="optional">(선택)</span></label>
                  <input
                      type="checkbox"
                      id="emailAgree"
                      autocomplete="off"
                      placeholder="이메일을 입력해 주세요"
                      class="pa-check-input"
                      v-model="email_ad_confirm"
                  >
                </div>
              </div>

              <div class=" terms-item d-flex w-full lg:w-1/2 lg:pl-10 justify-content-between align-items-center">
                <div class="top-form-border terms-item w-full d-flex justify-content-between">
                  <label for="terms">이용약관 동의<span class="required">(필수)</span></label>
                  <div class="d-flex align-items-center justify-content-end terms-item">
                    <!--                    <div-->
                    <!--                        @click="show('이용약관', $store.state.program.project.request_term)"-->
                    <!--                        class="terms-btn w-80 mr-2"-->
                    <!--                    >자세히 보기-->
                    <div
                        @click="show('이용약관', $store.state.program.request_term)"
                        class="terms-btn w-80 mr-2"
                    >자세히 보기

                    </div>
                    <input
                        type="checkbox"
                        id="terms"
                        class="pa-check-input"
                        v-model="terms"
                    >
                  </div>
                </div>
              </div>
            </form>
            <form class="pa-sign-in-info-wrapper blex w-full bottom-agree-wrapper agree-wrapper">

              <div class="terms-item blex lg:pr-10 w-full lg:w-1/2 justify-content-between align-items-center">
                <div class="form-border w-full d-flex justify-content-between">

                  <label for="smsAgree">SMS 수신 동의<span class="optional">(선택)</span></label>
                  <input
                      v-model="sms_ad_confirm"
                      type="checkbox"
                      id="smsAgree"
                      class="pa-check-input"
                  >
                </div>
              </div>
              <div class="terms-item blex lg:w-1/2 w-full lg:pl-10 justify-content-between align-items-center">
                <div class="form-border w-full d-flex justify-content-between">

                  <label for="personalInfo">개인정보 수집 및 이용 동의<span class="required">(필수)</span></label>
                  <div class="d-flex align-items-center justify-content-end terms-item">
                    <div
                        class="terms-btn w-80 mr-2"
                        @click="show('개인정보 수집 및 이용약관', $store.state.program.project.privacy)"
                    >자세히 보기
                    </div>
                    <input
                        type="checkbox"
                        id="persoanlInfo"
                        class="pa-check-input"
                        v-model="privacy"
                    >
                  </div>

                </div>

              </div>
              <vs-popup
                  :active.sync="showing"
                  :title="showingTitle"
                  class="signup-info-popup"
              >
                <div v-html="showingData"></div>
              </vs-popup>
            </form>

          </div>

        </div>


        <div class="w-full blex pa-sign-in-btn-wrapper">
          <div class="w-full lg:w-auto lg:mr-10 blex  justify-content-center align-items-center order-2 lg:order-1">
            <div
                @click="$router.go(-1)"
                class="pa-sign-in-cancel-btn-left blex flex-no-wrap"
            >
              <div class="font-semibold">
                가입취소
              </div>

              <i><img
                  src="@/assets/images/black-arrow.svg"
                  alt="black arrow"
              /></i>
            </div>
          </div>

          <div class="w-full lg:w-auto lg:ml-10 blex justify-content-center align-items-center order-1 lg:order-2">
            <div
                @click="signUp"
                class="pa-sign-in-btn-right blex flex-no-wrap"
            >
              <div class="font-semibold">
                가입하기
              </div>
              <i><img
                  src="@/assets/images/white-arrow.svg"
                  alt="white arrow"
              /></i>
            </div>
          </div>

        </div>
      </div>

    </div>

  </section>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name      : 'signup',
  components: {
    vSelect
  },
  beforeDestroy() {
    this.$emit('destroy')
  },
  mounted() {
    this.$emit('mounted')
  },
  data    : () => ({
    showing         : null,
    showingData     : null,
    showingTitle    : null,
    email           : '',
    email_ad_confirm: false,
    password        : '',
    password_confirm: '',
    name            : '',
    year            : '',
    month           : '',
    day             : '',
    contact         : '',
    sms_ad_confirm  : false,
    tags            : [],
    terms           : false,
    privacy         : false,
    tagOptions      : []
  }),
  computed: {
    birthDay() {
      return `${ this.year }-${ this.month }-${ this.day }`
    },
    agree: {
      get() {
        return this.terms && this.privacy
      },
      set(val) {
        this.terms = val
        this.privacy = val
      }
    }
  },
  methods : {
    validateNotify(text) {
      this.$vs.notify({
                        title   : '알림',
                        text,
                        position: 'top-right',
                        color   : 'warning',
                        iconPack: 'feather',
                        icon    : 'icon-alert-circle'
                      })
      return false
    },
    validate() {
      if (!this.email || this.email < 8 || this.email.indexOf('@') === -1) {
        return this.validateNotify('이메일이 없거나 형식이 잘 못 되었습니다.')
      }
      if (!this.password || this.password.length < 8) {
        return this.validateNotify('비밀번호가 짧습니다. 8자 이상 작성해 주세요')
      }
      if (this.password !== this.password_confirm) {
        return this.validateNotify('비밀번호가 일치하지 않습니다')
      }
      if (!this.contact || this.contact.length < 10 || this.contact.indexOf('-') > -1) {
        return this.validateNotify('연락처는 필수 정보입니다.')
      }
      if (!this.name || this.contact.length < 2) {
        return this.validateNotify('성함은 필수 정보입니다.')
      }
      if (!this.agree) {
        return this.validateNotify('모든 약관에 동의해야 합니다')
      }
      return true
    },
    signUp() {
      if (this.validate()) {
        this.$http.post('/auth/sign-up', {
          email              : this.email,
          password           : this.password,
          password_confirmed : this.password_confirm,
          name               : this.name,
          contact            : this.contact,
          birth_day          : this.birthDay,
          first_referrer_link: this.$cookies.get('referrer') || document.referrer,
          email_ad_confirm   : this.email_ad_confirm,
          sms_ad_confirm     : this.sms_ad_confirm,
          role_id            : 0,
          tags               : this.tags
        }).then(() => {
          this.$vs.notify({
                            title   : '알림',
                            text    : '가입되었습니다',
                            position: 'top-right',
                            color   : 'success',
                            iconPack: 'feather',
                            icon    : 'icon-check'
                          })
          this.$gtag.event('sign_up_gnb', {
            'event_label': 'sign_up'
          })
          this.$analytics.fbq.event('Sign Up')
          this.$router.push('/login')
        }).catch(({ response }) => {
          this.$vs.notify({
                            title   : '잠시만요!',
                            color   : 'warning',
                            iconPack: 'feather',
                            icon    : 'icon-alert-triangle',
                            text    : Object.keys(response.data.errors).map((error) => {
                              return response.data.errors[error].join('<br>')
                            }).join('<br>'),
                            position: 'top-right'
                          })
        })
      }
    },
    show(title, content) {
      this.showing = true
      this.showingTitle = title
      this.showingData = content
    }
  },
  created() {
    if (this.$store.getters['auth/isAuth']) {
      this.$vs.notify({
                        'title'   : '잠시만요',
                        'text'    : '이미 로그인되어 있습니다',
                        'color'   : 'warning',
                        'position': 'top-right'
                      })
      this.$router.push('/')
    }

    this.$http.get('/tags')
        .then((res) => {
          this.tagOptions = res.data
        })
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
    padding-top: 125px;
    padding-bottom: 200px;

    .info-popup {
      .con-vs-popup {
        width: 962px;
        height: 718px;

        .vs-popup {
          padding-right: 61px;
          margin: 0;
          border-radius: 0;
          width: 962px !important;
          height: 718px !important;

          .vs-popup--header {
            background: #ffffff !important;
            padding-top: 43px;
            padding-left: 78px;

            .vs-popup--title {

            }
          }

          .vs-popup--content {
            margin-top: 47px;
            padding-bottom: 67px;
            padding-right: 193px;
            padding-left: 78px;
            width: 100%;
            height: 526px;

            &::-webkit-scrollbar {
              width: 3px;
            }

            &::-webkit-scrollbar-track {
              background: #F4F4F4;
            }

            &::-webkit-scrollbar-thumb {
              background-color: #C8C8C8 !important;
              border: 3px solid #C8C8C8;
            }

            div {
              width: 100%;
              height: 100%;

              p {
                font-size: 14px;
                font-weight: 500;
                color: #838383;
              }
            }
          }

          .vs-popup--title {
            h3 {
              color: #292929;
              font-size: 28px;
              font-weight: 600;
              padding: 0;
            }
          }

          i {
          }
        }

      }

    }

    .terms-item {
      input {
      }
    }

    .line-3 {
      background: #898989;
      opacity: 0.2;
    }

    &:after {
      opacity: 0.2;
      background: #898989;
    }

    &:before {
      opacity: 0.2;
      background: #898989;
    }

    .pa-sign-in-content {
      .pa-sign-in-btn-wrapper {


        .pa-sign-in-cancel-btn-left {
          background: #ffffff;
          border-radius: 74px;

          width: 265px;
          height: 55px;
          cursor: pointer;
          color: #000;


          img {
            width: 12px;
            height: 12px;
            margin-left: 12px;

          }

          .fa-arrow-right {
            rotate: -45deg;
            margin-left: 12px;
            width: 12px;
            height: 12px;
            color: #000 !important;

          }
        }

        .pa-sign-in-btn-right {
          cursor: pointer;
          background: #000000;
          border-radius: 74px;

          width: 265px;
          height: 55px;

          i {
          }

          img {
            width: 12px;
            height: 12px;
            margin-left: 12px;

          }

          .fa-arrow-right {
            rotate: -45deg;
            fill: #ffffff !important;
            width: 12px;
            height: 12px;
            margin-left: 12px;
          }

        }

        .form-right {
          padding-left: 10px;
        }

        .form-left {
          padding-right: 10px;
        }
      }

      .pa-sign-in-title {
        font-weight: 700;
        font-size: 60px;
        line-height: 75px;
        color: #000;
        @media screen and (max-width: 767px) {
          font-size: 32px;
          line-height: 40px;
        }
      }

      .pa-sign-in-sub-title {
        font-weight: 600;
        font-size: 28px;
        line-height: 35px;
        color: #292929;
        margin-bottom: 58px;
        @media screen and (max-width: 767px) {
          font-size: 18px;
          line-height: 23px;
        }
      }

      .pa-sign-in-info-left {
        .top-agree-wrapper {
          padding-bottom: 0 !important;

          .terms-item {
            .top-form-border {
              padding-top: 12px;
              border-top: 1px solid rgba(137, 137, 137, 0.2);
            }
          }
        }

        .agree-wrapper {
          padding-bottom: 10px;
          margin-bottom: 20px;
        }

        .bottom-agree-wrapper {
          margin-bottom: 40px !important;
        }

        .vs-con-input-label {
          width: 100%;

          span {
            font-weight: 600;
            font-size: 15px !important;
          }
        }

        label {
          font-size: 15px;
          font-weight: 600;
          line-height: 19px;
          color: #292929;
        }

        .terms-btn {
          font-size: 14px;
          font-weight: 500;
          line-height: 17px;
          color: #898989;
          cursor: pointer;
        }

        .form-border {
          border-bottom: 1px solid rgba(137, 137, 137, 0.2);
          display: flex;
          justify-content: space-between;
          padding-bottom: 12px;

          align-items: center;
          height: 34px;
        }

        .terms-item {
          display: flex;
          justify-content: space-between;
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
          color: #292929;

          .vs-input--placeholder {
            font-weight: 500;
            font-size: 15px !important;

          }

          &:focus {
            border-bottom: 1px solid #0C6DFF !important;
          }
        }

        .allTerms {
          padding-bottom: 10px;

          .allTerms-form {
            justify-content: space-between;
            display: flex;
          }

          .form-border {
            input {
              background: #F4F4F4;

              &::placeholder {
                color: #F4F4F4 !important;

              }

            }
          }

          label {
            font-weight: 700;
            font-size: 15px;
            line-height: 19px;
            color: #1E1E1E;
          }
        }

        .check-agree-left {
          padding-right: 10px;
        }

        .check-agree-right {
          padding-left: 10px;
        }

        .pa-brith-content {
          .date-item {
            .birthday-title {
              padding-top: 20px;
              color: #000 !important;
              font-size: 15px;
              font-weight: 600;
            }
          }

        }

        .form-favorite-item {
          height: 34px;
          margin-bottom: 50px;


          .vs-input {
            border-bottom: 1px solid #898989;
            justify-content: space-between;
          }

          .tags-input-wrapper {
            border: none;
            width: 100%;
            min-height: 45px;
            background: #F4F4F4;
          }

          .form-border {
            border-bottom: 1px solid #898989;
            display: flex;
            justify-content: space-between;
            padding-bottom: 10px;

            align-items: center;
            height: 34px;

          }

        }

        .form-right {
          padding-left: 10px;
        }

        .form-left {
          padding-right: 10px;
        }

        .form-item {
          display: flex;
          justify-content: space-between;
          padding-bottom: 12px;
          margin-bottom: 50px;
          align-items: center;
          height: 34px;

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
              font-size: 15px !important;
            }

            &:focus {
              border-bottom: 1px solid #0C6DFF !important;
            }
          }

          label {
            font-weight: 500;
            font-size: 15px;
            line-height: 19px;
          }

          input {
            border: none;
            background: #F4F4F4;
          }

          .input-item {

          }
        }
      }

    }

    .vs-input--placeholder {
      font-weight: 500;
      font-size: 15px !important;
      color: #292929 !important;
    }


  }

  @media screen and (max-width: 1023px) {
    .container {
      &:before {
        display: none;
      }

      .line-3 {
        display: none;
      }

      .allTerms {
        margin-bottom: 17px;
      }

      .terms-btn {
        display: none;
      }

      .terms-item {
        margin-bottom: 11px;
      }

      .agree-wrapper {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        padding-bottom: 0 !important;

        .form-border {
          border-bottom: none !important;
        }
      }

      .pa-sign-in-btn-wrapper {
        margin-top: 47px;
      }

      .pa-sign-in-btn-right {
        margin-left: 0;
      }

      .pa-sign-in-cancel-btn-left {
        margin-top: 16px;
        margin-rigtht: 0 !important;
      }
    }
  }
}

</style>
