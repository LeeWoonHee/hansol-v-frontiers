<template>
  <main>
    <section id="mentoringPage" v-if="$store.state.auth.user && $store.state.auth.user.user_roles.length > 0">
      <div class="mentoring-wrapper w-100 bg-white pa-color-black d-flex justify-content-center">
        <div class="mentoring-content d-flex flex-column w-100 align-items-center">
          <!-- 멘토링 페이지 카테고리 start -->
          <div class="d-flex w-100 justify-content-center mentoring-categorys align-items-center">
            <div
                @click="tab = 0"
                class="mentoring-category-title w-100 d-flex justify-content-center border-right">
              {{ $store.state.auth.user.user_roles[0].role.name === '멘티' ? '멘토링 신청' : '멘토링 일정 관리' }}
            </div>
            <div
                @click="tab = 1"
                class="mentoring-category-title w-100 d-flex justify-content-center">
              멘토링 신청 내역
            </div>
          </div>
          <!-- 멘토링 페이지 카테고리 end -->
          <!-- 멘티 / 멘토링 신청 클릭 시 -->
          <transition name="tooltip-fade">
            <div v-if="tab === 0" :key="tab"
                 class="mentroing-apply-wrapper justify-content-between align-items-center d-flex">
              <div class="canlendar">
                <v-calendar
                    @update:from-page="(val) => fetchMonth(val)"
                    is-expanded
                    :min-date="new Date()"
                    :attributes="attrs"
                    @dayclick="dayClick"
                    :to-page.sync="calendar"
                ></v-calendar>
              </div>
              <div class="mentoring-info-content d-flex justify-content-center align-items-baseline h-100">
                <transition name="zoom-fade" mode="out-in">
                  <!--멘토링 신청 / 날짜를 선택 start -->
                  <div class="w-100 justify-content-center align-items-center h-100 d-flex"
                       v-if="!selectedDate"
                       :key="selectedDate"
                  >
                    <div class="sm-title font-weight-bold">
                      날짜를 선택해 주세요
                    </div>
                  </div>
                  <!-- 멘티 / 멘토링 신청 / 날짜를 선택를 선택해 주세요 end -->
                  <!-- 멘티 / 멘토링  / 날짜 선택 시  start -->
                  <div class="mentoring-select-wrapper w-100 flex-column justify-content-start d-flex"
                       v-else
                       :key="`${selectedDate.year} - ${selectedDate.month} - ${selectedDate.day}`"
                  >
                    <div class="d-flex justify-content-between border-bottom align-items-center">
                      <div class="sm-title selected-day">
                        {{ `${selectedDate.year} - ${selectedDate.month} - ${selectedDate.day}` }}
                      </div>
                      <div v-if="isMentor">
                        <button class="schedule-btn" @click="edit = true">일정 등록하기</button>
                      </div>
                    </div>
                    <transition name="tooltip-fade" mode="out-in">
                      <div
                          v-if="isMentee || (isMentor && !edit)"
                          :key="isMentee || (isMentor && !edit)"
                          class="reserve-wrapper"
                      >
                        <div
                            class="reserve-item w-100"
                            v-for="counseling in counselings"
                            :key="counseling.id"
                        >
                          <div
                              class="d-flex justify-content-between reserve-item-title align-items-center">
                            <div class="xs-title font-weight-bold w-85">
                              {{ `${counseling.program.project.name}-${counseling.program.name}` }}
                            </div>
                            <div class="xs-title pa-color-primary font-weight-medium">
                              {{ counseling.mentor.name }}
                            </div>
                          </div>
                          <div class="font-weight-bold reserve-time-list-title xs2-title">
                            예약 가능 시간 목록
                          </div>
                          <div class="d-flex flex-column align-items-start reserve-time-wrapper">
                            <div
                                v-for="schedule in counseling.schedules"
                                class="d-flex w-100 justify-content-start align-items-center reserve-time blex-x-between"
                                :key="schedule.id"
                                :class="{end: isMentee && schedule.mentee_id}"
                            >
                              <vs-radio v-if="isMentee" v-model="counseling.selected" :vs-value="schedule.id">
                                <span class="xs2-title">{{
                                    schedule.time
                                  }}({{ schedule.meeting_place || '온라인' }})</span>
                              </vs-radio>
                              <span
                                  v-else
                                  class="xs2-title"
                              >
                                {{ schedule.time }}({{ schedule.meeting_place || '온라인' }})
                              </span>
                              <div
                                  v-if="isMentor"
                                  :class="schedule.mentee_id ? 'pa-color-success' : 'pa-color-warning'">
                                {{
                                  schedule.mentee_id ? schedule.requests && schedule.requests.length > 0 && schedule.requests[0].result === true ? '예약마감' : '예약완료' : '예약대기'
                                }}
                              </div>
                            </div>
                          </div>
                          <div>
                            <div class="xs2-title font-weight-bold reverse-alarm-title">
                              공지사항
                            </div>
                            <div class="xs2-title reverse-alarm">
                              {{ counseling.comment }}
                            </div>
                          </div>
                          <div v-if="isMentee" class="w-100 d-flex justify-content-between">
                            <button
                                @click="showMentor(counseling.mentor)"
                                class="b-outline-btn w-100 d-flex justify-content-center align-items-center">멘토정보
                            </button>
                            <button
                                @click="book(counseling)"
                                class="b-box-btn w-100 d-flex justify-content-center align-items-center">예약하기
                            </button>
                          </div>
                          <div v-else class="w-100 d-flex justify-content-between">
                            <button
                                @click="deleteCounseling(counseling)"
                                class="b-outline-delete-btn w-100 d-flex justify-content-center align-items-center">일정
                              삭제
                            </button>
                            <!-- changed -->
                            <button
                                @click="editCounseling(counseling)"
                                class="b-box-btn w-100 d-flex justify-content-center align-items-center">일정
                              수정
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                          v-else
                          :key="isMentee || (isMentor && !edit)"
                          class="mentor-program-info-wrapper d-flex w-100 flex-column align-items-center"
                      >
                        <div class="w-100 flex-column align-items-center">
                          <div class="w-100 program-info-item">
                            <label for="">프로그램 선택<span
                                class="pa-color-danger xs2-title font-weight-normal">(필수)</span></label>
                            <select-programs v-model="editForms.program"></select-programs>
                          </div>
                          <div class="w-full flex flex-wrap justify-content-center items-center my-2">
                            <div class="font-bold w-5/12">예약 가능 시간<span
                                class="pa-color-danger xs2-title font-weight-normal">(필수)</span>
                            </div>
                            <div class="font-bold w-5/12">장소<span
                                class="pa-color-danger xs2-title font-weight-normal">(필수)</span>
                            </div>
                            <div class="font-bold w-1/12 text-xs">온라인</div>
                          </div>
                          <transition-group name="list-enter-up" tag="div" appear>
                            <div
                                class="w-100 program-info-item d-flex"
                                v-for="(schedule, index) in editForms.schedules"
                                :key="index"
                            >
                              <div class="w-5/12 pr-2">
                                <input type="text" placeholder="예약 가능 시간을 선택해 주세요"
                                       v-model="editForms.schedules[index].time"
                                >
                              </div>
                              <div class="w-5/12">
                                <address-input
                                    :placeholder="editForms.schedules[index].meeting_place === null ? '온라인 진행' : '장소를 선택해 주세요'"
                                    :disabled="editForms.schedules[index].meeting_place === null"
                                    input-class="pa-text-input"
                                    v-model="editForms.schedules[index].meeting_place"
                                ></address-input>
                              </div>
                              <div class="w-2/12 blex">
                                <vs-checkbox
                                    :value="editForms.schedules[index].meeting_place === null"
                                    @input="(val) => editForms.schedules[index].meeting_place = val ? null : ''"
                                ></vs-checkbox>
                              </div>
                            </div>
                          </transition-group>
                          <div class="w-100 d-flex justify-content-end program-info-item">
                            <div @click="deleteSchedules" class="cursor-pointer pa-color-danger xs2-title">삭제-</div>
                            <div @click="addSchedules" class="cursor-pointer xs2-title pa-color-teritary pl-2">예약 가능 시간
                              추가+
                            </div>
                          </div>
                          <div class="w-100 program-info-item">
                            <label for="">공지사항</label>
                            <input type="text" placeholder="멘티들에게 알려줄 사항을 입력해 주세요" v-model="editForms.comment">
                          </div>
                        </div>
                        <div class="d-flex w-100 justify-content-between btn-wrapper">
                          <button class="grey-cancel-btn" @click="edit = false">취소</button>
                          <button class="enroll-btn" @click="registerSchedules">{{
                              editForms.id ? '수정' : '등록'
                            }}하기
                          </button>
                        </div>
                      </div>
                    </transition>
                  </div>
                  <!-- 멘티 / 멘토링  / 날짜 선택 시  end -->
                </transition>
              </div>
            </div>
            <!-- 멘티 / 멘토링 신청 end -->
            <!-- 멘티 / 멘토링 신청 내역  start -->
            <request-history v-else :key="tab"></request-history>
          </transition>
        </div>
      </div>
    </section>
    <vs-popup :active.sync="popup" class="no-title p-0 no-content">
      <div
          v-if="selectedMentor"
          class="mentor-info-wrapper flex-column align-items-start d-flex text-dark">
        <div class="mentor-profile"
             :style="{backgroundImage: `url(${selectedMentor.profile ? selectedMentor.profile.thumbnail : null})`}"></div>
        <div class="base-title mentor-text">
          MENTOR
        </div>
        <div class="mentor-info w-100">
          <div class="sm-title">
            {{ selectedMentor.name }}
          </div>
          <div class="xs-title">
            {{ selectedMentor.profile ? selectedMentor.profile.position : null }}
          </div>
          <div class="base-title">
            {{ selectedMentor.profile ? selectedMentor.profile.history : '' }}
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100">
          <button @click="popup = false" class="cursor-pointer pa-color-white confirm-btn base-title">확인</button>
        </div>
      </div>
    </vs-popup>
  </main>
</template>

<script>
import SelectPrograms from '../../../components/selects/SelectPrograms'
import themeConfig from '@/../themeConfig.js'
import RequestHistory from './History'

export default {
  name: 'List',
  components: {
    SelectPrograms,
    RequestHistory
  },
  data: () => ({
    disableCustomizer: themeConfig.disableCustomizer,
    disableThemeTour: themeConfig.disableThemeTour,
    dynamicWatchers: {},
    hideScrollToTop: themeConfig.hideScrollToTop,
    colors: themeConfig.colors,
    tab: 0,
    steps: [
      {
        target: '#mentoring_calendar',
        content: '달력에서 날짜를 선택해 주세요'
      },
      {
        target: '.vx-navbar__starred-pages',
        content: 'Create your own bookmarks. You can also re-arrange them using drag & drop.'
      },
      {
        target: '.i18n-locale',
        content: 'You can change language from here.'
      },
      {
        target: '.navbar-fuzzy-search',
        content: 'Try fuzzy search to visit pages in flash.'
      },
      {
        target: '.customizer-btn',
        content: 'Customize template based on your preference',
        params: {
          placement: 'left'
        }
      },
      {
        target: '.vs-button.buy-now',
        content: 'Buy this awesomeness at affordable price!',
        params: {
          placement: 'top'
        }
      }
    ],
    attrs: [
      {
        key: '오늘',
        highlight: true,
        dates: new Date()
      },
      {
        key: 'primary',
        dot: {
          style: {
            backgroundColor: 'rgb(var(--vs-primary))'
          }
        },
        dates: []
      },
      {
        key: 'success',
        dot: {
          style: {
            backgroundColor: 'rgb(var(--vs-success))'
          }
        },
        dates: []
      },
      {
        key: 'danger',
        dot: {
          style: {
            backgroundColor: 'rgba(var(--vs-danger))'
          }
        },
        dates: []
      },
      {
        key: 'warning',
        dot: {
          style: {
            backgroundColor: 'rgba(var(--vs-warning))'
          }
        },
        dates: []
      }
    ],
    calendar: {
      year: new Date().getFullYear(),
      month: (new Date()).getMonth() + 1
    },
    selectedDate: null,
    counselings: [],
    counselingGroups: [],
    edit: false,
    editForms: {
      id: null,
      program: null,
      schedules: [
        {
          time: null,
          meeting_place: ''
        }
      ],
      comment: null
    },
    programs: [],
    popup: false,
    selectedMentor: null
  }),
  methods: {
    dayClick ({year, month, day, isDisabled}) {
      if (isDisabled === false) {
        this.selectedDate = {
          year,
          month,
          day
        }
      } else {
        this.selectedDate = null
      }
    },
    addSchedules () {
      this.editForms.schedules.push({
        time: null,
        meeting_place: ''
      })
    },
    deleteSchedules () {
      if (this.editForms.schedules.length > 1) {
        if (this.editForms.schedules[this.editForms.schedules.length - 1].id) {
          this.$http.delete(`/counseling-schedules/${this.editForms.schedules[this.editForms.schedules.length - 1].id}`)
        }
        this.editForms.schedules.splice(this.editForms.schedules.length - 1, 1)
      }
    },
    clearForms () {
      this.editForms = {
        program: null,
        schedules: [
          {
            time: null,
            meeting_place: ''
          }
        ],
        comment: null
      }
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
    registerSchedulesValidate () {
      if (!this.editForms.program) return this.validateNotify('프로그램을 선택해주세요.')
      for (let i = 0; i < this.editForms.schedules.length; i++) {
        if (!this.editForms.schedules[i].time) return this.validateNotify('모든 스케쥴의 시간을 입력해 주세요')
        if (this.editForms.schedules[i].meeting_place === '') return this.validateNotify('모든 스케쥴의 장소를 입력해 주세요')
      }
      return true
    },
    registerSchedules () {
      if (this.registerSchedulesValidate()) {
        const params = {}
        Object.assign(params, this.editForms)
        params['date'] = `${this.selectedDate.year}-${this.selectedDate.month}-${this.selectedDate.day}`
        if (this.editForms.id) {
          this.$http.put('/counseling', params)
              .then((res) => {
                this.$vs.notify({
                  title: '일정 등록',
                  text: '일정이 수정되었습니다',
                  color: 'primary',
                  position: 'top-right'
                })
                this.fetchMonth({
                  year: this.selectedDate.year,
                  month: this.selectedDate.month
                })
                this.edit = false
              })
              .catch(({response}) => {
                this.$vs.notify({
                  title: '일정 수정',
                  text: response.data,
                  color: 'primary',
                  position: 'top-right'
                })

                this.edit = false
              })
        } else {
          this.$http.post('/counseling', params)
              .then((res) => {
                this.$vs.notify({
                  title: '일정 등록',
                  text: '일정이 등록되었습니다',
                  color: 'primary',
                  position: 'top-right'
                })
                this.fetchMonth({
                  year: this.selectedDate.year,
                  month: this.selectedDate.month
                })
                this.edit = false
              })
              .catch(({response}) => {
                this.$vs.notify({
                  title: '일정 등록',
                  text: response.data,
                  color: 'primary',
                  position: 'top-right'
                })

                this.edit = false
              })
        }
      }
    },
    fetch () {
      this.$http.get('/counselings', {
        params: this.selectedDate
      }).then((res) => {
        this.counselings = res.data.map(x => Object.assign({selected: 0}, x))
      })
    },
    fetchMonth (val) {
      this.$http.get('/counselings', {
        params: val
      }).then((res) => {
        if (res.data) {
          this.attrs.forEach(x => {
            if (x.key !== '오늘') {
              x.dates = []
            }
          })
          res.data.forEach(x => {
            const schedulesLength = x.schedules ? x.schedules.length : 0
            const schedulesBookedLength = x.schedules ? x.schedules.filter(y => y.mentee_id).length : 0
            if (schedulesLength === schedulesBookedLength) {
              const index = this.attrs.findIndex(y => y.key === 'danger')
              this.attrs[index].dates.push(new Date(x.date))
            } else if (schedulesBookedLength === 0) {
              const index = this.attrs.findIndex(y => y.key === 'primary')
              this.attrs[index].dates.push(new Date(x.date))
            } else {
              const index = this.attrs.findIndex(y => y.key === 'warning')
              this.attrs[index].dates.push(new Date(x.date))
            }
          })
        }
      })
    },
    book (val) {
      if (val.selected) {
        this.$http.post(`/counseling-schedules/${val.selected}/requests`)
            .then((res) => {
              this.$vs.notify({
                title: '성공',
                text: '예약되었습니다',
                color: 'primary',
                position: 'top-right'
              })
              this.fetch()
            }).catch(({response}) => {
          this.$vs.notify({
            title: '알림',
            text: response.data,
            color: 'warning',
            position: 'top-right'
          })
        })
      } else {
        this.$vs.notify({
          title: '실패',
          text: '예약 시간을 선택해 주세요',
          color: 'warning',
          position: 'top-right'
        })
      }
    },
    deleteCounseling (val) {
      this.$vs.dialog({
        type: 'confirm',
        title: '주의',
        text: '일정을 정말 삭제하시겠습니까?',
        color: 'warning',
        accept: () => {
          this.$http.delete(`/counselings/${val.id}`)
              .then((res) => {
                this.$vs.notify({
                  title: '일정 삭제',
                  text: '일정이 삭제되었습니다',
                  color: 'primary',
                  position: 'top-right'
                })
                this.fetchMonth({
                  year: this.selectedDate.year,
                  month: this.selectedDate.month
                })
                this.edit = false
                this.fetch()
              })
              .catch(({response}) => {
                this.$vs.notify({
                  title: '일정 삭제',
                  text: response.data,
                  color: 'primary',
                  position: 'top-right'
                })

                this.edit = false
              })
        },
        acceptText: '삭제',
        cancelText: '취소'
      })
    },
    editCounseling (val) {
      this.editForms = val
      this.edit = true
    },
    showMentor (val) {
      this.popup = true
      this.selectedMentor = val
    }
  },
  computed: {
    mainLayoutType () {
      return this.$store.state.mainLayoutType
    }
    ,
    verticalNavMenuWidth () {
      return this.$store.state.verticalNavMenuWidth
    }
    ,
    windowWidth () {
      return this.$store.state.windowWidth
    }
    ,
    isMentee () {
      return this.$store.state.auth.user.user_roles[0].role.name === '멘티'
    }
    ,
    isMentor () {
      return this.$store.state.auth.user.user_roles[0].role.name === '멘토'
    }
  }
  ,
  watch: {
    popup (val) {
      if (!val) {
        this.selectedMentor = null
      }
    },
    tab (val) {
      if (val === 0) {
        this.$router.replace({name: 'mentoring', query: {}})
      } else {
        this.$router.replace({name: 'mentoring', query: {type: 'list'}})
      }
    },
    selectedDate: {
      deep: true,
      handler (val) {
        if (val) {
          this.fetch()
        }
        this.editForms = {
          program: null,
          schedules: [
            {
              time: null,
              meeting_place: ''
            }
          ],
          comment: null
        }
        this.edit = false
      }
    },
    edit (val) {
      if (!val) {
        this.editForms = {
          program: null,
          schedules: [
            {
              time: null,
              meeting_place: ''
            }
          ],
          comment: null
        }
      }
    }
  },
  created () {
    if (this.$route.query.type === 'list') {
      this.tab = 1
    }
  }
}
</script>

<style lang="scss">
.con-vs-popup.no-content {
  .vs-popup {
    header {
      display: none !important;
    }

    .vs-popup--content {
      width: 0;
      height: 0;
      padding: 0;
      margin: 0;
    }
  }
}

.vc-container {
  border: none !important;
  font-family: "SUIT", Helvetica, Arial, sans-serif !important;

  &.vc-is-expanded {
    min-height: 100%;
  }

  .vc-arrows-container {
    padding: 30px 25px;

    .vc-arrow {
      svg {
        width: 80px !important;
        height: 40px !important;
      }
    }
  }

  .vc-weekday:nth-child(1) {
    color: #E86240;
  }

  .vc-pane-layout {
    height: 100%;

    .vc-header {
      padding: 40px;

      .vc-title {
        font-size: 28px;
        font-weight: 600;
      }
    }

    .vc-weekday, .vc-day-content {
      font-size: 24px;
      font-weight: 500;
      padding: 20px;
    }

    .vc-weekday {

    }

    .vc-day-content {
      width: 60px;
      height: 60px;
    }
  }
}

@media screen and (max-width: 1200px) {
  .vc-container {

    .vc-arrows-container {
      padding: 10px 7px;

      .vc-arrow {
        svg {
          width: 60px !important;
          height: 30px !important;
        }
      }
    }

    .vc-weekday:nth-child(1) {
      color: #E86240;
    }

    .vc-pane-layout {
      height: 100%;

      .vc-header {
        padding: 15px;

        .vc-title {
          font-size: 20px;
          font-weight: 600;
        }
      }

      .vc-weekday, .vc-day-content {
        font-size: 15px;
        font-weight: 500;
        padding: 10px;
      }

      .vc-weekday {

      }

      .vc-day-content {
        width: 30px;
        height: 30px;
      }
    }
  }
}

/* 멘티 / 멘토링 신청 */
.mentoring-categorys {
  padding-bottom: 40px;
  width: 1150px;
}

.mentoring-category-title {
  font-size: 26px;
  font-weight: 600;
  color: #838383;
  transition: all .2s;

}

.mentoring-category-title:hover {
  cursor: pointer;
  color: #00A0E9;
  transform: translateY(-6%);
  transition: all .2s;
}

.mentoring-wrapper {
  position: relative;
}

.mentoring-content {
  padding: 190px 0;
  max-width: 1280px;
}

.mentroing-apply-wrapper {
  width: 1151px;
  height: 615px;
  box-shadow: 0 40px 120px rgba(0, 0, 0, .16);
  border-radius: 30px;
  padding: 40px;
}

.canlendar {
  width: 575px;
  height: 535px;
  box-shadow: 0 16px 32px rgba(0, 0, 0, .16);
  border-radius: 10px;
}

.mentoring-info-content {
  width: 456px;
  height: 535px;
  overflow-y: scroll;
}

.mentoring-info-content::-webkit-scrollbar {
  width: 4px;
}

.mentoring-info-content::-webkit-scrollbar-thumb {
  height: 17%;
  background-color: rgba(0, 0, 0, .16);
  border-radius: 10px;
}

.mentoring-info-content::-webkit-scrollbar-track {
  background-color: transparent;
}

/* 멘티 / 멘토링 신청 / 날짜 선택 시  */
.mentoring-select-wrapper {
  padding: 0 20px;
}

.selected-day {
  font-weight: 700;
  padding-top: 20px;
}


.schedule-btn { /*changed */
  font-size: 14px;
  background-color: #00A0E9;
  padding: 16px 24px;
  color: #fff;
  border-radius: 5px;
  transition: all .2s;
}

.schedule-btn:hover {
  background-color: #00A0E9;
  box-shadow: 0 16px 32px rgba(0, 0, 0, .16);
  transition: all .2s;
}

.pa-color-warning {
  color: #8340E8;
}

.reserve-item {
  box-shadow: 0 8px 16px rgba(0, 0, 0, .16);
  border-radius: 10px;
  margin: 20px 0;
  transition: all .2s;
}

.reserve-item:hover {
  transform: translateY(-2%);
  transition: all .2s;
  box-shadow: 0 16px 32px rgba(0, 0, 0, .16);
}

.reserve-item-title {
  border-bottom: 1px solid #e4e4e4;
  padding: 8px 12px;
}

.reserve-item input {
  width: 18px;
  height: 18px;
}

.reserve-item label {
  margin: 0;
  padding-left: 8px;
}

.reserve-item .xs2-title {
  font-weight: 500;
}

.end {
  opacity: .3;
}

.reserve-item .end:hover {
  pointer-events: none;
}

.reserve-time-list-title {
  padding: 8px 12px;
}

.reserve-time-wrapper {
  padding: 0 20px;
}

.reserve-time {
  padding-bottom: 8px;
}

.reserve-time:hover {
  transform: translateY(-6%);
  transition: all .2s;
}

.reverse-alarm-title {
  padding: 8px 12px;
}

.reverse-alarm {
  padding: 0 20px 8px;
}

.b-outline-delete-btn { /*changed */
  background: #fff;
  border: 1px solid #E86240;
  color: #E86240;
  padding: 11px 0;
  border-bottom-left-radius: 10px;
}

.b-outline-delete-btn:hover { /*changed */
  color: #E86240;
}

.b-outline-btn:hover {
  color: #00A0E9;
}

.b-box-btn {
  background-color: #0054A7;
  color: #fff;
  padding: 11px 0;
  border-bottom-right-radius: 10px;
}


.b-box-btn:hover {
  background-color: #0054A7;
}

/*멘티 / 날짜 클릭 /  멘토 정보 클릭 시 */
.pa-color-success {
  color: #38AFB7;
}

.pa-color-danger {
}

.mentor-info-wrapper {
  box-shadow: 0 40px 120px rgba(0, 0, 0, 20%);
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 514px;
  height: 808px;
  border-radius: 20px;
}

.mentor-profile {
  background: url(/assets/images/karl.jpeg) center center/cover;
  width: 514px;
  height: 514px;
  object-fit: cover;
  border-radius: 20px;
}

.mentor-info {
  padding: 60px 30px;
}

.mentor-info .sm-title {
  padding-bottom: 4px;
}

.mentor-info .xs-title {
  padding-bottom: 20px;
}

.mentor-text {
  position: absolute;
  color: #fff;
  right: 0;
  top: 476px;
  font-size: 50px;
  font-weight: 800;
  mix-blend-mode: difference;
}

.confirm-btn {
  background-color: #111;
  color: #fff;
  width: 124px;
  height: 45px;
  border-radius: 5px;
  transition: all .2s;
}

.confirm-btn:hover {
  transform: translateY(-6%);
  transition: all .2s;
  background-color: #111;
}

/*멘티 /  멘토링 신청 내역 클릭 시 */
.mentoring-apply-list-title {
  background-color: #F4F4F4;
  padding: 14px 0;
  border-radius: 5px;
  box-shadow: 0 0px 30px rgba(0, 0, 0, .12);
  margin-bottom: 6px;
}

.w-85 {
  width: 85%;
}

.w-7 {
  width: 7%;
}

.w-8 {
  width: 8.593%;
}

.w-20 {
  width: 20.312%;
}

.w-18 {
  width: 18.75%;
}

.w-27 {
  width: 27.343%;
}

.w-11 {
  width: 10.937%;
}

.mentoring-apply-list-items {
  padding-bottom: 30px;
}

.apply-list-item {
  margin: 6px 0;
  padding: 16px 0;
  box-shadow: 0 0px 30px rgba(0, 0, 0, .12);
  border-radius: 5px;
  border-color: rgb(17, 20, 39);
}

.cancel-btn {
  background-color: #E86240;
  padding: 6px 10px;
  color: #fff;
  border-radius: 5px;
  transition: all .2s;
  margin-left: 12px;
}

.cancel-btn:hover {
  background-color: #E86240;
  transform: translateY(-6%);
  transition: all .2s;
}

.mentoring-pagination-btn-wrapper ul {
  margin: 0;
  padding: 0;
}

.mentoring-pagination-btn {
  background-color: #fff;
  width: 38px;
  height: 38px;
  border-radius: 5px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, .16);
  margin: 0 8px;
  transition: all .2s;
}

.mentoring-pagination-btn:hover {
  cursor: pointer;
  transform: translateY(-6%);
  transition: all .2s;
  background-color: #00A0E9;
  color: #fff;
}

.mentoring-pagination-text-btn {
  color: #838383;
  transition: all .2s;
}

.mentoring-pagination-text-btn:hover {
  color: #00A0E9;
  transform: translateY(-6%);
  transition: all .2s;
}


/* 멘토 / 멘토링 / 일정 관리 / 날짜 선택/ 일정 등록 클륵 시 추가 */
label {
  margin: 0;
}

.mentor-program-info-wrapper {
  padding: 12px 0;
}

.program-info-item input {
  appearance: none;
}

.program-info-item {
  padding: 6px 0;
}

.pa-color-teritary {
  color: #0054A7;
}

.online-check {
  padding: 6px 0;
}

.online-check input[type="checkbox"] {
  width: 20px;
  height: 20px;
  border-radius: 3px;
  border-color: #E4E4E4;
  background-color: #fff;
  margin-left: 8px;
}

.program-info-item input[type="text"] {
  background: #fff;
  border-radius: 5px;
  border-color: #E4E4E4;
  height: 46px;
  color: #111;
  padding: 12px;
  font-size: 14px;
}

.program-info-item input::placeholder {
  font-size: 14px;
  font-weight: 400;
  color: #838383;
}

.program-info-item label {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 0;
  line-height: 22px;
  padding-bottom: 8px;
}

.grey-cancel-btn {
  color: #838383;
  background-color: #fff;
  border: 1px solid #e4e4e4;
  padding: 13px 0;
  width: 196px;
  border-radius: 5px;
  transition: all .2s;
}

.grey-cancel-btn:hover {
  box-shadow: 0 16px 32px rgba(0, 0, 0, .16);
  transition: all .2s;
  border: 1px solid #fff;
}

.enroll-btn {
  background-color: #00A0E9;
  width: 196px;
  border-radius: 5px;
  padding: 13px 0;
  color: #fff;
  transition: all .2s;
}

.enroll-btn:hover {
  background-color: #00A0E9;
  box-shadow: 0 16px 32px rgba(0, 0, 0, .16);
  transition: all .2s;
}

.btn-wrapper {
  padding-top: 20px;
}

/* 멘토 / 멘토링 신청 내역  start 추가 */
.success-btn {
  background-color: #38AFB7;
  padding: 6px 10px;
  color: #fff;
  border-radius: 5px;
  transition: all .2s;
}

.success-btn:hover {
  transition: all .2s;
  transform: translateY(-6%);
  background-color: #38AFB7;
}

/* 멘토  /멘토링 신청 내역 / 신청 내역 클릭 시 추가 */
.mentor-apply-modal-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 345px;
  border-radius: 20px;
  box-shadow: 0 16px 32px rgba(0, 0, 0, .16);
}

.apply-modal-name {
  font-size: 24px;
  color: #00A0E9;
  font-weight: 600;
  padding: 20px 0;

}

.apply-modal-info {
  padding: 20px 40px;
}

.apply-modal-info > div {
  padding-bottom: 24px;
}

@media all and (max-width: 1200px) {
  .mentoring-content {
    padding: 90px 0;
    max-width: 328px;

  }

  .mentoring-categorys {
    padding-bottom: 30px;
  }

  .mentoring-category-title {
    font-size: 20px;

  }

  .mentroing-apply-wrapper {
    width: 100%;
    height: 100%;
    box-shadow: none;
    border-radius: unset;
    padding: 0;
    flex-direction: column !important;
  }

  /* 멘티 / 날짜 선택 */
  .canlendar {
    width: 328px;
    height: 286px;
  }

  .mentoring-info-content {
    width: 100% !important;
    padding-top: 25px;
  }

  /* 멘티 / 멘토링 신청 / 날짜 선택 시  */
  .mentoring-select-wrapper {
    padding: 0;
  }

  .selected-day {
    padding-top: 30px;
  }

  .selected-day.sm-title {
    font-size: 18px;
    padding-bottom: 12px;
  }

  .reserve-item-title .xs-title {
    font-size: 14px;
  }

  .reserve-item {
    border-radius: 5px;
  }

  .reserve-time > input {
    width: 15px;
    height: 15px;
  }

  .reserve-time-wrapper .xs2-title {
    font-size: 12px;
  }

  .reverse-alarm-title {
    padding-top: 0;
  }

  .schedule-btn { /*changed */
    padding: 12px 14px;
  }

  .b-outline-btn {
  }

  /*멘티 / 날짜 클릭 /  멘토 정보 클릭 시 */
  .mentor-info-wrapper {
    width: 275px;
    height: 470px;
    padding-bottom: 20px;
  }

  .mentor-profile {
    width: 275px;
    height: 274px;
    border-radius: 10px;
  }

  .mentor-info {
    padding: 30px 20px;
  }

  .mentor-info .base-title {
    font-size: 16px;
  }

  .mentor-text {
    font-size: 30px;
    top: 245px;
  }

  .confirm-btn {
    width: 95px;
    height: 34px;
  }

  .confirm-btn .base-title {
    font-size: 14px;
  }

  /*  멘티 / 멘토링 신청 내역  start */
  .m-mentoring-program-title {
    font-size: 14px;
    font-weight: 700;
  }

  .m-mentoring-program-title.sm-title {
    padding-bottom: 12px;
  }

  .m-mentoring-apply-list-items {
    padding: 12px;
    box-shadow: 0 16px 250px rgba(0, 0, 0, .16);
    border-radius: 5px;
    margin-bottom: 12px;
  }

  .m-apply-list-item .xs-title {
    font-size: 14px;
  }

  .m-apply-list-item .xs2-title {
    font-size: 12px;
  }

  .m-apply-list-item .w-33 {
    width: 33%;
  }

  .cancel-btn {
    padding: 4px 8px;
  }

  .success-btn { /*changed */
    padding: 4px 8px;
  }

  .mentoring-pagination-text-btn {
    font-size: 14px;
  }

  .mentoring-pagination-btn {
    width: 35px;
    height: 35px;
  }

  /* 멘토 / 멘토링 일정 관리 / 날짜 선택 / */

  .program-info-item label {
    font-size: 14px;
  }

  .grey-cancel-btn { /*changed */
    width: 154px;
  }

  .enroll-btn { /*changed */
    width: 154px;
  }
}
</style>
