<template>
  <section class="applyArea dark">
    <div class="container">
      <div class="w-full blex-between">
        <div class="applyAreaLeft">

          <div class="sec-title-wrapper">
            <h2 class="sec-sub-title title-anim">APPLY NOW</h2>
            <h3 class="sec-title title-anim">V FRONTIERS는<br>여러분들을 기다립니다</h3>
            <p>간단한 지원 방법과 절차로<br class="lg:hidden block"> 쉽고 빠르게 지원할 수 있습니다.</p>
          </div>

          <div class="applyList">
            <div class="applyListTop">
              <h2 class="price__type">모집대상</h2>
              <p>2인이상 스타트업 또는 예비창업자</p>
            </div>

            <div class="applyListBottom">
              <h2 class="price__type">프로그램 일정</h2>
              <div class="w-full blex">
                <div class="rowLeft">
                  <h4>서류 접수</h4>
                  <p>23년 02월 17일 <br class="block lg:hidden">~ 03월 17일</p>
                </div>
                <div class="rowRight">
                  <h4>서류 합격자 발표</h4>
                  <p>4월 2주</p>
                </div>
              </div>
              <div class="w-full blex py-28">
                <div class="rowLeft">
                  <h4>발표 평가</h4>
                  <p>23년 4월 중</p>
                </div>
                <div class="rowRight">
                  <h4>최종 합격 발표 <br class="block lg:hidden">(6팀 내외)</h4>
                  <p>4월 말</p>
                </div>
              </div>
              <div class="w-full blex">
                <div class="rowLeft">
                  <h4>엑셀러레이팅 <br class="block lg:hidden">프로그램 기간</h4>
                  <p>23년 4월 ~ 9월</p>
                </div>
                <div class="rowRight">
                  <h4>파이널 데모데이</h4>
                  <p>23년 09월 말</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="applyAreaRight">
          <div class="price__table">
            <div class="price__item animation_from_bottom">
              <div class="price__info">
                <h2 class="price__type">지원방법</h2>
                <h3 class="price__title">01 사업계획서 작성</h3>
                <p class="priceSubTitle">사업계획서 포함내용 <br class="block lg:hidden">Problem, Solution, Scale-up, Team</p>

                <p>
                <div class="red text-danger">
                  필수
                </div>
                사업계획서 - 자유양식, PPT형태의 <br class="block lg:hidden">사업계획서를 PDF로 변환하여 제출
                </p>
                <p>
                <div class="text-primary">
                  선택
                </div>
                피칭동영상 - 분량 3분 내외, 공유 가능 링크<br class="block lg:hidden">(구글 드라이브 or 유튜브)로 제출
                </p>
              </div>
            </div>

            <div class="priceSubItem animation_from_bottom">
              <div class="price__info">
                <h3 class="price__title">02 지원서 및 사업계획서 홈페이지 접수</h3>
              </div>
            </div>

            <div class="priceSubItem animation_from_bottom">
              <div class="price__info">
                <h3 class="price__title">03 지원 후 알림톡을 통한 접수 완료 확인</h3>
              </div>
            </div>
          </div>
          <div class="price__btn btn_wrapper w-full blex justify-center lg:justify-end">
            <a
                @click.prevent="openForms"
                class="wc-btn-black btn-hover btn-item cursor-pointer">
              <span></span>
              지원하기
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name   : "ApplyArea",
  methods: {
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
.applyArea::v-deep {
  width: 100%;
  background: #1e1e1e;
  padding-top: 193px;
  padding-bottom: 118px;

  @media screen and (max-width: 1024px) {
    padding: 90px 0;
  }

  .container {
    max-width: 67%;
    padding: 0;

    @media screen and (max-width: 1024px) {
      max-width: 100%;
      padding: 0 16px;
    }

    .applyAreaLeft {
      width: 45%;
      @media screen and (max-width: 1024px) {
        width: 100%;
      }


      .sec-title-wrapper {
        .sec-sub-title {
          color: #0C6DFF;
          font-weight: 700;
          font-size: 1.042vw; //20px;
          line-height: 24.96px;
          padding-bottom: 8px;

          @media screen and (max-width: 1024px) {
            font-size: 16px;
          }
        }

        .sec-title {
          font-weight: 700;
          font-size: 2.604vw; //50px;
          line-height: 1.2;
          padding-bottom: 18.19px;

          @media screen and (max-width: 1024px) {
            font-size: 32px;
          }
        }

        p {
          margin-bottom: 52.81px;
          color: #ffffff;
          font-weight: 600;
          font-size: 1.250vw; //24px;

          @media screen and (max-width: 1024px) {
            font-size: 16px;
          }
        }
      }

      .applyList {


        .applyListTop {
          margin-bottom: 30px;

          .price__type {
            color: #ffffff;
            border-color: #ffffff;
            margin-bottom: 16px;
            font-size: 18px;
            line-height: 22.46px;
            font-weight: 700;
            padding: 7px 22px 9px 24px;
          }

          p {
            padding-bottom: 22px;
            color: #E4E4E4;
          }

          &:after {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background: #E4E4E4;
          }
        }

        .applyListBottom {
          .price__type {
            color: #ffffff;
            border-color: #ffffff;
            font-size: 18px;
            line-height: 22.46px;
            font-weight: 700;
            padding: 7px 22px 9px 24px;
            margin-bottom: 16.19px;
          }

          .rowLeft {
            flex: 1;

            h4 {
              color: #ffffff;
              font-size: 16px;
              font-weight: 700;
              margin-bottom: 8px;

              @media screen and (max-width: 1024px) {
                font-size: 14px;
              }
            }

            p {
              color: #F4F4F4;
              font-weight: 500;
              font-size: 14px;
              line-height: 17.47px;
            }
          }

          .rowRight {
            flex: 1;

            h4 {
              color: #ffffff;
              font-size: 16px;
              font-weight: 700;
              line-height: 19.97px;
              margin-bottom: 8px;
            }

            p {
              color: #F4F4F4;
              font-weight: 500;
              font-size: 14px;
              line-height: 17.47px;
            }
          }

        }

      }

    }

    .applyAreaRight {
      width: 45%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      @media screen and (max-width: 1024px) {
        width: 100%;
      }

      .price__table {

        @media screen and (max-width: 1024px) {
          margin-top: 30px;
        }

        .price__item {
          background: #0E0E0E;
          border-radius: 0;
          padding: 40px 40px 92px 40px;
          margin-bottom: 16px;

          @media screen and (max-width: 1024px) {
            padding: 20px;
          }

          .price__info {
            .price__type {
              color: #ffffff;
              border-color: #ffffff;
              font-size: 18px;
              line-height: 22.46px;
              font-weight: 700;
              padding: 7px 22px 9px 24px;
              margin-bottom: 25px;
            }

            .price__title {
              font-weight: 700;
              font-size: 16px;
              line-height: 19.97px;
              margin-bottom: 12px;
              padding-bottom: 0;
              color: #ffffff;
            }

            .priceSubTitle {
              margin-bottom: 15px;
            }

            p {
              color: #ffffff;
              font-size: 14px;
              font-weight: 600;
              line-height: 17.47px;
              margin-bottom: 7px;
            }
          }
        }

        .priceSubItem {
          background: #0E0E0E;
          margin-bottom: 16px;
          padding: 20px 50px;

          @media screen and (max-width: 1024px) {
            padding: 16px;
          }

          .price__info {
            .price__type {
              color: #ffffff;
              border-color: #ffffff;
              font-size: 18px;
              font-weight: 700;
              padding: 7px 22px 9px 24px;
              margin-bottom: 25px;


            }

            .price__title {
              font-weight: 700;
              font-size: 16px;
              padding-bottom: 0;
              color: #ffffff;
            }
          }
        }
      }
    }
  }
}

</style>