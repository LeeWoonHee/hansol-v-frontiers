<template>
  <main class="w-full blex" style="background-color: #fff;">
    <div class="w-full py-50" style="background-color: #121212;">

    </div>
    <section
        id="mentoringPage"
        class="w-full"
        v-if="$store.state.auth.user && $store.state.auth.user.user_roles.length > 0"
    >
      <div
          class="mentoring-wrapper w-full bg-light-success text-black flex justify-center px-0 md:px-20">
        <div class="mentoring-content flex flex-col w-full items-center">
          <!-- 멘토링 페이지 카테고리 start -->
          <div class="flex justify-center mentoring-categories items-center">
            <div
                @click="tab = 0"
                class="mentoring-category-title w-full flex justify-center py-4"
                style="background-color: #fff;"
                :class="{'clicked' : tab ===0}"
            >

              {{ isMentee ? '멘토링 신청' : '멘토링 일정 관리' }}
            </div>
            <div
                @click="tab = 1"
                class="mentoring-category-title w-full flex justify-center py-4"
                style="background-color: #fff;"
                :class="{'clicked' : tab ===1}"
            >
              멘토링 신청 내역
            </div>
          </div>
          <!-- 멘토링 페이지 카테고리 end -->
          <!-- 멘티 / 멘토링 신청 클릭 시 -->
          <transition name="tooltip-fade">
            <div v-if="tab === 0" :key="tab"
                 class="mentoring-apply-wrapper justify-between items-center flex"
                 style="border: 1px solid #316BEB;"
            >
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
              <div class="mentoring-info-content flex justify-center items-baseline h-full pl-2 pr-1 lg:px-0">
                <transition name="zoom-fade" mode="out-in">
                  <!--멘토링 신청 / 날짜를 선택 start -->
                  <div class="w-full justify-center items-center h-full flex p-10"
                       v-if="!selectedDate"
                       :key="selectedDate"
                  >
                    <div class="text-base lg:text-h3 font-bold text-black py-20 lg:py-0">
                      날짜를 선택해 주세요
                    </div>
                  </div>
                  <!-- 멘티 / 멘토링 신청 / 날짜를 선택를 선택해 주세요 end -->
                  <!-- 멘티 / 멘토링  / 날짜 선택 시  start -->
                  <div class="mentoring-select-wrapper w-full flex-col justify-start flex p-10"
                       v-else
                       :key="`${selectedDate.year} - ${selectedDate.month} - ${selectedDate.day}`"
                  >
                    <div
                        class="flex justify-between items-end border-b-2 border-0 border-solid border-lighten-gray pb-4">
                      <div class="selected-day text-lg lg:text-h3 text-black">
                        {{ `${selectedDate.year} - ${selectedDate.month} - ${selectedDate.day}` }}
                      </div>
                      <div v-if="isMentor">
                        <button class="schedule-btn text-xs cursor-pointer" @click="edit = true">일정 등록하기</button>
                      </div>
                    </div>
                    <transition name="tooltip-fade" mode="out-in">
                      <div
                          v-if="isMentee || (isMentor && !edit)"
                          :key="isMentee || (isMentor && !edit)"
                          class="reserve-wrapper"
                      >
                        <div
                            class="reserve-item w-full"
                            v-for="counseling in counselings"
                            :key="counseling.id"
                        >
                          <div
                              class="flex justify-between reserve-item-title items-center">
                            <div class="text-xs lg:text-lg font-bold w-85 text-black program-title">
                              {{ `${counseling.program.project.name}-${counseling.program.name}` }}
                            </div>
                            <div class="text-xs lg:text-lg font-normal text-main">
                              {{ counseling.mentor.name }}
                            </div>
                          </div>
                          <div class="font-bold reserve-time-list-title text-xs text-black">
                            예약 가능 시간 목록
                          </div>
                          <div class="flex flex-col items-start reserve-time-wrapper">
                            <div
                                v-for="schedule in counseling.schedules"
                                class="flex w-full justify-start items-center reserve-time justify-between"
                                :key="schedule.id"
                                :class="{end: isMentee && schedule.mentee_id}"
                            >
                              <vs-radio v-if="isMentee" v-model="counseling.selected" :vs-value="schedule.id"
                                        color="#316BEB"
                              >
                                <span class="text-xs font-normal">{{
                                    schedule.time
                                  }}({{ schedule.meeting_place || '온라인' }})</span>
                              </vs-radio>
                              <span
                                  v-else
                                  class="text-xs font-normal"
                              >
                                {{ schedule.time }}({{ schedule.meeting_place || '온라인' }})
                              </span>
                              <div class="whitespace-no-wrap"
                                   v-if="isMentor"
                                   :class="schedule.mentee_id ? 'text-success' : 'text-warning'">
                                {{
                                  schedule.mentee_id ? schedule.requests && schedule.requests.length > 0 && schedule.requests[0].result === true ? '예약마감' : '예약완료' : '예약대기'
                                }}
                              </div>
                            </div>
                          </div>
                          <div>
                            <div class="text-xs text-black font-bold reverse-alarm-title">
                              공지사항
                            </div>
                            <div class="text-xs reverse-alarm">
                              {{ counseling.comment }}
                            </div>
                          </div>
                          <div v-if="isMentee" class="w-full flex justify-between">
                            <button
                                @click="showMentor(counseling.mentor)"
                                class="b-outline-btn w-full flex justify-center items-center cursor-pointer">멘토정보
                            </button>
                            <button
                                @click="bookMemoToggle(counseling)"
                                class="b-box-btn w-full flex justify-center items-center cursor-pointer">예약하기
                            </button>
                          </div>
                          <div v-else class="w-full flex justify-between">
                            <button
                                @click="deleteCounseling(counseling)"
                                class="b-outline-delete-btn w-full flex justify-center items-center cursor-pointer">일정
                              삭제
                            </button>
                            <!-- changed -->
                            <button
                                @click="editCounseling(counseling)"
                                class="b-box-btn w-full flex justify-center items-center cursor-pointer">일정
                              수정
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                          v-else
                          :key="isMentee || (isMentor && !edit)"
                          class="mentor-program-info-wrapper flex w-full flex-col items-center"
                      >
                        <div class="w-full flex-col items-center">
                          <div class="w-full program-info-item">
                            <label class="text-black" for="">프로그램 선택<span
                                class="text-danger text-xs font-normal">(필수)</span></label>
                            <select-programs class="mt-2" v-model="editForms.program"></select-programs>
                          </div>
                          <div class="w-full flex flex-wrap justify-center items-center my-2">
                            <div class="font-bold w-3/5 text-black">예약 가능 시간<span
                                class="text-danger text-xs font-normal font-normal">(필수)</span>
                            </div>
                            <div class="font-bold w-3/10 text-black">장소<span
                                class="text-danger text-xs font-normal font-normal">(필수)</span>
                            </div>
                            <div class="font-bold w-1/10 text-black text-center">온라인</div>
                          </div>
                          <transition-group name="list-enter-up" tag="div" appear>
                            <div
                                class="w-full program-info-item flex"
                                v-for="(schedule, index) in editForms.schedules"
                                :key="index"
                            >
                              <div class="w-3/5 pr-2">
                                <!--                                <input class="w-full" type="text" placeholder="09 : 00"-->
                                <!--                                       v-model="editForms.schedules[index].time"-->
                                <!--                                >-->
                                <div>
                                  <flat-pickr class="w-1/2" :config="{noCalendar: true, enableTime: true}"
                                              :value="editForms.schedules[index].start_time"
                                              v-model="editForms.schedules[index].start_time"
                                              @input="(val) => editForms.schedules[index].time = val + '-' + editForms.schedules[index].end_time"
                                              placeholder="시작 시간"/>
                                  <flat-pickr class="w-1/2" :config="{noCalendar: true, enableTime: true}"
                                              :value="editForms.schedules[index].end_time"
                                              v-model="editForms.schedules[index].end_time"
                                              @input="(val) => editForms.schedules[index].time = editForms.schedules[index].start_time + '-' + val"
                                              placeholder="종료 시간"/>
                                </div>
                              </div>
                              <div class="w-3/10">
                                <address-input
                                    :placeholder="editForms.schedules[index].meeting_place === null ? '온라인 진행' : '장소를 선택해 주세요'"
                                    :disabled="editForms.schedules[index].meeting_place === null"
                                    input-class="pa-text-input"
                                    v-model="editForms.schedules[index].meeting_place"
                                ></address-input>
                              </div>
                              <div class="w-1/10 blex">
                                <vs-checkbox
                                    color="#316BEB"
                                    :value="editForms.schedules[index].meeting_place === null"
                                    @input="(val) => editForms.schedules[index].meeting_place = (val ? null : '')"
                                ></vs-checkbox>
                              </div>
                            </div>
                          </transition-group>
                          <div class="w-full flex justify-end program-info-item">
                            <div @click="deleteSchedules" class="cursor-pointer text-danger">삭제-</div>
                            <div @click="addSchedules" class="cursor-pointer text-main pl-2">예약 가능 시간
                              추가+
                            </div>
                          </div>
                          <div class="w-full program-info-item blex justify-start">
                            <label class="w-full" for="">공지사항</label>
                            <input class="w-full" type="text" placeholder="멘티들에게 알려줄 사항을 입력해 주세요"
                                   v-model="editForms.comment">
                          </div>
                        </div>
                        <div class="flex w-full justify-between btn-wrapper">
                          <button class="grey-cancel-btn text-base cursor-pointer" @click="edit = false">취소</button>
                          <button class="enroll-btn text-base cursor-pointer" @click="registerSchedules">{{
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
          class="mentor-info-wrapper flex-col align-start flex text-black">
        <div class="mentor-profile"
             :style="{backgroundImage: `url(${selectedMentor.profile ? selectedMentor.profile.thumbnail : null})`}"></div>
        <div class="mentor-text">
          MENTOR
        </div>
        <div class="mentor-info w-full">
          <div class="text-base lg:text-2xl font-normal">
            {{ selectedMentor.name }}
          </div>
          <div class="text-xs lg:text-base font-normal">
            {{ selectedMentor.profile ? selectedMentor.profile.position : null }}
          </div>
          <div class="text-base lg:text-xl font-normal">
            {{ selectedMentor.profile ? selectedMentor.profile.history : '' }}
          </div>
        </div>
        <div class="flex justify-center items-center w-full pt-10">
          <button @click="popup = false" class="cursor-pointer text-white confirm-btn text-xs lg:text-xl">확인</button>
        </div>
      </div>
    </vs-popup>
    <vs-prompt
        @cancel="memo = null"
        :active.sync="bookPrompt"
        @close="bookPrompt = false"
        @accept="book"
        accept-text="예약"
        cancel-text="취소"
        title="전달사항 입력"
    >
      <div class="w-full">
        <span>전달사항이 필요할 경우 작성하여 주세요</span>
        <vs-input class="w-full" v-model="memo"></vs-input>
      </div>
    </vs-prompt>
  </main>
</template>

<script>
import SelectPrograms from '../../../components/selects/SelectPrograms'
import themeConfig from '@/../themeConfig.js'
import RequestHistory from './History'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

export default {
  name: 'List',
  components: {
    SelectPrograms,
    RequestHistory,
    flatPickr
  },
  props: {},
  data: () => ({
    disableCustomizer: themeConfig.disableCustomizer,
    disableThemeTour: themeConfig.disableThemeTour,
    dynamicWatchers: {},
    hideScrollToTop: themeConfig.hideScrollToTop,
    colors: themeConfig.colors,
    type: null,
    tab: 0,
    memo: null,
    bookPrompt: false,
    bookingCounseling: null,
    attrs: [
      {
        key: '오늘',
        highlight: true,
        dates: new Date()
      },
      {
        key: 'selected',
        highlight: {
          contentClass: 'text-main font-bold bg-white border border-solid border-main'
        },
        dates: null
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
    start_time: null,
    end_time: null,
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
          start_time: null,
          end_time: null,
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
    bookMemoToggle (val) {
      if (val.selected) {
        if (this.bookPrompt) {
          this.bookPrompt = false
          this.bookingCounseling = null
          this.memo = null
        } else {
          this.bookPrompt = true
          this.bookingCounseling = val
          this.memo = null
        }
      } else {
        this.$vs.notify({
          title: '실패',
          text: '예약 시간을 선택해 주세요',
          color: 'warning',
          position: 'top-right'
        })
      }
    },
    dayClick ({
                year,
                month,
                day,
                isDisabled
              }) {
      if (isDisabled === false) {
        const index = this.attrs.findIndex(x => x.key === 'selected')
        this.attrs[index].dates = new Date(year, month - 1, day)
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
        start_time: null,
        end_time: null,
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
        program_type_id: null,
        schedules: [
          {
            start_time: null,
            end_time: null,
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
        if (!this.editForms.schedules[i].start_time || !this.editForms.schedules[i].end_time) return this.validateNotify('모든 스케쥴의 시간을 입력해 주세요')
        if (this.editForms.schedules[i].meeting_place === '') return this.validateNotify('모든 스케쥴의 장소를 입력해 주세요')
      }
      return true
    },
    registerSchedules () {
      if (this.registerSchedulesValidate()) {
        const params = {}
        Object.assign(params, this.editForms)
        params['date'] = `${this.selectedDate.year}-${this.selectedDate.month}-${this.selectedDate.day}`
        params['program_type_id'] = null
        if (this.editForms.id) {
          this.$http.put(`/counseling/${this.editForms.id}`, params)
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
      const params = Object.assign({}, this.selectedDate)
      params['program_type_id'] = null
      this.$http.get('/counselings', {
        params
      }).then((res) => {
        this.counselings = res.data.map(x => {
          x.schedules = x.schedules.map(x2 => Object.assign({
            start_time: x2.time.split('-')[0],
            end_time: x2.time.split('-')[1]
          }, x2))
          return Object.assign({
            selected: 0
          }, x)
        })
      })
    },
    fetchMonth (val) {
      this.$http.get('/counselings', {
        params: {
          ...val,
          program_type_id: null
        }
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
    book () {
      if (this.bookingCounseling.selected) {
        // const params = Object.assign({}, this.bookingCounseling)
        this.$http.post(`/counseling-schedules/${this.bookingCounseling.selected}/requests`, {
          memo: this.memo
        })
            .then((res) => {
              this.$vs.notify({
                title: '성공',
                text: '예약되었습니다',
                color: 'primary',
                position: 'top-right'
              })
              this.memo = null
              this.bookingCounseling = null
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
    },
    verticalNavMenuWidth () {
      return this.$store.state.verticalNavMenuWidth
    },
    windowWidth () {
      return this.$store.state.windowWidth
    },
    isMentee () {
      return this.$store.state.auth.user.user_roles[0].role.name === '멘티'
      // return true
    },
    isMentor () {
      return this.$store.state.auth.user.user_roles[0].role.name === '멘토'
      // return false
    }
  },
  watch: {
    popup (val) {
      if (!val) {
        this.selectedMentor = null
      }
    },
    tab (val) {
      if (val === 0) {
        this.$router.replace({
          name: 'mentoring',
          query: {}
        }).catch(() => {
        }).finally(() => {
          this.$nextTick(() => {
            document.getElementById('preloader').style.display = 'none'
          })
        })
      } else {
        this.$router.replace({
          name: 'mentoring',
          query: {type: 'list'}
        }).catch(() => {
        }).finally(() => {
          this.$nextTick(() => {
            document.getElementById('preloader').style.display = 'none'
          })
        })

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
    this.type = this.$route.query.type || null
    if (this.$route.query.type === 'list') {
      this.tab = 1
    }
  },
  mounted () {
    this.$emit('mounted')
  },
  beforeDestroy () {
    this.$emit('destroy')
  }
}
</script>

<style lang="scss">
.vs-inputx {
  &.vs-input--input {
    &.normal {
      &.hasValue {
        color: #0a0a0a;
      }
    }
  }
}

.reserve-time-wrapper {
  .vs-component.con-vs-radio {
    .vs-radio {
      span.vs-radio--borde {
        border: 1px solid #2C66DB !important;
      }
    }
  }
}

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

@media screen and (max-width: 1280px) {
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
.mentoring-categories {
  padding-bottom: 40px;
  width: 90%;
  @media screen and (max-width: 1280px) {
    width: 328px;
  }
}

.mentoring-category-title {
  font-size: 26px;
  font-weight: 600;
  color: #316BEB;
  border: 1px solid #2C66DB;
  transition: all .2s;
  @media screen and (max-width: 1280px) {
    font-size: 20px;
  }
}

.mentoring-category-title.clicked {
  color: #fff;
  background-color: #2C66DB !important;
}

.mentoring-category-title:hover {
  cursor: pointer;
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

.mentoring-apply-wrapper {
  width: 90%;
  height: 615px;
  //box-shadow: 0 40px 120px rgba(0, 0, 0, .16);
  //border-radius: 30px;
  padding: 40px;
  background-color: #fff;
  border: 2px solid #ededed;
  @media screen and (max-width: 1280px) {
    width: 100%;
  }
}

.canlendar {
  width: 575px;
  height: 535px;
  //box-shadow: 0 16px 32px rgba(0, 0, 0, .16);
  //border-radius: 10px;
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
  border: unset;
  color: #fff;
  //border-radius: 5px;
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
  //box-shadow: 0 8px 16px rgba(0, 0, 0, .16);
  //border-radius: 10px;
  margin: 20px 0;
  transition: all .2s;
  border: 1px solid #EDEDED;
}

.reserve-item:hover {
  transform: translateY(-2%);
  transition: all .2s;
  //box-shadow: 0 16px 32px rgba(0, 0, 0, .16);
}

.reserve-item-title {
  border-bottom: 1px solid #EDEDED;
  padding: 8px 12px;
}

.program-title {
  //height: 27px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.reserve-item input {
  width: 18px;
  height: 18px;
}

.reserve-item label {
  margin: 0;
  padding-left: 8px;
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

  .vs-component.con-vs-radio {
    .vs-radio {
      .vs-radio--borde {
        border: 1px solid #EDEDED !important;
      }
    }
  }
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
  border: 1px solid #E93F34;
  color: #E93F34;
  padding: 11px 0;
  //border-bottom-left-radius: 10px;
}

.b-outline-delete-btn:hover { /*changed */
  color: #E86240;
}

.b-outline-btn {
  border: 1px solid #00A0E9;
  color: #00A0E9;
  background-color: #fff;
}

.b-outline-btn:hover {
  color: #00A0E9;
}

.b-box-btn {
  background-color: #316BEB;
  color: #fff;
  padding: 11px 0;
  border: unset;
  //border-bottom-right-radius: 10px;
}


//.b-box-btn:hover {
//  background-color: #0054A7;
//}

/*멘티 / 날짜 클릭 /  멘토 정보 클릭 시 */
.pa-color-success {
  color: #38AFB7;
}

.pa-color-danger {
}

.mentor-info-wrapper {
  //box-shadow: 0 40px 120px rgba(0, 0, 0, 20%);
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 514px;
  height: 808px;
  //border-radius: 20px;
}

.mentor-profile {
  background: url(/assets/images/karl.jpeg) center center/cover;
  width: 514px;
  height: 514px;
  object-fit: cover;
  //border-radius: 20px;
}

.mentor-info {
  padding: 60px 30px;
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
  //border-radius: 5px;
  transition: all .2s;
  border: unset;
}

.confirm-btn:hover {
  transform: translateY(-6%);
  transition: all .2s;
  background-color: #111;
}

/*멘티 /  멘토링 신청 내역 클릭 시 */
.mentoring-apply-list-title {
  //background-color: #F4F4F4;
  padding: 14px 0;
  //border-radius: 5px;
  //box-shadow: 0 0px 30px rgba(0, 0, 0, .12);
  margin-bottom: 6px;
  border-bottom: 2px solid #EDEDED;
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
  //box-shadow: 0 0px 30px rgba(0, 0, 0, .12);
  //border-radius: 5px;
  background-color: #fff;
}

.cancel-btn {
  background-color: #E86240;
  padding: 6px 10px;
  color: #fff;
  //border-radius: 5px;
  transition: all .2s;
  margin-left: 4px;
  border: unset;
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
  //border-radius: 5px;
  border: unset;
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

  .vs-component.con-vs-checkbox.vs-checkbox-default {
    .checkbox_x.vs-checkbox {
      border: 1px solid #EDEDED !important;
      border-radius: unset !important;
    }
  }

  .v-select.vs--single.vs--searchable {
    .vs__dropdown-toggle {
      border-radius: 0;
      border: 1px solid #EDEDED !important;
    }
  }

  .pa-text-input {
    border: 1px solid #EDEDED !important;
    height: 46px;
    color: #111;
    padding: 12px;
    font-size: 14px;
  }
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
  //border-radius: 3px;
  border-color: #E4E4E4;
  background-color: #fff;
  margin-left: 8px;
}

.program-info-item input[type="text"] {
  background: #fff;
  //border-radius: 5px;
  border: 1px solid #EDEDED;
  height: 46px;
  color: #111;
  padding: 12px;
  font-size: 14px;
}

.program-info-item input::placeholder {
  font-size: 14px;
  font-weight: 400;
  color: #BEBEBE;
}

.program-info-item label {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 0;
  color: #202020;
  line-height: 22px;
  padding-bottom: 8px;
}

.grey-cancel-btn {
  color: #6A6A6A;
  background-color: #fff;
  border: 1px solid #BEBEBE;
  padding: 13px 0;
  width: 196px;
  //border-radius: 5px;
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
  border: unset;
  //border-radius: 5px;
  border: unset;
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
  border: unset;
  //border-radius: 5px;
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
  //border-radius: 20px;
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

@media all and (max-width: 1280px) {
  .mentoring-content {
    padding: 90px 0;
    width: 100%;
    max-width: 600px;
  }

  .mentoring-categories {
    padding-bottom: 30px;
  }

  .mentoring-category-title {
    font-size: 20px;

  }

  .mentoring-apply-wrapper {
    width: 100%;
    height: 100%;
    box-shadow: none;
    border-radius: unset;
    padding: 0;
    flex-direction: column !important;
  }

  /* 멘티 / 날짜 선택 */
  .canlendar {
    //width: 600px;
    //height: 536px;
    width: 100%;
    height: auto;
  }

  .mentoring-info-content {
    width: 100% !important;
    padding-top: 0;
  }

  /* 멘티 / 멘토링 신청 / 날짜 선택 시  */
  .mentoring-select-wrapper {
    padding: 0;
  }

  .selected-day {
    padding-top: 30px;
  }

  .reserve-item {
    //border-radius: 5px;
  }

  .reserve-time > input {
    width: 15px;
    height: 15px;
  }


  .reverse-alarm-title {
    padding-top: 0;
  }

  .schedule-btn { /*changed */
    padding: 12px 14px;
  }
  /*멘티 / 날짜 클릭 /  멘토 정보 클릭 시 */
  .mentor-info-wrapper {
    width: 275px;
    height: 470px;
  }

  .mentor-profile {
    width: 275px;
    height: 274px;
    //border-radius: 10px;
  }

  .mentor-info {
    padding: 30px 20px;
  }


  .mentor-text {
    font-size: 30px;
    top: 245px;
  }

  .confirm-btn {
    width: 95px;
    height: 34px;
  }

  /*  멘티 / 멘토링 신청 내역  start */
  .m-mentoring-program-title {
    font-size: 14px;
    font-weight: 700;
  }

  .m-mentoring-apply-list-items {
    padding: 12px;
    //box-shadow: 0 16px 250px rgba(0, 0, 0, .16);
    //border-radius: 5px;
    background-color: #fff;
    margin-bottom: 12px;
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
