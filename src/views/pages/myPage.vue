<template>
  <section class="contact__area-6">
    <div class="w-full py-50" style="background-color: #121212;">

    </div>
    <div class="container g-0 line w-full">
      <span class="line-3"></span>
      <div class="pa-sign-in-content align-items-center w-full blex">
        <div class=" w-full  blex">
          <div class="w-full  blex-left lg:w-3/5">
            <div class="pa-sign-in-title w-full blex">
              MY PAGE
            </div>

            <div class="mypage-title-wrapper w-full blex">

              <div
                  class="mypage-title pr-30 lg:w-1/3 blex-right font-semibold"
                  :class="tab === 0 ? 'active' : ''"
                  @click="tab = 0"
              >
                <span class="pa-my-page-category-btn">내 정보 수정</span>
              </div>

              <div
                  class="mypage-sub-title pl-30 lg:w-1/3 blex-left  font-semibold"
                  :class="tab === 1 ? 'active' : ''"
                  @click="tab = 1"
              >
                <span class="pa-my-page-category-btn">나의 신청 내역</span>
              </div>

            </div>
          </div>
        </div>
        <!-- myInfoFix -->
        <transition name="tooltip-fade">
          <div
              v-if="tab === 0"
              :key="tab"
              class="w-full blex pt-30"
          >
            <!-- pa-my-info-warpper에 class 'on'이 붙으면 display:flex로 설정했습니다 -->


            <div class="w-full blex">
              <div class="pa-sign-in-info-left  w-full blex lg:w-3/5">
                <div class="pa-sign-in-info-wrapper blex w-full">
                  <div class="vs-input-form blex  form-item lg:w-1/2 w-full lg:pr-10">
                    <div class="centerx w-full justify-content-between blex vs-input">
                      <vs-input
                          label-placeholder="성함*"
                          id="name"
                          type="text"
                          v-model="tabForms.name"
                          autocomplete="off"
                          class="w-full pa-text-input"
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
                          v-model="tabForms.year"
                          class=" pa-text-sm-input w-1/4"
                          autocomplete="off"
                      />

                      <vs-input
                          label-placeholder="월"
                          type="text"
                          v-model="tabForms.month"
                          class=" pa-text-sm-input w-1/4"
                          autocomplete="off"
                      />
                      <vs-input
                          label-placeholder="일"
                          type="text"
                          v-model="tabForms.day"
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
                          v-model="tabForms.email"
                          autocomplete="off"
                          class="w-full pa-text-input"
                      />
                    </div>
                  </div>
                  <div class="vs-input-form  form-item w-full lg:w-1/2 lg:pl-10">
                    <div class="centerx w-full vs-input">
                      <vs-input
                          label-placeholder="휴대폰 번호*"
                          v-model="tabForms.contact"
                          type="text"
                          autocomplete="off"
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
                          v-model="tabForms.password"
                          type="text"
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
                          v-model="tabForms.password_confirm"
                          type="text"
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
                    <div class="w-full vs-input blex">
                      <label>전문 관심 분야<span class="required">(필수)</span></label>
                      <v-select
                          class="tags-input-wrapper w-1/2"
                          multiple
                          :closeOnSelect="false"
                          :options="tagOptions"
                          v-model="tabForms.tags"
                          :dir="$vs.rtl ? 'rtl' : 'ltr'"
                          label="name"
                      >
                        <div slot="no-options">죄송합니다. 일치하는 항목이 없습니다.</div>
                      </v-select>
                    </div>
                  </div>
                </div>
                <form class="pa-sign-in-info-wrapper blex-left w-full agree-wrapper">

                  <div class="terms-item blex-left lg:pr-10 w-full lg:w-1/2 justify-content-between align-items-center">
                    <div class="terms-item w-full blex-left justify-content-between">
                      <label for="emailAgree">이메일 수신 동의<span class="optional">(선택)</span></label>
                      <input
                          type="checkbox"
                          id="emailAgree"
                          autocomplete="off"
                          placeholder="이메일을 입력해 주세요"
                          class="pa-check-input"
                          v-model="tabForms.email_ad_confirm"
                      >
                    </div>
                  </div>
                </form>
                <form class="pa-sign-in-info-wrapper blex-left w-full agree-wrapper">
                  <div class="terms-item blex-left lg:pr-10 w-full lg:w-1/2 justify-content-between align-items-center">
                    <div class="w-full blex-left justify-content-between terms-item">

                      <label for="smsAgree">SMS 수신 동의<span class="optional">(선택)</span></label>
                      <input
                          v-model="tabForms.sms_ad_confirm"
                          type="checkbox"
                          id="smsAgree"
                          class="pa-check-input"
                      >
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="w-full blex pa-sign-in-btn-wrapper">
              <div
                  class="pa-sign-in-cancel-btn-left lg:ml-10 blex  justify-content-center align-items-center order-1 lg:order-2">
                <div
                    @click="modify"
                    class="lg:mr-10 blex  justify-content-center align-items-center"
                >
                  수정하기
                  <i><img
                      src="@/assets/images/black-arrow.svg"
                      alt="black arrow"
                  /></i>
                </div>
              </div>
              <div
                  class="pa-sign-in-btn-right lg:mr-10 blex justify-content-center align-items-center order-2 lg:order-1">
                <div
                    @click="deleteMePopup = true"
                    class="lg:ml-10 blex justify-content-center align-items-center"
                >회원탈퇴
                  <img
                      src="@/assets/images/white-arrow.svg"
                      alt="white arrow"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- /myInfoFix -->
          <!-- applyList -->
          <div
              v-else-if="$store.state.windowWidth > 1024"
              :key="tab"
              class="apply-list-wrapper w-full on pt-30"
          >
            <!-- apply-list-wrapper에 class 'on'이 붙으면 display:flex로 설정했습니다 -->
            <div class="apply-list-content w-full flex flex-wrap items-center">
              <div
                  class="blex apply-list-title-wrapper w-full"
              >
                <div class="w-1/10 text-black blex apply-list-title text-center">
                  접수 번호
                </div>
                <div class="w-1/3 text-black blex align-items-center apply-list-title text-center">
                  프로그램명
                </div>
                <div class="w-1/10 text-black blex apply-list-title text-center">
                  기업명/대표자명
                </div>
                <div class="w-1/10 text-black blex apply-list-title text-center">
                  첨부파일
                </div>
                <div class="w-1/10 text-black blex apply-list-title text-center">
                  피칭 동영상
                </div>
                <div class="w-1/10 text-black blex apply-list-title text-center">
                  접수일자
                </div>
                <div class="w-1/10 text-black blex apply-list-title text-center">
                  처리현황
                </div>
              </div>
              <div
                  v-if="tabList.requests.length > 0"
                  class="text-black blex w-full"
              >
                <div
                    class="text-black blex w-full apply-list-items-wrapper cursor-pointer"
                    style="padding: 10px 0; border-bottom: 1px solid #E4E4E4;"
                    v-for="request in tabList.requests"
                    :key="request.id"
                    @click="showingData(request)"
                >
                  <div class="w-1/10 d-flex justify-content-center align-items-center apply-list-name text-center">
                    {{
                      request.id
                    }}
                  </div>
                  <div class="w-1/3 d-flex justify-content-center align-items-center apply-list-name text-center">
                    {{ `${request.program_type.program.name} ${request.program_type.name}` }}
                  </div>
                  <div class="w-1/10 d-flex justify-content-center align-items-center apply-list-name text-center">
                    {{ request.company_name }}
                  </div>
                  <div class="w-1/10 d-flex justify-content-center align-items-center apply-list-name text-center">
                    <a
                        :href="request.file"
                        download="사업계획서"
                        class="download-box-btn"
                        target="_blank"
                    >
                      <span>다운로드</span>
                    </a>
                  </div>
                  <div class="w-1/10 d-flex justify-content-center align-items-center apply-list-name text-center">
                    <a
                        v-if="request.video"
                        :href="request.video"
                        target="_blank"
                    >
                      보기
                    </a>
                    <span v-else>없음</span>
                  </div>
                  <div class="w-1/10 d-flex justify-content-center align-items-center apply-list-name text-center">
                    {{ request.created_at }}
                  </div>
                  <div
                      class="w-1/10 d-flex justify-content-center align-items-center apply-list-name pa-color-primary text-center"
                  >
                    {{ request.status }}
                    <vs-button
                        v-if="request.status === '접수완료'"
                        @click.native.prevent="dismiss(request)"
                    >접수 취소
                    </vs-button>
                  </div>
                </div>
              </div>
              <div
                  v-else
                  class="pa-color-black text-dark py-18 blex  w-full flex-column "
              >
                신청 내역이 존재하지 않습니다
              </div>
              <div class="pa-my-page-line w-full"></div>
              <vs-pagination
                  class="py-5 w-full blex vs-pagination"
                  v-model="tabList.page"
                  :total="tabList.last_page"
              ></vs-pagination>
            </div>
          </div>
          <div
              v-else-if="tabList.requests.length > 0"
              class="m-apply-list-wrapper "
          >
            <div
                class="m-apply-list-content blex text-black"
                v-for="request in tabList.requests"
                :key="request.id"
                @click="showingData(request)"
            >
              <div class="m-apply-items blex w-full"
                   style="border-top: 1px solid #E4E4E4;"
              >
                <div class="apply-list-main-title font-bold tex-left py-10">
                  {{ `${request.program_type.program.name} ${request.program_type.name}` }}
                </div>

                <div class="w-full blex">
                  <div class="blex-between w-full pb-10">
                    <div class="w-1/3 text-left py-2">
                      <div class="apply-list-title">
                        접수 번호
                      </div>
                      <div class="apply-list-name">
                        {{
                          request.id
                        }}
                      </div>
                    </div>
                    <div class="w-1/3 text-left py-2">
                      <div class="apply-list-title">
                        기업명/대표자명
                      </div>
                      <div class="apply-list-name">
                        {{ request.company_name }}
                      </div>
                    </div>
                    <div class="w-1/3 text-left py-2">
                      <div class="apply-list-title">
                        첨부파일
                      </div>
                      <div class="apply-list-name">
                        <a
                            :href="request.file"
                            download="사업계획서"
                            class="download-box-btn"
                            target="_blank"
                        >
                          <span>다운로드</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="blex-between w-full">
                    <div class="w-1/3 text-left py-2">
                      <div class="apply-list-title">
                        피칭 동영상
                      </div>
                      <div class="apply-list-name">
                        <a
                            v-if="request.video"
                            :href="request.video"
                            target="_blank"
                        >
                          보기
                        </a>
                        <span v-else>없음</span>
                      </div>
                    </div>
                    <div class="w-1/3 text-left py-2">
                      <div class="apply-list-title">
                        접수 일자
                      </div>
                      <div class="apply-list-name">
                        {{ request.created_at }}
                      </div>
                    </div>
                    <div class="w-1/3 text-left py-2">
                      <div class="apply-list-title">
                        처리 현황
                      </div>
                      <div class="apply-list-name">
                        {{ request.status }}
                        <vs-button
                            v-if="request.status === '접수완료'"
                            @click.native.prevent="dismiss(request)"
                        >접수 취소
                        </vs-button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pa-my-page-line w-full"></div>
              <vs-pagination
                  class="py-5"
                  v-model="tabList.page"
                  :total="tabList.last_page"
              ></vs-pagination>
            </div>
          </div>
          <div v-else>

            <div
                class="w-full text-center py-10 text-dark text-lg font-bold mt-10"
            >
              신청 내역이 존재하지 않습니다
            </div>
            <vs-divider></vs-divider>
          </div>
        </transition>
        <!-- /applyList -->
      </div>
    </div>
    <vs-popup
        :active.sync="deleteMePopup"
        title="회원탈퇴"
        class="popup-text"
    >
      <span class="text-xl text-dark font-bold my-2">탈퇴사유를 작성해주시면 감사하겠습니다.</span>
      <textarea
          rows="3"
          class="pa-text-input w-full"
          type="text"
          autocomplete="off"
          v-model="deleteMeWhy"
      >
      </textarea>
      <div class="w-full blex-x-between">
        <div
            @click="deleteMePopup = false"
            class="pa-sign-in-btn d-flex justify-content-center align-items-center"
        >취소
        </div>
        <div
            @click="deleteMe"
            class="pa-sign-in-cancel-btn cursor-pointer d-flex justify-content-center align-items-center"
        >
          회원탈퇴
        </div>
      </div>
    </vs-popup>
    <vs-popup
        :active.sync="show"
        title="신청 내역"
    >
      <div
          v-if="showing"
          class="w-full"
      >
        <div class="pa-sign-in-content d-flex align-items-center flex-column py-0 px-5">
          <div class="flex flex-wrap w-full">
            <div class="text-second font-extrabold text-4xl mr-0 w-full">
              {{ `${showing.program_type.program.project.name}-${showing.program_type.program.name}` }} 신청서 내역
            </div>
            <div class="w-full">
              <span class="px-2 text-warning">제출 번호</span><span class="px-2 text-dark">{{ showing.id }}</span>
            </div>
          </div>
          <div class="pa-sign-in-info flex flex-wrap justify-center items-center">
            <form class="flex flex-wrap justify-start">
              <div class="mb-2 w-full py-2">
                <div class="w-full text-black font-semibold text-lg">
                  1. 업체명
                </div>
                <div class="text-dark">
                  {{ showing.company_name }}
                </div>
              </div>
              <div class="mb-2 w-full py-2">
                <div class="w-full text-black font-semibold text-lg">
                  2. 대표자명
                </div>
                <div class="text-dark">
                  {{ showing.company_owner_name }}
                </div>
              </div>
              <div class="mb-2 w-full py-2">
                <div class="w-full text-black font-semibold text-lg">
                  3. 대표자 연락처
                </div>
                <div class="text-dark">
                  {{ showing.contact }}
                </div>
              </div>
              <div class="mb-2 w-full py-2">
                <div class="w-full text-black font-semibold text-lg">
                  4. 대표자 이메일
                </div>
                <div class="text-dark">
                  {{ showing.company_owner_email }}
                </div>
              </div>
              <div class="mb-2 w-full py-2">
                <div class="w-full text-black font-semibold text-lg">
                  5. 회사 주소
                </div>
                <div class="text-dark">{{ showing.address }}</div>
              </div>
              <div class="mb-2 w-full py-2">
                <div class="w-full text-black font-semibold text-lg">
                  6. 학생 여부
                </div>
                <vs-chip
                    icon-pack="feather"
                    :color="showing.is_student ? 'primary':'warning'"
                    :icon="showing.is_student ? '대' : '일'"
                >
                  {{
                    showing.is_student ? '대(학)학생' : '일반'
                  }}
                </vs-chip>
              </div>
              <div class="mb-2 w-full py-2">
                <div class="w-full text-black font-semibold text-lg">
                  7. 지원 경로<span class="required">(필수)</span>
                </div>
                <div class="shadow-md">
                  <vs-chip v-for="route in showing.inbound_route">
                    <vs-avatar
                        icon-pack="feather"
                        :icon="route[0]"
                    />
                    <span>{{ route }}</span>
                  </vs-chip>
                </div>
              </div>
              <div class="mb-2 w-full py-2">
                <div class="w-full text-black font-semibold text-lg">
                  8. 지원 분야
                </div>
                <div class="text-dark">
                  {{ showing.program_type.name }}
                </div>
              </div>
              <div class="mb-2 w-full py-2">
                <div class="w-full text-black font-semibold text-lg">
                  9. 사업 계획서
                </div>
                <div class="text-primary hover:text-dark">
                  <a
                      :href="showing.file"
                      download
                      target="_blank"
                  >
                    보기
                  </a>
                </div>
              </div>
              <div class="mb-2 w-full py-2">
                <div class="w-full text-black font-semibold text-lg">
                  10. 피칭 동영상
                </div>
                <div
                    v-if="showing.video"
                    class="text-dark"
                >
                  <a
                      :href="showing.video"
                      target="_blank"
                  >보기</a>
                </div>
                <div
                    v-else
                    class="text-dark"
                >
                  없음
                </div>
              </div>
              <div class="mb-2 w-full py-2">
                <div class="w-full text-black font-semibold text-lg">
                  11. 해결하고자 하는 문제
                </div>
                <div class="text-dark">
                  {{ showing.problems }}
                </div>
              </div>
              <div class="mb-2 w-full py-2">
                <div class="w-full text-black font-semibold text-lg">
                  12. 해결 방법
                </div>
                <div class="text-dark">
                  {{ showing.solutions }}
                </div>
              </div>
              <div class="mb-2 w-full py-2">
                <div class="w-full text-black font-semibold text-lg">
                  13. 시장 현황
                </div>
                <div class="text-dark">
                  {{ showing.market_situation }}
                </div>
              </div>
              <div class="mb-2 w-full py-2">
                <div class="w-full text-black font-semibold text-lg">
                  14. 팀 구성
                  <br/>
                </div>
                <div class="text-dark">
                  {{ showing.about_team }}
                </div>
              </div>
              <div class="mb-2 w-full py-2">
                <div class="w-full text-black font-semibold text-lg">
                  15. PoC 희망 한솔 계열사
                </div>
                <div class="text-dark">
                  {{ showing.forms.PoC_company }}
                </div>
              </div>
              <div class="mb-2 w-full py-2">
                <div class="w-full text-black font-semibold text-lg">
                  16. PoC 실시 내용
                </div>
                <div class="text-dark">
                  {{ showing.forms.PoC_todo }}
                </div>
              </div>
              <div class="mb-2 w-full py-2">
                <div class="w-full text-black font-semibold text-lg">
                  17. PoC 목적/목표
                </div>
                <div class="text-dark">
                  {{ showing.forms.PoC_goal }}
                </div>
              </div>
              <div class="mb-2 w-full py-2">
                <div class="w-full text-black font-semibold text-lg">
                  18. 희망 운영 방법
                </div>
                <div class="text-dark">
                  {{ showing.forms.PoC_way }}
                </div>
              </div>
              <div class="mb-2 w-full py-2">
                <div class="w-full text-black font-semibold text-lg">
                  19. 문의 사항
                </div>
                <div class="text-dark">
                  {{ showing.forms.comment }}
                </div>
              </div>
            </form>
          </div>
          <div class="d-flex justify-content-between pa-sign-in-btn-wrapper">
            <div
                @click="show = false"
                class="pa-sign-in-cancel-btn d-flex justify-content-center align-items-center w-full"
            >
              닫기
            </div>
          </div>
        </div>
      </div>
    </vs-popup>
  </section>
</template>

<script>
import vSelect from 'vue-select'
import store from '../../store/store'
import Vue from 'vue'


export default {
  name: 'myPage',
  components: {
    'v-select': vSelect
  },
  data: () => ({
    tab: 0,
    tabForms: {
      email_ad_confirm: false,
      password: '',
      password_confirm: '',
      name: '',
      year: '',//( new Date ).getFullYear(),
      month: '',//( new Date ).getMonth() + 1,
      day: '',//( new Date ).getDay(),
      contact: '',
      sms_ad_confirm: false,
      tags: []
    },
    tabList: {
      requests: [],
      page: 1,
      last_page: 0
    },
    tagOptions: [],
    deleteMePopup: false,
    deleteMeWhy: null,
    params: {
      page: 1,
      last_page: 1
    },
    show: false,
    showing: null
  }),
  watch: {
    'tabList.page' () {

    },
    '$route.query': {
      deep: true,
      handler (val) {
        if (val.noti) {
          this.$vs.notify({
            title: '알림',
            text: '서비스 사용을 위하여 연락처 정보는 필수 정보입니다',
            color: 'danger',
            position: 'top-right'
          })
          this.$router.push({query: null})
        }
      }
    },
    tab (val) {
      if (val === 1) {
        this.fetchRequest()
      }
    }
  },
  computed: {
    birth_day: {
      get () {
        return `${this.tabForms.year}-${this.tabForms.month}-${this.tabForms.day}`
      },
      set (val) {
        if (val) {
          const valArray = val.split('-')
          this.tabForms.year = valArray[0]
          this.tabForms.month = valArray[1]
          this.tabForms.day = valArray[2]
        }
      }
    },
    user () {
      return this.$store.state.auth.user
    }
  },
  methods: {
    showingData (obj) {
      this.showing = obj
      this.show = true
    },
    deleteMe () {

      this.$http.delete(`/users`, {
        params: {
          why: this.deleteMeWhy
        }
      })
          .then(() => {
            this.$vs.notify({
              title: '처리',
              color: 'warning',
              text: '그 동안 이용해주셔서 감사합니다',
              position: 'top-right'
            })

            this.$store.dispatch('auth/logout')

            this.$router.push('/')
          })
    },
    dismiss (obj) {
      this.$http.delete(`program-requests/fail/${obj.id}`)
          .then((res) => {
            obj.status = res.data
            this.$vs.notify({
              title: '완료',
              text: '접수가 취소되었습니다',
              position: 'top-right',
              color: 'primary'
            })
          })
    },
    validateNotify (text) {
      this.$vs.notify({
        title: '알림',
        text,
        position: 'top-right',
        color: 'warning',
        iconPack: 'feather',
        icon: 'icon-alert-circle'
      })
      return false
    },
    validate () {
      if (this.tabForms.password && this.tabForms.password.length < 8) return this.validateNotify('비밀번호가 짧습니다. 8자 이상 작성해 주세요')
      if (this.tabForms.password && this.tabForms.password !== this.tabForms.password_confirm) return this.validateNotify('비밀번호가 일치하지 않습니다')
      if (!this.tabForms.contact || this.tabForms.contact.length < 10) return this.validateNotify('연락처는 필수 정보입니다.')
      if (!this.tabForms.name || this.tabForms.name.length < 2) return this.validateNotify('성함은 필수 정보입니다.')
      if (this.tabForms.tags.length === 0) return this.validateNotify('관심분야는 필수 정보입니다')
      return true
    },
    modify () {
      if (this.validate()) {
        const params = {
          name: this.tabForms.name,
          contact: this.tabForms.contact,
          birth_day: this.birth_day,
          email_ad_confirm: this.tabForms.email_ad_confirm,
          sms_ad_confirm: this.tabForms.sms_ad_confirm,
          tags: this.tabForms.tags
        }

        if (this.tabForms.password) {
          params['password'] = this.tabForms.password
          params['password_confirmed'] = this.tabForms.password_confirm
        }
        this.$http.put('/auth/user', params).then((res) => {
          this.$vs.notify({
            title: '알림',
            text: '수정되었습니다',
            position: 'top-right',
            color: 'success',
            iconPack: 'feather',
            icon: 'icon-check'
          })

          this.$store.commit('auth/SET_USERS', {
            user: res.data
          })
        }).catch(({response}) => {
          this.$vs.notify({
            title: '잠시만요!',
            color: 'warning',
            iconPack: 'feather',
            icon: 'icon-alert-triangle',
            text: Object.keys(response.data.errors).map((error) => {
              return response.data.errors[error].join('<br>')
            }).join('<br>'),
            position: 'top-right'
          })
        })
      }
    },
    test () {
      this.$vs.notify({
        title: '알림',
        text: '이메일은 변경이 불가능합니다',
        color: 'warning',
        iconPack: 'feather',
        icon: 'icon-alert-triangle',
        position: 'top-right'
      })
    },
    fetchRequest () {
      this.$http.get('/program-requests', {
        params: {
          page: this.tabList.page
        }
      })
          .then((res) => {
            this.tabList.requests = res.data.data
            this.tabList.last_page = res.data.last_page
          })
    }
  },
  beforeDestroy () {
    this.$emit('destroy')
  },
  mounted () {
    this.$emit('mounted')
    if (this.$route.query.noti) {
      this.$vs.notify({
        title: '알림',
        text: '서비스 사용을 위하여 연락처 정보는 필수 정보입니다',
        color: 'danger',
        position: 'top-right'
      })
      this.$router.push({query: null})
    } else {
      for (const key in this.$store.state.auth.user) {
        if (key === 'birth_day') {
          this.birth_day = this.$store.state.auth.user[key]
        } else {
          this.tabForms[key] = this.$store.state.auth.user[key]
        }
      }
    }
  },
  created () {
    if (this.$route.query.tab !== undefined) {
      this.tab = Number(this.$route.query.tab)
    }
    this.$http.get('/tags')
        .then((res) => {
          this.tagOptions = res.data
        })
    store.dispatch('auth/getAuthByToken', localStorage.getItem('accessToken') || Vue.$cookies.get('accessToken'))
        .then(() => {
          for (const key in this.$store.state.auth.user) {
            if (key === 'birth_day') {
              this.birth_day = this.$store.state.auth.user[key]
            } else {
              this.tabForms[key] = this.$store.state.auth.user[key]
            }
          }
          this.fetchRequest()
        })
  }
}
</script>

<style
    scoped
    lang="scss"
>
textarea {
  color: #000000 !important;
}
.contact__area-6::v-deep {
  background: #F4F4F4;
  .pa-my-page-line{
    background:#e4e4e4;
    height:1px;
  }

  .vs-pagination{
    .vs-pagination--mb{
      width:100% !important;
      display:flex;
      justify-content: center !important;
      align-items: center;
      text-align: center;
    }
  }
  .popup-text {
    textarea {
      &::placeholder {
        color: #000000 !important;
      }
    }
  }

  .mypage-title {
    span {
      &:hover {
        &::after {
          display: none !important;
        }
      }
    }
  }

  .mypage-sub-title {
    span {
      &:hover {
        &::after {
          display: none !important;
        }
      }
    }
  }

  .pa-sign-in-cancel-btn-left {
    background: #ffffff;
    border-radius: 74px;

    width: 265px;
    height: 55px;
    cursor: pointer;
    color: #000;

    i {

      margin-left: 12px;
    }

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
    color: #ffffff;
    width: 265px;
    height: 55px;

    i {
      margin-left: 12px;
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

  .container {
    padding-top: 266px;
    padding-bottom: 378px;

    .agree-wrapper {
      align-items: center;
      //input{
      //  width:16px;
      //  height:16px;
      //  border-color:#898989 !important;
      //  background:#CECECE !important;
      //  &:checked{
      //    label{
      //      background-color:#000 !important;
      //    }
      //
      //  }
      //}


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

    .mypage-title-wrapper {


    }

    .mypage-title {
      position: relative;
      margin-top: 26px;
      font-size: 28px;
      color: #898989;
      margin-bottom: 40px;
      cursor: pointer;

      &:after {
        content: '';
        width: 2px;
        height: 26px;
        background: #898989;
        position: absolute;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        top: 20%;
        right: 0;
      }

      &.active {
        color: #000;
      }
    }

    .mypage-sub-title {
      margin-top: 26px;
      font-size: 28px;
      color: #898989;
      margin-bottom: 40px;
      cursor: pointer;

      &.active {
        color: #000;
      }
    }

    .pa-sign-in-content {
      padding: 0;


      .form-right {
        padding-left: 10px;
      }

      .form-left {
        padding-right: 10px;
      }

      .pa-sign-in-title {
        font-weight: 700;
        font-size: 60px;
        line-height: 75px;
        color: #000;
        margin-bottom: 26px;
      }

      .pa-sign-in-sub-title {
        font-weight: 600;
        font-size: 28px;
        line-height: 35px;
        color: #292929;
        margin-bottom: 58px;
      }

      .pa-sign-in-info-left {
        .agree-wrapper {
          margin-top: 10px;
          padding-bottom: 10px;

          &:last-child {
            margin-bottom: 61px;
          }
        }

        .vs-con-input-label {
          width: 100%;

          span {
            font-weight: 500;
            font-size: 12px !important;
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
        }

        .form-border {
          border-bottom: 1px solid #898989;
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


          //&:focus {
          //  border-bottom: 1px solid #0C6DFF !important;
          //}
        }

        .allTerms {
          padding-bottom: 10px;
          margin-bottom: 23px;

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
              color: #000 !important;
            }
          }

        }

        .form-favorite-item {
          height: 34px;
          margin-bottom: 63px;

          .vs-input {
            justify-content: space-between;
            border-bottom: 1px solid #898989;
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
            padding-bottom: 12px;

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
          margin-bottom: 59px;
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
              font-size: 12px !important;
            }

            //&:focus {
            //  border-bottom: 1px solid #0C6DFF !important;
            //}
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

    .vs-con-input-label {
      .vs-con-input {
        .vs-input--input {
          .vs-input--placeholder {
            &:focus {
              color: #0C6DFF !important;
            }
          }

          &:focus {

            border-bottom: 1px solid #0C6DFF !important;

          }
        }
      }
    }

    .vs-input--placeholder {
      font-weight: 500;
      font-size: 12px !important;
      color: #292929 !important;
    }

    .vs-input--placeholder {
      &:focus {
        color: #0C6DFF !important;
      }
    }

    @media screen and (max-width: 1023px) {
      padding-top: 50px;
      padding-bottom: 50px;
    }
  }

  @media screen and (max-width: 1023px) {
    .pa-sign-in-btn-right {
      margin-right: 5px;
    }
    .pa-sign-in-cancel-btn-left {
      margin-left: 5px;
    }
  }

  @media screen and (max-width: 768px) {

    .container {
      padding-top: 100px;

      &:after {
        left: 50%;
        transform: translateX(-50%);
      }

      .mypage-title {
        font-size: 16px;

        &:after {
          background: #C8C8C8;
          top: 0;
        }
      }

      .mypage-sub-title {
        font-size: 16px;
      }

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

      .pa-sign-in-cancel-btn-left {
      }
    }
  }
  @media screen and (max-width: 574px) {
    .pa-sign-in-cancel-btn-left {
      margin-top: 16px;
      margin-left: 0;
    }
    .pa-sign-in-btn-right {
      margin-right: 0;
    }
  }

  .apply-list-wrapper {
    .apply-list-title-wrapper {
      border-bottom: 1px solid #C8C8C8;
      padding-bottom: 12px;
    }
  }

  .download-box-btn {
    border: 1px solid #0c6dff;
    color: #0c6dff;
    padding: 4px 8px;
    transition: all 0.2s linear;

    &:hover {
      transform: translate(-5px, -5px);
      box-shadow: 2px 2px 5px rgba(12, 109, 255, 0.2);
    }
  }

  .apply-list-title {
    font-weight: 700;
  }
}

</style>
