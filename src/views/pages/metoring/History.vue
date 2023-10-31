<template>
  <!-- 멘티 / 멘토링 신청 내역  start -->
  <div v-if="windowWidth > 1280" class="mentoring-apply-list-wrapper w-full flex">
    <div class="mentoring-apply-list-content w-full">
      <div
          class="mentoring-apply-list-title flex w-full justify-between items-center"
          style="background-color: #f7f9fa;"
      >
        <div
            class="text-xs md:text-sm lg:text-md w-7 flex justify-center items-center font-bold text-black">
          번호
        </div>
        <div
            class="text-xs md:text-sm lg:text-md w-1/10 flex justify-center items-center font-bold text-black">
          신청일
        </div>
        <div
            class="text-xs md:text-sm lg:text-md w-7 flex justify-center items-center font-bold text-black">
          {{ isMentor ? '신청자' : '멘토' }}
        </div>
        <div
            class="text-xs md:text-sm lg:text-md w-11 flex justify-center items-center font-bold text-black">
          프로그램명
        </div>
        <div
            class="text-xs md:text-sm lg:text-md w-20 flex justify-center items-center font-bold text-black">
          유형
        </div>
        <div
            class="text-xs md:text-sm lg:text-md w-18 flex justify-center items-center font-bold text-black">
          예약 시간
        </div>
        <div
            class="text-xs md:text-sm lg:text-md w-27 flex justify-center items-center font-bold text-black">
          장소
        </div>
        <div
            class="text-xs md:text-sm lg:text-md w-1/5 flex justify-center items-center font-bold text-black">
          전달사항
        </div>
        <div
            class="text-xs md:text-sm lg:text-md w-11 flex justify-center items-center font-bold text-black">
          예약 상태
        </div>
      </div>
      <div
          class="mentoring-apply-list-items flex flex-col w-full items-center items-center">
        <div
            v-for="request in requests"
            :key="request.id"
            style="border: 1px solid #EDEDED;"
            class="flex justify-between w-full apply-list-item"
        >
          <div
              class="text-xs md:text-sm lg:text-md w-7 flex justify-center items-center font-normal">
            {{ request.id }}
          </div>
          <div
              class="text-xs md:text-sm lg:text-md w-1/10 flex justify-center items-center font-normal">
            {{ $moment(request.created_at).format('YYYY-MM-DD') }}
          </div>
          <div
              class="text-xs md:text-sm lg:text-md w-7 flex justify-center items-center font-normal">
            {{ isMentor ? request.mentee.name : request.schedule.counseling.mentor.name }}
          </div>
          <div
              class="text-xs md:text-sm lg:text-md w-11 flex justify-center items-center font-normal">
            {{ request.schedule.counseling.program ? request.schedule.counseling.program.name : '없음' }}
          </div>
          <div
              class="text-xs md:text-sm lg:text-md w-20 flex justify-center items-center font-normal">
            {{ request.schedule.counseling.program_type ? request.schedule.counseling.program_type.name : '없음' }}
          </div>
          <div
              class="text-xs md:text-sm lg:text-md w-18 flex justify-center items-center font-normal">
            {{ $moment(request.schedule.counseling.date).format('YYYY-MM-DD') }} {{ request.schedule.time }}
            <!--            <div class="border-right w-full flex justify-center">-->
            <!--              {{ $moment(request.schedule.counseling.date).format('YYYY-MM-DD') }} {{ request.schedule.time }}-->
            <!--            </div>-->
            <!--            <div class="flex  w-full justify-center">{{ }}</div>-->
          </div>
          <div
              class="text-xs md:text-sm lg:text-md w-27 flex justify-center items-center font-normal">
            {{ request.schedule.counseling.meeting_place || '온라인' }}
          </div>
          <div
              class="text-xs md:text-sm lg:text-md w-1/5 flex justify-center items-center font-normal">
            {{ request.memo || '없음' }}
          </div>
          <div
              v-if="request.deleted_at"
              class="text-xs md:text-sm lg:text-md w-11 flex justify-center items-center font-normal"
          >
            <div class="text-danger w-full text-center mb-2">신청 취소</div>
          </div>
          <div
              v-else-if="isMentor && request.result === null"
              class="text-xs md:text-sm lg:text-md w-11 flex justify-center items-center font-normal"

          >
            <button class="success-btn cursor-pointer" @click="confirm(request.id)">승인</button>
            <button class="cancel-btn cursor-pointer" @click="reject(request.id)">거절</button>
          </div>
          <div
              v-else-if="isMentor"
              class="text-xs md:text-sm lg:text-md w-11 flex justify-center items-center font-normal"
              :class="request.result ? 'text-info' : 'text-danger'"
          >
            {{ request.result ? '승인' : '거절' }}
          </div>
          <div
              v-else-if="request.result === null"
              class="text-xs md:text-sm lg:text-md w-11 flex justify-center items-center font-normal flex-wrap"
          >
            <div class="text-black w-full text-center mb-2">접수</div>
            <button @click="deleteSchedule(request.id)" class="cancel-btn cursor-pointer ml-0">신청취소</button>
          </div>
          <div
              v-else
              class="text-xs md:text-sm lg:text-md w-11 flex justify-center items-center font-normal"
              :class="request.result ? 'text-info' : 'text-danger'"
          >
            {{ request.result ? '승인' : '거절' }}
          </div>
        </div>
      </div>
      <vs-pagination
          class="w-full hs-pagination"
          v-model="params.page" :total="params.last_page"
          prev-icon="이전"
          next-icon="다음"
      ></vs-pagination>
    </div>
  </div>
  <div v-else class="m-mentoring-apply-list-wrapper w-full flex">
    <div class="m-mentoring-apply-list-content w-full">
      <div
          v-for="request in requests"
          :key="request.id"
          class="m-mentoring-apply-list-items"
          style="border: 1px solid #EDEDED; box-shadow: 5px 5px 10px rgba(0,0,0, 0.1);"
      >
        <div class="m-apply-list-item flex w-full flex-col items-center"
        >
          <div class="w-full text-base m-mentoring-program-title">
            {{ request.schedule.counseling.program ? request.schedule.counseling.program.name : '없음' }}
          </div>
          <div class="flex justify-start w-full flex-wrap">
            <div class="flex flex-col w-33 pb-2">
              <div class="w-full text-xs md:text-sm lg:text-md font-bold">
                접수 번호
              </div>
              <div class="flex justify-center text-xs md:text-sm lg:text-md font-normal">
                {{ request.id }}
              </div>
            </div>
            <div class="flex flex-col w-33 pb-2">
              <div class="w-full text-xs md:text-sm lg:text-md font-normal font-bold">
                신청일
              </div>
              <div class="flex justify-center text-xs md:text-sm lg:text-md font-normal">
                {{ $moment(request.created_at).format('YYYY-MM-DD') }}
              </div>
            </div>
            <div class="flex flex-col w-33 pb-2">
              <div class="w-full text-xs md:text-sm lg:text-md font-normal font-bold font-normal">
                {{ isMentor ? '신청자' : '멘토' }}
              </div>
              <div class="flex justify-center text-xs md:text-sm lg:text-md font-normal">
                {{ isMentor ? request.mentee.name : request.schedule.counseling.mentor.name }}
              </div>
            </div>
            <div class="flex flex-col w-33 pb-2">
              <div class="w-full text-xs md:text-sm lg:text-md font-normal font-bold">
                유형
              </div>
              <div class="flex flex-col w-full">
                <div class="text-xs md:text-sm lg:text-md flex justify-center font-normal">
                  {{ request.schedule.counseling.program_type ? request.schedule.counseling.program_type.name : '없음' }}
                </div>
              </div>
            </div>
            <div class="flex flex-col w-33 pb-2">
              <div class="w-full text-xs md:text-sm lg:text-md font-normal font-bold">
                예약 시간
              </div>
              <div class="flex flex-col w-full">
                <div class="text-xs md:text-sm lg:text-md flex justify-center font-normal">
                  {{ $moment(request.schedule.counseling.date).format('YYYY-MM-DD') }}
                </div>
                <div class="text-xs md:text-sm lg:text-md flex justify-center font-normal">
                  {{ request.schedule.time }}
                </div>
              </div>
            </div>
            <div class="flex flex-col w-33 pb-2">
              <div class="w-full text-xs md:text-sm lg:text-md font-normal font-bold">
                예약 상태
              </div>
              <div
                  v-if="request.deleted_at"
                  class="flex justify-center items-center text-xs md:text-sm lg:text-md font-normal"
              >
                <div class="text-danger w-full text-center mb-2">신청 취소</div>
              </div>
              <div
                  v-else-if="isMentor && request.result === null"
                  class="flex justify-center items-center text-xs md:text-sm lg:text-md"

              >
                <button class="success-btn cursor-pointer font-normal" @click="confirm(request.id)">승인</button>
                <button class="cancel-btn cursor-pointer font-normal" @click="reject(request.id)">거절</button>
              </div>
              <div
                  v-else-if="isMentor"
                  class="flex justify-center items-center text-xs md:text-sm lg:text-md font-normal"
                  :class="request.result ? 'text-info' : 'text-danger'"
              >
                {{ request.result ? '승인' : '거절' }}
              </div>
              <div
                  v-else-if="request.result === null"
                  class="flex justify-center items-center text-xs md:text-sm lg:text-md flex-wrap">
                <div class="text-black w-full text-center mb-2">접수</div>
                <button @click="deleteSchedule(request.id)" class="cancel-btn cursor-pointer ml-0">신청취소</button>
              </div>
              <div
                  v-else
                  class="flex justify-center items-center text-xs md:text-sm lg:text-md text-success font-normal"
                  :class="request.result ? 'text-info' : 'text-danger'"
              >
                {{ request.result ? '승인' : '거절' }}
              </div>
            </div>
            <div class="w-full flex justify-start pb-2">
              <div
                  class="text-xs md:text-sm lg:text-md font-normal font-bold pr-2 w-1/5">
                전달사항
              </div>
              <div
                  class="flex justify-start text-xs md:text-sm lg:text-md font-normal message-title w-4/5">
                {{ request.memo || '없음' }}
              </div>
            </div>
          </div>
          <div class="w-full flex justify-start">
            <div class="text-xs md:text-sm lg:text-md font-normal font-bold pr-2">장소</div>
            <div class="flex justify-start text-xs md:text-sm lg:text-md font-normal">
              {{ request.schedule.counseling.meeting_place || '온라인' }}
            </div>
          </div>
        </div>
      </div>
      <vs-pagination
          class="w-full hs-pagination"
          v-model="params.page" :total="params.last_page"
          prev-icon="이전"
          next-icon="다음"
      ></vs-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'History',
  computed: {
    windowWidth () {
      return this.$store.state.windowWidth
    },
    isMentee () {
      if (this.$store.state.auth.user) {
        return this.$store.state.auth.user.user_roles[0].role.name === '멘티'
      } else {
        return null
      }
    },
    isMentor () {
      if (this.$store.state.auth.user) {
        return this.$store.state.auth.user.user_roles[0].role.name === '멘토'
      } else {
        return null
      }
    }
  },
  data: () => ({
    requests: [],
    params: {
      page: 1,
      last_page: 1
    }
  }),
  watch: {
    params: {
      deep: true,
      handler () {
        this.fetch()
      }
    }
  },
  methods: {
    confirm (request_id) {
      this.$http.post(`/counseling-schedule-requests/${request_id}/confirm`)
          .then(() => {
            this.$vs.notify({
              title: '처리 완료',
              text: '승인되었습니다',
              color: 'primary',
              position: 'top-right'
            })

            const index = this.requests.findIndex(x => x.id === request_id)
            if (index > -1) {
              this.requests[index].result = true
            }
          })
          .catch(() => {
            this.$vs.notify({
              title: '주의',
              text: '권한이 없는 행동입니다',
              color: 'danger',
              position: 'top-right'
            })
          })
    },
    reject (request_id) {
      this.$http.post(`/counseling-schedule-requests/${request_id}/reject`)
          .then(() => {
            this.$vs.notify({
              title: '처리 완료',
              text: '거절되었습니다',
              color: 'primary',
              position: 'top-right'
            })

            const index = this.requests.findIndex(x => x.id === request_id)
            if (index > -1) {
              this.requests[index].result = false
            }
          })
          .catch(() => {
            this.$vs.notify({
              title: '주의',
              text: '권한이 없는 행동입니다',
              color: 'danger',
              position: 'top-right'
            })
          })
    },
    fetch () {
      this.$vs.loading()
      this.$http.get('/counseling-schedule-requests', {
        params: this.params
      }).then((res) => {
        this.requests = res.data.data
        this.params.last_page = res.data.last_page
      }).finally(() => {
        this.$vs.loading.close()
      })
    },
    deleteSchedule (id) {
      this.$vs.dialog({
        title: '확인',
        type: 'confirm',
        text: '정말로 신청 취소를 하시겠습니까?',
        color: 'danger',
        accept: () => {
          this.$http.delete(`/counseling-schedule-requests/${id}`).then((res) => {
            this.$vs.notify({
              title: '처리완료',
              text: '신청 취소되었습니다.',
              color: 'warning',
              position: 'top-right'
            })
          })
        },
        acceptText: '삭제',
        cancelText: '취소'
      })
    }
  },
  created () {
    this.fetch()
  },
  mounted () {
    this.$emit('mounted')
    this.$nextTick(() => {
      document.getElementById('preloader').style.display = 'none'
    })
  },
  beforeDestroy () {
    this.$emit('destroy')
  }
}
</script>

<style lang="scss">
.hs-pagination {
  justify-content: center !important;

  .vs-pagination--mb:first-child {
    display: none !important;
  }

  .vs-pagination--mb:last-child {
    justify-content: center !important;

    .vs-pagination--buttons {
      color: #838383;
      transition: all .2s;

      &:hover {
        color: #00A0E9;
        transform: translateY(-6%);
        transition: all .2s;
      }

      i {
        font-size: 14px;
      }
    }
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
}
</style>
