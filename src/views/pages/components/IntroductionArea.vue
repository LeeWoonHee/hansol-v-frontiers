<template>
  <section class="introductionArea white">
    <div class="introductionAreaContainer container pt-140 pb-110">
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 image-wrapper">
          <div class="about__img-3">
            <img
                src="@/assets/images/introduction-area-image.png"
                alt="About Thumbnail"
                data-speed="auto"
            >
          </div>
        </div>

        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
          <div class="sec-title-wrapper">
            <p class="introduction-title title-anim">INTRODUCTION</p>
            <p class="introduction-sub-title title-anim">V FRONTIERS를 소개합니다</p>
          </div>
          <div class="sec-text-wrapper">
            <div class="sec-text text-anim">
              <p>한솔 V FRONTIERS는 각 산업을 선도할 수 있는 혁신적인 스타트업을 발굴하고 지원하여 탄탄한 산업 생태계를
                구축해 나가는 것을 목표로 합니다.</p>
              <p class="introductionBottomTitle">
                선발된 스타트업은 4월부터 약 6개월간 진행되는 액셀러레이팅 프로그램의 지원 대상팀으로, 블루포인트의 분야별 기술 창업 전문 액셀러레이팅 & 한솔그룹의 협력 지원 & 투자유치 등 다양한
                기회를 얻을 수 있습니다.
              </p>
              <div class="buttonWrapper">
                <div class="btn_wrapper">
                  <a
                      class="wc-btn-light btn-hover btn-item"
                      href="about.html"
                  ><span></span>소개서 다운로드 <i
                      class="fa-solid fa-arrow-right"
                  ></i></a>
                </div>
                <div class="btn_wrapper">
                  <a
                      class="wc-btn-light btn-hover btn-item"
                      href="about.html"
                  ><span></span>지원하기 <i
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
</template>
npm
<script>
export default {
  name: "IntroductionArea"
}
</script>

<style
    scoped
    lang="scss"
>
.introductionArea::v-deep {
  background: #F4F4F4;
  position: relative;


  .introductionAreaContainer {
    position: relative;
    .row{
      align-items:center;
      .introduction-title{
        color:#0C6DFF;
      }
    .image-wrapper {

      .about__img-3 {
        width:596px;
        height:362px;
        img {
          width:100%;
          height:100%;
        }
      }
    }


    .sec-text-wrapper {
      margin-top: 100px;
    }

    .sec-title-wrapper {
      background: #F4F4F4;
      width: 100%;
      position: absolute;
      left: 40%;
      top: 10%;

      .introduction-sub-title {
        font-size: 50px;
        font-weight: 700;
      }
    }
    }

    &::before {
      content: "";
      width: 1px;
      height: 100%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background: #AEAEAE;
    }

    .introductionBottomTitle {
      margin-top: 15px;
    }

    .buttonWrapper {
      display: flex;

      .btn_wrapper {
        color: black;

        span {
          color: black;
        }
      }
    }
  }
}

</style>