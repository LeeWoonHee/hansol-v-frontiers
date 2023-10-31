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
    <the-nav
        @mounted="() => routerMounted('nav')"
        @destroy="routerUnMounted"
        :headers="headers"
    />
    <nav-panel
        email="oi-info@bluepoint.ac"
        :headers="headers"
        @mounted="() => routerMounted('nav-panel')"
        @destroy="routerUnMounted"
    />

    <div id="smooth-wrapper">
      <div id="smooth-content">
        <router-view
            @setAppClasses="setAppClasses"
            @mounted="() => routerMounted('router-view')"
            @destroy="routerUnMounted"
        />
        <the-footer
            @destroy="routerUnMounted"
            @mounted="() => routerMounted('footer')"
        />
      </div>
    </div>
    <div
        class="smooth-floating-button"
        :class="{'on': $store.state.scrollY > -1}"
    >
      <div>
        <vs-button
            v-if="$store.state.scrollY > -1"
            :size="windowWidth < 1200 ? 'small' : 'normal'"
            @click="openForms"
            icon-pack="feather"
            color="white"
            textColor="black"
            class="shadow-lg whiteButton"
        >
          지원하기 <img class="buttonArrow blackArrow" src="@/assets/images/icons/blackArrow.svg" alt="button arrow">
        </vs-button>
      </div>
      <div>
        <vs-button
            v-if="$store.state.scrollY > -1"
            :size="windowWidth < 1200 ? 'small' : 'normal'"
            @click="inquiryPopup = true"
            icon-pack="feather"
            color="white"
            textColor="black"
            class="shadow-lg whiteButton"
        >
          문의하기 <img class="buttonArrow blackArrow" src="@/assets/images/icons/blackArrow.svg" alt="button arrow">
        </vs-button>
      </div>
      <div>
        <vs-button
            v-if="$store.state.scrollY > -1"
            :size="windowWidth < 1200 ? 'small' : 'normal'"
            @click="openMetaverse"
            icon-pack="feather"
            color="black"
            textColor="white"
            class="shadow-lg blackButton">
          메타버스 문의 <img class="buttonArrow whiteArrow" src="@/assets/images/icons/whiteArrow.svg" alt="button arrow">
        </vs-button>
      </div>
    </div>
    <vs-popup
        class="no-title"
        v-if="program"
        :active.sync="requestPopup"
    >
      <div class="pa-sign-in-content d-flex align-items-center flex-column py-0 px-5">
        <div class="flex flex-wrap w-full">
          <div class="text-black font-bold text-xl w-full">
            한솔 V FRONTIERS 지원 신청서
          </div>
          <div class="w-full text-xs text-danger pb-30">
            제출 후에는 파일 수정이 불가능하오니 한 번 더 확인 후 업로드 부탁드립니다.
          </div>
        </div>
        <div class="pa-sign-in-info d-flex justify-content-center">
          <form class="flex flex-wrap justify-start">
            <div class="mb-30 w-full blex flex-no-wrap">
              <vs-input
                  label-placeholder="1. 업체명*"
                  type="text"
                  v-model="forms.company_name"
                  autocomplete="off"
                  class="w-1/2 hs-input mr-10"
              />
              <vs-input
                  label-placeholder="2. 대표자명*"
                  type="text"
                  v-model="forms.company_owner_name"
                  autocomplete="off"
                  class="w-1/2 hs-input"
              />
            </div>
            <div class="mb-30 w-full blex flex-no-wrap">
              <vs-input
                  label-placeholder="3. 대표자명 연락처*"
                  type="text"
                  v-model="forms.contact"
                  autocomplete="off"
                  class="w-full hs-input mr-10"
              />
              <vs-input
                  label-placeholder="4. 대표자 이메일*"
                  type="text"
                  v-model="forms.company_owner_email"
                  autocomplete="off"
                  class="w-full hs-input"
              />
            </div>
            <div class="mb-30 w-full blex-top flex-no-wrap">
              <div class="w-1/2 mr-10">
                <div class="w-full text-black font-semibold text-sm">
                  <div class="text-black text-3xs">5. 회사 주소*</div>
                </div>
                <address-input
                    v-model="forms.address"
                    @update:postcode="(val) => forms.postcode = val"
                    @update:oldAddress="(val) => forms.address_old = val"
                ></address-input>
              </div>
              <div class="mb-12 w-1/2">
                <div class="w-full text-black font-semibold text-sm">
                  <div class="text-black text-3xs">6. 학생 여부*</div>
                </div>
                <div class="w-full blex-between text-black">
                  <span class="text-md font-normal text-4xs">대표자가 대학(원)생인 경우 체크해 주시기 바랍니다.</span>
                  <input v-model="forms.is_student" type="checkbox" class="cursor-pointer">
                </div>
              </div>
            </div>
            <div class="mb-30 w-full blex flex-no-wrap">
              <div class="w-1/2 mr-10 mb-12">
                <div class="w-full text-black font-semibold text-sm">
                  <div class="text-black text-3xs">7. 지원 경로*</div>
                </div>
                <v-select
                    class="tags-input-wrapper hs-select w-full"
                    :closeOnSelect="false"
                    :options="options.inbound_route"
                    v-model="forms.inbound_route"
                    :dir="$vs.rtl ? 'rtl' : 'ltr'"
                    multiple
                    label="name"
                >
                  <div slot="no-options">죄송합니다. 일치하는 항목이 없습니다.</div>
                </v-select>
              </div>
              <div class="mb-12 w-1/2">
                <div class="w-full text-black font-semibold text-sm">
                  <div class="text-black text-3xs">8. 지원 분야*</div>
                </div>
                <v-select
                    class="tags-input-wrapper hs-select w-full"
                    :options="program.types"
                    v-model="forms.type"
                    :dir="$vs.rtl ? 'rtl' : 'ltr'"
                    label="name"
                >
                  <div slot="no-options">죄송합니다. 일치하는 항목이 없습니다.</div>
                </v-select>
              </div>
            </div>
            <div class="mb-30 w-full blex-top flex-no-wrap">
              <div class="w-1/2 mr-10">
                <div class="w-full text-black font-semibold text-sm mb-10">
                  <div class="text-black text-3xs pb-10">9. 사업 계획서*</div>
                </div>
                <input class="w-full" type="file" @change="(e) => this.forms.file = e.target.files[0]">
              </div>
              <div class="mb-12 w-1/2">
                <div class="w-full text-black font-semibold text-sm">
                  <vs-input
                      label-placeholder="10. 피칭 동영상"
                      type="text"
                      v-model="forms.video"
                      autocomplete="off"
                      class="w-full hs-input"
                  />
                  <div class="text-md font-normal text-5xs"> - Google Drive, YouTube, Vimeo 등 공유 가능한 링크를 적어주시면 됩니다</div>
                  <div class="text-md font-normal text-5xs"> - 파일명 : [피칭동영상]회사명_대표자명</div>
                </div>
              </div>
            </div>
            <div class="mb-30 w-full">
              <vs-input
                  label-placeholder="11. 해결하고자 하는 문제*"
                  type="text"
                  v-model="forms.problems"
                  autocomplete="off"
                  class="w-full hs-input"
              />
              <div class="text-black text-5xs font-normal mt-4"> - 한 줄로 적어주세요</div>
            </div>
            <div class="mb-30 w-full">
              <vs-input
                  label-placeholder="12. 해결 방법*"
                  type="text"
                  v-model="forms.solutions"
                  autocomplete="off"
                  class="w-full hs-input"
              />
              <div class="text-black text-5xs font-normal mt-4"> - 한 줄로 적어주세요</div>
            </div>
            <div class="mb-30 w-full">
              <vs-input
                  label-placeholder="13. 시장 현황*"
                  type="text"
                  v-model="forms.market_situation"
                  autocomplete="off"
                  class="w-full hs-input"
              />
              <div class="text-black text-5xs font-normal mt-4"> - 한 줄로 적어주세요</div>
            </div>
            <div class="mb-30 w-full">
              <vs-input
                  label-placeholder="14. 팀 구성*"
                  type="text"
                  v-model="forms.about_team"
                  autocomplete="off"
                  class="w-full hs-input"
              />
              <div class="text-black text-5xs font-normal mt-4"> - 한 줄로 적어주세요</div>
            </div>
            <div class="mb-30 w-full">
              <div class="w-full text-black font-semibold text-sm">
                <div class="text-black text-3xs">15. PoC 희망 한솔 계열사*</div>
              </div>
              <v-select
                  class="tags-input-wrapper hs-select w-full"
                  :options="options.PoC_company"
                  v-model="forms.forms.PoC_company"
                  :dir="$vs.rtl ? 'rtl' : 'ltr'"
                  label="name"
              >
                <div slot="no-options">죄송합니다. 일치하는 항목이 없습니다.</div>
              </v-select>
            </div>
            <div class="mb-30 w-full">
              <vs-input
                  label-placeholder="16. PoC 실시 내용*"
                  type="text"
                  v-model="forms.forms.PoC_todo"
                  autocomplete="off"
                  class="w-full hs-input"
              />
            </div>
            <div class="mb-30 w-full">
              <vs-input
                  label-placeholder="17. PoC 목적/목표*"
                  type="text"
                  v-model="forms.forms.PoC_goal"
                  autocomplete="off"
                  class="w-full hs-input"
              />
            </div>
            <div class="mb-10 w-full">
              <vs-input
                  label-placeholder="18. 희망 운영 방법*"
                  type="text"
                  v-model="forms.forms.PoC_way"
                  autocomplete="off"
                  class="w-full hs-input"
              />
            </div>
            <div class="mb-30 w-full">
              <span class="text-md font-normal">지원 과정 또는 프로그램 진행에 관련된 의견이 있으시면 자유롭게 말씀해주세요</span>
              <vs-textarea
                  label="19. 문의사항"
                  type="text"
                  v-model="forms.forms.comment"
                  autocomplete="off"
                  class="w-full hs-textarea text-black mb-0"
              />
              <div class="w-full text-black text-3xs text-right">
                글자 최대 500자
              </div>
            </div>
            <div class="text-black mb-2 w-full py-2 flex text-3xs flex-wrap justify-between">
              <label for="terms">
                20. 개인정보동의<span class="required">(필수)</span>
              </label>
              <div class="blex">
                <div @click="show('이용약관', $store.state.program.project.term)" class="terms-btn text-3xs cursor-pointer">
                  약관 보기
                </div>
                <input type="checkbox" id="terms" class="ml-12" v-model="agree">
              </div>
            </div>
          </form>
          <div class="w-full blex">
            <button
                class="text-black bg-gray text-base py-14 px-70 rounded-xl mr-20 cursor-pointer border-black border-solid border"
                @click="$store.commit('TOGGLE_REQUEST')"
            >
              취소
            </button>
            <button
                class="text-white bg-black px-60 text-base py-14 rounded-xl cursor-pointer"
                @click="register"
            >
              제출하기
            </button>
          </div>
        </div>
      </div>
    </vs-popup>
    <vs-popup
        class="no-title"
        :active.sync="inquiryPopup">
      <div class="pa-sign-in-content d-flex align-items-center flex-column py-0 px-5">
        <div class="flex flex-wrap w-full">
          <div class="text-black font-bold text-xl w-full">
            문의하기
          </div>
          <div class="w-full text-xs text-danger pb-30">
            제출 후에는 파일 수정이 불가능하오니 한 번 더 확인 후 업로드 부탁드립니다
          </div>
        </div>
        <div class="pa-sign-in-info d-flex justify-content-center">
          <form class="blex">
            <div class="mb-30 w-full blex flex-no-wrap">
              <vs-input
                  label-placeholder="1. 이름*"
                  type="text"
                  v-model="inquiry.name"
                  autocomplete="off"
                  class="w-1/2 hs-input mr-10"
              />
              <vs-input
                  label-placeholder="2. 소속*"
                  type="text"
                  v-model="inquiry.company"
                  autocomplete="off"
                  class="w-1/2 hs-input"
              />
            </div>
            <div class="mb-30 w-full blex flex-no-wrap ">
              <vs-input
                  label-placeholder="3. 연락처*"
                  type="text"
                  v-model="inquiry.contact"
                  autocomplete="off"
                  class="w-1/2 hs-input mr-10"
              />
              <vs-input
                  label-placeholder="4. 이메일*"
                  type="text"
                  v-model="inquiry.email"
                  autocomplete="off"
                  class="w-1/2 hs-input"
              />
            </div>
            <div class="mb-10 w-full">
              <div class="text-black text-3xs">5. 문의 분야*</div>
              <v-select
                  class="w-full tags-input-wrapper hs-select"
                  :options="['지원 문의', '프로그램 문의', '투자 문의', '기타']"
                  v-model="inquiry.title"
                  :dir="$vs.rtl ? 'rtl' : 'ltr'"
                  label="5. 문의 유형*"
              >
                <div slot="no-options">죄송합니다. 일치하는 항목이 없습니다.</div>
              </v-select>
            </div>
            <div class="mb-12 w-full">
              <span class="text-md font-normal">지원 과정 또는 프로그램 진행에 관련된 의견이 있으시면 자유롭게 말씀해주세요</span>
              <vs-textarea
                  label="6. 문의사항*"
                  type="text"
                  v-model="inquiry.content"
                  autocomplete="off"
                  class="w-full hs-textarea text-black mb-0"
              />
              <div class="w-full text-grey text-3xs text-right">
                글자 최대 500자
              </div>
            </div>
            <div class="mb-12 w-full">
              <div class="w-full text-black font-semibold text-3xs">
                7. 개인정보동의<span class="required">(필수)</span>
              </div>
            </div>
            <div class="text-black w-100 pb-20 text-4xs">
              (주)블루포인트파트너스는 「개인정보 보호법」에 따라 동의를 얻어, 본 설문과 관련하여 수집한 정보를 관리함에 있습니다.

              「개인정보 보호법」에서 규정하고 있는 책임과 의무를 준수하고 있으며 제공자가 동의한 내용 외 다른 목적으로는 활용하지 않음을 알려드립니다.

              목적 : 지원 완료 알림, 프로그램 행사 알림, 만족도 설문 링크 전달
              항목 : 성명, 핸드폰번호, 이메일주소 등 신청서에 기재한 내용
              개인 : 정보 보유 및 이용 기간 : 신청자의 수신 거부 요청 시까지
              수집근거 : 「개인정보 보호법」 제 15조 제1항 귀하는 개인정보 제공에 대한 동의를 거부할 권리가 있으며,
              동의를 거부할 경우 거부한 내용 관련 서비스를 받을 수 없습니다.
            </div>
            <div class="mb-2 w-full blex-between flex-no-wrap">
              <span class="text-black">위 내용을 읽으신 후 동의 시 체크 박스를 선택해 주세요</span>
              <div class="flex flex-wrap box-border justify-between items-center">
                <span class="text-grey">동의</span>
                <input v-model="inquiry.agree" type="checkbox" class="pa-check-input">
              </div>
            </div>
          </form>
          <mozzi-btn
              @click="registerInquiry"
              color="#fff"
              from-color="#000000"
              to-color="#0C6DFF"
              class="blex"
          >
            문의하기
          </mozzi-btn>
        </div>
      </div>
    </vs-popup>
    <vs-popup :active.sync="showing" :title="showingTitle">
      <div v-html="showingData"></div>
    </vs-popup>
  </div>
</template>

<script>
import themeConfig from '@/../themeConfig.js'
import jwt from '@/http/requests/auth/jwt/index.js'
import TheNav from './components/TheNav'
import NavPanel from './components/NavPanel'
import TheFooter from './components/TheFooter'
import vSelect from 'vue-select'
import MozziBtn from '@/views/pages/components/MozziBtn.vue'

export default {
  components: {
    TheFooter,
    NavPanel,
    TheNav,
    vSelect,
    MozziBtn
  },
  data() {
    return {
      vueAppClasses: [],
      loadOnce     : false,
      load         : [ 'self', 'footer', 'nav', 'nav-panel', 'router-view' ],
      loadCount    : 0,
      showing      : null,
      showingData  : null,
      showingTitle : null,
      agree        : false,
      forms        : {
        company_name       : null,
        company_owner_name : null,
        contact            : null,
        company_owner_email: null,
        postcode           : null,
        address            : null,
        address_old        : null,
        is_student         : false,
        inbound_route      : null,
        type               : null,
        file               : null,
        video              : null,
        problems           : null,
        solutions          : null,
        market_situation   : null,
        about_team         : null,
        forms              : {
          PoC_company: null,
          PoC_todo   : null,
          PoC_goal   : null,
          PoC_way    : null,
          comment    : null
        }
      },
      options      : {
        PoC_company  : [
          '한솔홀딩스',
          '한솔제지',
          '한솔페이퍼텍',
          '한솔PNS',
          '한솔홈데코',
          '한솔로지스틱스',
          '한솔테크닉스',
          '한솔이엠이',
          '한솔인티큐브'
        ],
        inbound_route: [
          'K-startup',
          'SNS(페이스북,인스타그램)',
          'YOUTUBE',
          '공모전플랫폼',
          '뉴스레터 및 이메일',
          '배너광고',
          '뉴스 기사',
          '블루포인트 홍보채널',
          '지인 추천',
          '카페 등 커뮤니티',
          '홍보 포스터',
          '한솔 홍보채널',
          '기타(직접 작성)'
        ]
      },
      inquiryPopup : false,
      inquiry      : {
        name   : null,
        company: null,
        email  : null,
        contact: null,
        title  : null,
        content: null,
        agree  : false
      }
    }
  },
  watch   : {
    '$store.state.theme'(val) {
      this.toggleClassInBody(val)
    },
    '$vs.rtl'(val) {
      document.documentElement.setAttribute('dir', val ? 'rtl' : 'ltr')
    },
    inquiryPopup(val) {
      if (val) {
        this.$gtag.event('Q&A_click', {
          'event_label': 'Q&A'
        })
      }
    }
  },
  computed: {
    program() {
      return this.$store.state.program
    },
    windowWidth() {
      return this.$store.state.windowWidth
    },
    headers() {
      if (this.$store.getters['auth/isAuth']) {
        const headersArray = [
          {
            label   : 'PROGRAMS',
            link    : '/programs?type=1',
            children: [
              {
                label: '이전 프로그램',
                link : '/programs?type=1'
              },
              {
                label: '진행 중인 프로그램',
                link : '/'
              }
            ]
          }
        ]
        if (this.$store.state.auth.user.user_roles.length > 0) {
          headersArray.push({
                              label   : 'MENTORING',
                              link    : '/mentoring',
                              children: [
                                {
                                  label: '멘토링 일정 관리',
                                  link : '/mentoring'
                                },
                                {
                                  label: '멘토링 신청 내역',
                                  link : '/mentoring?type=list'
                                }
                              ]
                            })
        }
        return [
          ...headersArray,
          {
            label: 'NEWS',
            link : '/news'
          },
          {
            label: '마이페이지',
            link : '/my-page'
          },
          {
            label: '로그아웃',
            func : () => {
              this.$store.dispatch('auth/logout')
            }
          }
        ]
      }
      else {
        return [
          {
            label   : 'PROGRAMS',
            link    : '/programs?type=1',
            children: [
              {
                label: '이전 프로그램',
                link : '/programs?type=1'
              },
              {
                label: '진행 중인 프로그램',
                link : '/'
              }
            ]
          },
          {
            label: 'NEWS',
            link : '/news'
          },
          {
            label: '로그인',
            link : '/login'
          },
          {
            label: '회원가입',
            link : '/sign-up'
          }
        ]
      }
    },
    requestPopup: {
      get() {
        return this.$store.state.request
      },
      set(val) {
        if (val) {
          this.$gtag.event('application_click', {
            'event_label': 'application'
          })
        }
        this.$store.commit('TOGGLE_REQUEST')
      }
    }
  },
  methods : {
    openMetaverse() {
      this.$window.open('https://zep.us/play/8jZaB0', '_blank')
      this.$gtag.event('metaverse_Q&A_click', {
        'event_label': 'Q&A'
      })
    },
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
      if (!this.forms.company_name) {
        return this.validateNotify('업체명은 필수 입력입니다')
      }
      if (!this.forms.company_owner_name) {
        return this.validateNotify('대표자명은 필수 입력입니다')
      }
      if (!this.forms.contact || this.forms.contact.length < 10) {
        return this.validateNotify('연락처는 필수 입력입니다.')
      }
      if (!this.forms.company_owner_email || this.forms.company_owner_email < 8 || this.forms.company_owner_email.indexOf('@') === -1) {
        return this.validateNotify('이메일이 없거나 형식이 잘 못 되었습니다.')
      }
      if (!this.forms.address) {
        return this.validateNotify('주소 정보는 필수 입력입니다.')
      }
      if (!this.forms.inbound_route || this.forms.inbound_route.length === 0) {
        return this.validateNotify('지원 경로를 선택하여 주십시오')
      }
      if (!this.forms.type) {
        return this.validateNotify('지원 분야를 선택하여 주십시오')
      }
      if (!this.forms.file) {
        return this.validateNotify('사업 계획서를 등록해 주십시오')
      }
      if (!this.forms.problems) {
        return this.validateNotify('문제점은 필수 입력입니다.')
      }
      if (!this.forms.solutions) {
        return this.validateNotify('해결 방법은 필수 입력입니다.')
      }
      if (!this.forms.market_situation) {
        return this.validateNotify('시장 현황은 필수 입력입니다.')
      }
      if (!this.forms.about_team) {
        return this.validateNotify('팀 구성은 필수 입력입니다.')
      }
      if (!this.forms.forms.PoC_company) {
        return this.validateNotify('PoC 희망 회사는 필수 입력입니다.')
      }
      if (!this.forms.forms.PoC_todo) {
        return this.validateNotify('PoC 실시 내용은 필수 입력입니다.')
      }
      if (!this.forms.forms.PoC_goal) {
        return this.validateNotify('PoC 목적/목표는 필수 입력입니다.')
      }
      if (!this.forms.forms.PoC_way) {
        return this.validateNotify('PoC 운영 방법은 필수 입력입니다.')
      }
      if (!this.agree) {
        return this.validateNotify('약관에 동의해야 합니다')
      }
      return true
    },
    register() {
      if (!this.$store.getters['auth/isAuth']) {
        this.$vs.notify({
                          title   : '안내',
                          text    : '지원 전 로그인이 필요합니다',
                          color   : 'warning',
                          position: 'top-right'
                        })
        this.$router.push('/login')
      }
      else {
        if (this.validate()) {
          this.$uploader.form('/program-request', this.forms, {
            'file': this.forms.file
          })
              .then((res) => {
                this.$gtag.event('application_complete', {
                  'event_label': 'application'
                })
                this.$analytics.fbq.event('SUBMIT_APPLICATION')
                this.$vs.notify({
                                  title   : '신청',
                                  text    : '신청이 완료되었습니다',
                                  color   : 'primary',
                                  position: 'top-right'
                                })
                this.$store.commit('TOGGLE_REQUEST')
                this.$vs.dialog({
                                  type      : 'confirm',
                                  color     : 'danger',
                                  title     : '신청내역을 확인하시겠습니까?',
                                  text      : '신청내역 확인',
                                  accept    : () => {
                                    this.$router.push('/my-page?tab=1')
                                  },
                                  acceptText: '바로가기',
                                  cancelText: '창 닫기'
                                })
              }).catch(({ response }) => {
            this.$vs.notify({
                              title   : '안내',
                              text    : response.data ? response.data : '문제가 발생하였습니다.',
                              color   : 'warning',
                              position: 'top-right'
                            })
          })
        }
      }
    },
    validateInquiry() {
      if (!this.inquiry.name) {
        return this.validateNotify('업체명은 필수 입력입니다')
      }
      if (!this.inquiry.company) {
        return this.validateNotify('대표자명은 필수 입력입니다')
      }
      if (!this.inquiry.contact || this.inquiry.contact.length < 7) {
        return this.validateNotify('연락처는 필수 입력입니다.')
      }
      if (!this.inquiry.email || this.inquiry.email.length < 8 || this.inquiry.email.indexOf('@') === -1) {
        return this.validateNotify('이메일이 없거나 형식이 잘 못 되었습니다.')
      }
      if (!this.inquiry.content) {
        return this.validateNotify('문의 사항은 필수 입력입니다.')
      }
      if (!this.inquiry.title) {
        return this.validateNotify('문의 유형은 필수 입력입니다.')
      }
      if (!this.inquiry.agree) {
        return this.validateNotify('약관에 동의해야 합니다')
      }
      return true
    },
    registerInquiry() {
      if (this.validateInquiry()) {
        this.$http.post('/inquiries', this.inquiry)
            .then(() => {
              this.$vs.notify({
                                title   : '성공',
                                color   : 'primary',
                                text    : '문의사항에 등록되었습니다. 최대한 빠르게 답변드릴 수 있도록 노력하겠습니다.',
                                position: 'top-right'
                              })

              // this.$ga.event({
              //                  eventCategory: 'inquiry',
              //                  eventAction  : 'register',
              //                  eventLabel   : '문의',
              //                  eventValue   : 0
              //                })

              this.inquiry = {
                name   : null,
                company: null,
                email  : null,
                contact: null,
                title  : null,
                content: null,
                agree  : false
              }
            })
      }
    },
    show(title, content) {
      this.showing = true
      this.showingTitle = title
      this.showingData = content
    },
    openForms() {
      if (this.$store.getters['auth/isAuth'] && this.$store.state.auth.user && !this.$store.state.auth.user.contact) {
        this.$router.push({
                            path : '/my-page',
                            query: { noti: '전화번호 정보는 필수 입력 값 입니다.' }
                          })
      }
      else if (this.$store.getters['auth/isAuth']) {
        this.requestPopup = true
      }
      else {
        this.$vs.notify({
                          title   : '알림',
                          text    : '회원인 경우에만 지원가능합니다.',
                          position: 'top-right',
                          color   : 'warning',
                          iconPack: 'feather',
                          icon    : 'icon-alert-circle'
                        })

        this.$router.push('/login')
      }
    },
    toggleClassInBody(className) {
      if (className === 'dark') {
        if (document.body.className.match('theme-semi-dark')) {
          document.body.classList.remove('theme-semi-dark')
        }
        document.body.classList.add('theme-dark')
      }
      else if (className === 'semi-dark') {
        if (document.body.className.match('theme-dark')) {
          document.body.classList.remove('theme-dark')
        }
        document.body.classList.add('theme-semi-dark')
      }
      else {
        if (document.body.className.match('theme-dark')) {
          document.body.classList.remove('theme-dark')
        }
        if (document.body.className.match('theme-semi-dark')) {
          document.body.classList.remove('theme-semi-dark')
        }
      }
    },
    setAppClasses(classesStr) {
      this.vueAppClasses.push(classesStr)
    },
    handleWindowResize() {
      this.$store.commit('UPDATE_WINDOW_WIDTH', window.innerWidth)

      // Set --vh property
      document.documentElement.style.setProperty('--vh', `${ window.innerHeight * 0.01 }px`)
    },
    handleScroll() {
      this.$store.commit('UPDATE_WINDOW_SCROLL_Y', window.scrollY)
    },
    async routerMounted(label = null) {
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
        if (!this.loadOnce) {
          await this.$loadScript('/js/axtra/jquery.meanmenu.min.js')
          this.loadOnce = true
        }
        await this.$loadScript('/js/axtra/main.js')
        document.getElementById('preloader').style.display = 'none'
      }
    },
    async routerUnMounted() {
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
        await this.$unloadScript('/js/axtra/main.js')
      }
    }
  },
  mounted() {
    this.toggleClassInBody(themeConfig.theme)
    this.$store.commit('UPDATE_WINDOW_WIDTH', window.innerWidth)

    const vh = window.innerHeight * 0.01
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${ vh }px`)
    if (!this.$cookies.get('referrer')) {
      this.$cookies.set('referrer', document.referrer)
    }

    this.routerMounted('self')
  },
  async created() {

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
  destroyed() {
    window.removeEventListener('resize', this.handleWindowResize)
    window.removeEventListener('scroll', this.handleScroll)
  }
}

</script>
<style lang="scss" scoped>
#app::v-deep {
  font-family: "SUIT", sans-serif;

  .blackButton {
    border: 1px solid #898989;
  }

  .whiteButton {
    border: 1px solid #000000;
  }

  .shadow-lg {
    font-family: "SUIT", sans-serif;
    border-radius: 74px;
    width: 178px;
    height: 55px;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    padding: 0;
    margin-top: 12px;
    transition: all .2s;

    &:hover {
      transform: translateY(-10%);
      transition: all .2s;
    }

    @media screen and (max-width: 1024px) {
      width: 124px;
      height: 40px;
      font-size: 14px;
      margin-top: 8px;
    }

    .buttonArrow {
      width: 10px;
      height: 10px;
      margin-left: 14px;
      @media screen and (max-width: 1024px) {
        margin-left: 2px;
      }
    }
  }

}

</style>
