<template>
  <!-- About area start -->
  <section class="about__area-3">
    <div class="container lg:pt-140 py-80 lg:pb-110 px-24 lg:px-0 w-full">
      <div class="row flex flex-wrap lg:flex-no-wrap w-full justify-center items-center">

        <!-- left / video slider      -->
        <carousel-3d
            class="pt-6 mt-6 w-full lg:w-1/2"
            ref="video-slider"
            :border="0"
            :width="$store.state.windowWidth < 1200 ? 264: 500"
            :height="$store.state.windowWidth < 1200 ? 160 : 300"
            :controls-visible="true"
            :inverseScaling="150"
            :space="220"
            :perspective="0"
            :clickable="$store.state.windowWidth < 1200 ? true : false"
            @after-slide-change="onAfterSlideChange"
        >
          <slide
              v-for="(video, sliderIndex) in videos"
              :key="sliderIndex"
              :index="sliderIndex"
          >
            <youtube-media
                :player-width="$store.state.windowWidth < 1200 ? 264 : 500"
                :player-height="$store.state.windowWidth < 1200 ? 160 : 300"
                @ready="(event) => videoReady(event, sliderIndex)"
                :video-id="video"
                :player-vars="{start:0}"
            ></youtube-media>
          </slide>
        </carousel-3d>

        <!-- right      -->
        <div class="w-full lg:w-1/2">
          <div class="sec-title-wrapper">
            <h2 class="sec-sub-title title-anim">INTRODUCTION</h2>
            <h3 class="sec-title title-anim">V FRONTIERS를<br class="block lg:hidden">&nbsp;소개합니다</h3>
          </div>
          <div class="sec-text-wrapper">

            <div class="sec-text text-anim ani-text-wrapper-flex text-gray">
              <div
                  class="text-light-black"
                  :style="$store.state.windowWidth < 1024 ? 'font-size:' + 11 + 'px' : 'font-size:' + 16 + 'px'"
              >
                한솔 V FRONTIERS는 각 산업을 선도할 수 있는 혁신적인<br class="none lg:block"/>
                스타트업을 발굴하고 지원하여 탄탄한 산업 생태계를<br class="none lg:block"/>
                구축해 나가는 것을 목표로 합니다.<br class="none lg:block"/>
                <br class="none lg:block"/>
                선발된 스타트업은 4월부터 약 6개월간 진행되는 액셀러레이팅<br class="none lg:block"/>
                프로그램의 지원 대상팀으로, 블루포인트의 분야별 <br class="none lg:block"/>
                기술 창업 전문 액셀러레이팅 & 한솔그룹의 협력 지원 &<br class="none lg:block"/>
                투자 유치 등 다양한 기회를 얻을 수 있습니다.<br class="none lg:block"/>
              </div>

              <!-- buttons          -->
              <div class="flex flex-no-wrap justify-start button-wrapper">
                <div
                    class="btn_wrapper"
                    v-if="isFacebookApp"
                >
                  <a
                      class="wc-btn-light btn-hover btn-item"
                      @click="fileCount"
                      :href="$store.state.program.introduction_file"
                      download="한솔 V FRONTIERS 4기.pdf"
                  >
                    <span></span>소개서 다운로드<i
                      class="fa-solid fa-arrow-right"
                  ></i>
                  </a>
                </div>
                <div
                    class="btn_wrapper"
                    v-else
                >
                  <a
                      class="wc-btn-light btn-hover btn-item"
                      :href="`${$http.defaults.baseURL}/download/${$store.state.program ? ($store.state.program.id || '5') : '5'}`"
                  >
                    <span></span>소개서 다운로드<i
                      class="fa-solid fa-arrow-right"
                  ></i>
                  </a>
                </div>
                <div class="btn_wrapper">
                  <a
                      class="wc-btn-light btn-hover btn-item cursor-pointer"
                      @click.prevent="openForms"
                  ><span></span>지원하기<i
                      class="fa-solid fa-arrow-right"
                  ></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- About area end -->
</template>

<script>
export default {
  name    : 'AboutArea3',
  data    : () => ({
    videos      : [
      'n4JVpTKBcQQ',
      'ISfHMAADDJE',
      '-V-4_dnpK1g'
    ],
    videoPlayers: [
      null,
      null,
      null
    ]
  }),
  computed: {
    isFacebookApp() {
      const ua = navigator.userAgent || navigator.vendor || window.opera
      return (ua.indexOf('FBAN') > -1) || (ua.indexOf('FBAV') > -1) || (ua.indexOf('Instagram') > -1)
    }
  },
  methods : {
    videoReady(event, index) {
      this.videoPlayers[index] = event.target
    },
    onAfterSlideChange(index) {
      this.videoPlayers.forEach((x, i) => {
        if (index === i) {
          x.playVideo()
        }
        else {
          x.stopVideo()
        }
      })
    },
    fileCount() {
      if (this.$store.state.program && this.$store.state.program.id) {
        this.$http.get(`/download/counting/${ this.$store.state.program.id }`)
      }
    },
    openForms() {
      if (this.$store.getters['auth/isAuth'] && this.$store.state.auth.user && !this.$store.state.auth.user.contact) {
        this.$router.push({
                            path : '/my-page',
                            query: { noti: '전화번호 정보는 필수 입력 값 입니다.' }
                          })
      }
      else if (this.$store.getters['auth/isAuth']) {
        this.$store.commit('TOGGLE_REQUEST')
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
      this.$gtag.event('application_click', {
        'event_label': 'application',
      })
    }
  }
}
</script>

<style
    scoped
    lang="scss"
>
.about__area-3::v-deep {
  .btn_wrapper {
    a {
      border: 1px solid #898989;
    }
  }

  .container {
    max-width: 80%;

    .button-wrapper {
      justify-content: space-between !important;
    }

    @media screen and (max-width: 1024px) {
      max-width: 100%;
    }

    .carousel-3d-controls {
      @media screen and (max-width: 1024px) {
        width:103%;
      }
      .prev {
        position: absolute;
        left: .5%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;

        @media screen and (max-width: 1024px) {
          display: block;
        }

        &::after {
          content: '';
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background: url("~@/assets/images/icons/leftCircleArrow.svg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        span {
          display: none;
        }

      }

      .next {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        position: absolute;
        right: .5%;
        @media screen and (max-width: 1024px) {
          display: block;
        }

        &::after {
          content: '';
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background: url("~@/assets/images/icons/rightCircleArrow.svg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        span {
          display: none;
        }

      }

    }
  }

  .ani-text-wrapper-flex {
    display: inline-block;

    p {
      display: inline-block;

      div {
        width: auto;
      }
    }
  }
}
</style>
