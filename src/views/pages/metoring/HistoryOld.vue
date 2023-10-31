<template>
  <!-- 멘티 / 멘토링 신청 내역  start -->
  <div v-if="windowWidth > 1200" class="mentoring-apply-list-wrapper w-100 d-flex">
    <div class="mentoring-apply-list-content w-100">
      <div
          class="mentoring-apply-list-title d-flex w-100 justify-content-between w-1600 align-items-center">
        <div
            class="xs-title w-7 d-flex justify-content-center align-items-center font-weight-medium">
          번호
        </div>
        <div
            class="xs-title w-8 d-flex justify-content-center align-items-center font-weight-medium">
          신청일
        </div>
        <div
            class="xs-title w-7 d-flex justify-content-center align-items-center font-weight-medium">
          {{ isMentor ? '신청자' : '멘토' }}
        </div>
        <div
            class="xs-title w-20 d-flex justify-content-center align-items-center font-weight-medium">
          프로그램명
        </div>
        <div
            class="xs-title w-18 d-flex justify-content-center align-items-center font-weight-medium">
          예약 시간
        </div>
        <div
            class="xs-title w-27 d-flex justify-content-center align-items-center font-weight-medium">
          장소
        </div>
        <div
            class="xs-title w-11 d-flex justify-content-center align-items-center font-weight-medium">
          예약 상태
        </div>
      </div>
      <div
          class="mentoring-apply-list-items d-flex flex-column w-100 align-items-center align-items-center">
        <div
            v-for="request in requests"
            :key="request.id"
            class="d-flex justify-content-between w-100 apply-list-item"
        >
          <div
              class="xs2-title w-7 d-flex justify-content-center align-items-center font-weight-medium">
            {{ request.id }}
          </div>
          <div
              class="xs2-title w-8 d-flex justify-content-center align-items-center font-weight-medium">
            {{ $moment(request.created_at).format('YYYY-MM-DD') }}
          </div>
          <div
              class="xs2-title w-7 d-flex justify-content-center align-items-center font-weight-medium">
            {{ isMentor ? request.mentee.name : request.schedule.counseling.mentor.name }}
          </div>
          <div
              class="xs2-title w-20 d-flex justify-content-center align-items-center font-weight-medium">
            {{ request.schedule.counseling.program.name }}
          </div>
          <div
              class="xs2-title w-18 d-flex justify-content-center align-items-center font-weight-medium">
            <div class="border-right w-100 d-flex justify-content-center">
              {{ $moment(request.schedule.counseling.date).format('YYYY-MM-DD') }}
            </div>
            <div class="d-flex  w-100 justify-content-center">{{ request.schedule.time }}</div>
          </div>
          <div
              class="xs2-title w-27 d-flex justify-content-center align-items-center font-weight-medium">
            {{ request.schedule.counseling.meeting_place || '온라인' }}
          </div>
          <div
              v-if="isMentor && request.result === null"
              class="xs2-title w-11 d-flex justify-content-center align-items-center font-weight-medium"

          >
            <button class="success-btn" @click="confirm(request.id)">승인</button>
            <button class="cancel-btn" @click="reject(request.id)">거절</button>
          </div>
          <div
              v-else-if="isMentor"
              class="xs2-title w-11 d-flex justify-content-center align-items-center font-weight-medium"
              :class="request.result ? 'pa-color-success' : 'pa-color-danger'"
          >
            {{ request.result ? '승인' : '거절' }}
          </div>
          <div
              v-else-if="request.result === null"
              class="xs2-title w-11 d-flex justify-content-center align-items-center font-weight-medium pa-color-success"
          >
            <div class="pa-color-black">접수</div>
            <button @click="deleteSchedule(request.id)" class="cancel-btn">신청취소</button>
          </div>
          <div
              v-else
              class="xs2-title w-11 d-flex justify-content-center align-items-center font-weight-medium"
              :class="request.result ? 'pa-color-success' : 'pa-color-danger'"
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
  <div v-else class="m-mentoring-apply-list-wrapper w-100 d-flex">
    <div class="m-mentoring-apply-list-content w-100">
      <div
          v-for="request in requests"
          :key="request.id"
          class="m-mentoring-apply-list-items">
        <div class="m-apply-list-item d-flex w-100 flex-column align-items-center">
          <div class="w-100 sm-title m-mentoring-program-title">
            {{ request.schedule.counseling.program.name }}
          </div>
          <div class="d-flex justify-content-start w-100 flex-wrap">
            <div class="d-flex flex-column w-33 pb-2">
              <div class="w-100 xs-title font-weight-medium">
                접수 번호
              </div>
              <div class="d-flex justify-content-center xs2-title">
                {{ request.id }}
              </div>
            </div>
            <div class="d-flex flex-column w-33 pb-2">
              <div class="w-100 xs-title font-weight-medium">
                신청일
              </div>
              <div class="d-flex justify-content-center xs2-title">
                {{ $moment(request.created_at).format('YYYY-MM-DD') }}
              </div>
            </div>
            <div class="d-flex flex-column w-33 pb-2">
              <div class="w-100 xs-title font-weight-medium">
                {{ isMentor ? '신청자' : '멘토' }}
              </div>
              <div class="d-flex justify-content-center xs2-title">
                {{ isMentor ? request.mentee.name : request.schedule.counseling.mentor.name }}
              </div>
            </div>
            <div class="d-flex flex-column w-33 pb-2">
              <div class="w-100 xs-title font-weight-medium">
                예약 시간
              </div>
              <div class="d-flex flex-column w-100">
                <div class="xs2-title d-flex justify-content-center">
                  {{ $moment(request.schedule.counseling.date).format('YYYY-MM-DD') }}
                </div>
                <div class="xs2-title d-flex justify-content-center">
                  {{ request.schedule.time }}
                </div>
              </div>
            </div>
            <div class="d-flex flex-column w-33 pb-2">
              <div class="w-100 xs-title font-weight-medium">
                예약 상태
              </div>
              <div
                  v-if="isMentor && request.result === null"
                  class="d-flex justify-content-center align-items-center xs2-title"

              >
                <button class="success-btn" @click="confirm(request.id)">승인</button>
                <button class="cancel-btn" @click="reject(request.id)">거절</button>
              </div>
              <div
                  v-else-if="isMentor"
                  class="d-flex justify-content-center align-items-center xs2-title"
                  :class="request.result ? 'pa-color-success' : 'pa-color-danger'"
              >
                {{ request.result ? '승인' : '거절' }}
              </div>
              <div
                  v-else-if="request.result === null"
                  class="d-flex justify-content-center align-items-center xs2-title pa-color-success">
                <div class="pa-color-black">접수</div>
                <button @click="deleteSchedule(request.id)" class="cancel-btn">신청취소</button>
              </div>
              <div
                  v-else
                  class="d-flex justify-content-center align-items-center xs2-title pa-color-success"
                  :class="request.result ? 'pa-color-success' : 'pa-color-danger'"
              >
                {{ request.result ? '승인' : '거절' }}
              </div>
            </div>
          </div>
          <div class="w-100 d-flex justify-contents-start">
            <div class="xs-title font-weight-medium pr-2">장소</div>
            <div class="d-flex justify-content-start xs2-title">
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
      return this.$store.state.auth.user.user_roles[0].role.name === '멘티'
    },
    isMentor () {
      return this.$store.state.auth.user.user_roles[0].role.name === '멘토'
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
      this.$http.get('/counseling-schedule-requests', {
        params: this.params
      }).then((res) => {
        this.requests = res.data.data
        this.params.last_page = res.data.last_page
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
}
</style>
