<template>
  <section class="dark">
    <div class="research__area wf_panel">
      <div class="container researhContainer inner_content">
        <div class="row">
          <div class="researchLeft col-xxl-6 col-xl-6 col-lg-6">
            <div class="sec-title-wrapper">
              <h2 class="sec-sub-title">BENEFITS</h2>
              <h3 class="sec-title">V FRONTIERS에서만 드리는 혜택들입니다</h3>
              <p>
                창업을 하기위해 필요한 전문적인 교육부터</p>
              <p>투자 및 멘토링 혜택까지 모자람 없이 지원해 드립니다.
              </p>
            </div>
            <!--            <ul class="research__tools">-->
            <!--              <li><a href="#">Google</a></li>-->
            <!--              <li><a href="#">pinterest</a></li>-->
            <!--              <li><a href="#">Instagram</a></li>-->
            <!--            </ul>-->
          </div>
          <div class="researchRight col-xxl-6 col-xl-6 col-lg-6 ">
            <div class="research__list">
              <div class="research__wrapper">
                <div class="research__item">
                  <div class="research__number">
                    <span>01.</span>
                  </div>
                  <div class="research__info">
                    <h4 class="research__title">COLLABORATION WITH 한솔</h4>
                    <p>한솔그룹 전문가 poC 검증</p>
                  </div>
                </div>

                <div class="research__item">
                  <div class="research__number">
                    <span>03.</span>
                  </div>
                  <div class="research__info">
                    <h4 class="research__title">REWARD</h4>
                    <p>총 9,000만원의 상금</p>
                  </div>
                </div>

                <div class="research__item">
                  <div class="research__number">
                    <span>05.</span>
                  </div>
                  <div class="research__info">
                    <h4 class="research__title">FUNDING</h4>
                    <p>(최대 10억 투자 유치 기회)</p>
                    <p>한솔그룹 및 블루포인트의 시드 투자</p>
                  </div>
                </div>
              </div>
              <div class="research__wrapper">
                <div class="research__item">
                  <div class="research__number">
                    <span>02.</span>
                  </div>
                  <div class="research__info">
                    <h4 class="research__title">블루포인트 ALUMNI 혜택</h4>
                    <p>네트워크, TIPS 지원 검토 등</p>
                  </div>
                </div>
                <div class="research__item">
                  <div class="research__number">
                    <span>04.</span>
                  </div>
                  <div class="research__info">
                    <h4 class="research__title">ACCELERATING PROGRAM</h4>
                    <p>스타트업 캠프 및 창업 교육</p>
                  </div>
                </div>


                <div class="research__item">
                  <div class="research__number">
                    <span>06.</span>
                  </div>
                  <div class="research__info">
                    <h4 class="research__title">MENTORING</h4>
                    <p>블루포인트 전문가의 1:1 전담 멘토링</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BenefitsArea"
}
</script>

<style
    scoped
    lang="scss"
>
.research__area::v-deep {
  font-family:'SUIT';
  .researhContainer {
    max-width: 100%;
    padding: 257px 207px 225px 278px;

    .sec-title-wrapper {
      .sec-sub-title {
        color: #0C6DFF;
      }

      .sec-title {
        max-width:478px;
        padding-bottom:28px;
      }
      p{
        max-width:100%;
      }
    }
    .researchLeft{
      flex:0.8;
    }
    .researchRight {
      flex: 2;

      .research__list {
        display: flex;
        justify-content: space-around;

        .research__wrapper {
          padding-top: 8px;

          .research__item {
            margin-bottom: 61px;

            .research__info {

              .research__title {
                margin-bottom:13px;
                padding:0;
              }

              p {
                font-weight: 400;
                font-size: 18px;
                linee-height: 22px;
                max-width: 337px;
              }


            }
          }
        }
      }
    }
  }
}
</style>