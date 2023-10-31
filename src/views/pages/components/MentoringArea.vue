<template>
  <div class="counter__area-3 wf_panel">
    <div class="container">

      <div class="row">
        <div class="col-xxl-12">
          <div class="sec-title-wrapper">
            <h2 class="sec-title">MENTORING</h2>
            <h3 class="sec-sub-title">V FRONTIERS만의<br class="lg:hidden block"> 멘토링 시스템</h3>
            <p>각 분야의 전문가들로 이루어진 멘토들과 함께<br class="lg:hidden block"> 여러분의 역량을 향상시킬 수 있습니다</p>
          </div>
        </div>
      </div>

      <div class="w-full blex">

        <div class="textBox">
          <div class="counter__wrapper-3">
            <div class="counter__item-3 pb-40 lg:pb-80">
              <h2 class="counter__number">01</h2>
              <div class="counter__text">
                <h3>간편한 예약</h3>
                <p>희망멘토들의 일정들을 확인 후<br>예약 버튼만 누르면 예약이 완료됩니다</p>
              </div>
            </div>
            <div class="counter__item-3 pb-40 lg:pb-80">
              <h2 class="counter__number">02</h2>
              <div class="counter__text">
                <h3>다양한 분야의 멘토들</h3>
                <p>여러 분야의 전문가들로 이루어져있어<br>본인의 적성에 맞는 분야를 선택할 수 있습니다</p>
              </div>
            </div>
            <div class="counter__item-3 pb-40 lg:pb-80">
              <h2 class="counter__number">03</h2>
              <div class="counter__text">
                <h3>알림 시스템</h3>
                <p>신청한 프로그램의 일정이 변경/취소 될 시<br>개별적으로 알림이 전송됩니다</p>
              </div>
            </div>
            <div class="counter__item-3 pb-40 lg:pb-80">
              <h2 class="counter__number">04</h2>
              <div class="counter__text">
                <h3>기술 습득과 능력 개발 가이드</h3>
                <p>여러분들의 전문적인 기술 습득과<br>능력개발을 위한 가이드를 섬세하게 알려드립니다</p>
              </div>
            </div>
            <div class="counter__item-3 pb-40 lg:pb-0">
              <h2 class="counter__number">05</h2>
              <div class="counter__text">
                <h3>컨설팅</h3>
                <p>미래 사업 구축 방향 및 문제 해결 방안 등을<br>상담을 통해 친절히 알려드립니다</p>
              </div>
            </div>
            <div class="counter__item-3 pb-40 lg:pb-0">
              <h2 class="counter__number">06</h2>
              <div class="counter__text">
                <h3>역량 강화</h3>
                <p>멘토링을 통해 여러분들의 역량을<br>최대치로 끌어올려 드립니다</p>
              </div>
            </div>
          </div>
        </div>

        <div class="imageBox">
          <div class="counter__img-3">
            <img
                src="@/assets/images/main-page-images/mentoringImage.png"
                alt="Counter Image"
            >
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MentoringArea"
}
</script>

<style scoped lang="scss">
.counter__area-3::v-deep {
  background-color: #fff;
  padding-bottom: 202px;

  @media screen and (max-width: 1024px) {
    padding-bottom: 80px;
  }

  .container {
    max-width: 67%;

    @media screen and (max-width: 1024px) {
      max-width: 100%;
    }

    .sec-title-wrapper {
      text-align: center;
      padding-top: 176px;
      margin-bottom: 106px;
      @media screen and (max-width: 1024px) {
        padding-top: 96px;
        margin-bottom: 66px;
      }

      .sec-title {
        padding-top: 0;
        font-size: 1.042vw; // 20px;
        font-weight: 700;
        color: #0C6DFF;
        padding-bottom: 8px;

        @media screen and (max-width: 1024px) {
          font-size: 32px;
        }
      }

      .sec-sub-title {
        padding-bottom: 17px;
        font-size: 2.604vw; //50px;
        font-weight: 700;

        @media screen and (max-width: 1024px) {
          font-size: 32px;
        }
      }

      p {
        font-size: 1.250vw; //24px;
        font-weight: 400;
        color: #000;
        @media screen and (max-width: 1024px) {
          font-size: 16px;
        }
      }
    }

    .textBox {
      flex: 1.2;

      @media screen and (max-width: 1024px) {
        width: 100%;
        flex: unset;
      }

      .counter__item-3 {
        position: relative;

        .counter__number {
          font-weight: 700;
          font-size: 3.646vw; //70px;
          color: rgba(0, 0, 0, .1);
          position: absolute;
          top: -20%;
          left: -10%;

          @media screen and (max-width: 1024px) {
            font-size: 50px;
            top: 5%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

        }

        .counter__text {

          h3 {
            margin-bottom: 12px;
            font-size: 1.354vw; //26px;
            font-weight: 700;


            @media screen and (max-width: 1024px) {
              font-size: 24px;
            }
          }

          p {
            color: #000;
            font-size: 0.833vw; //16px;
            font-weight: 400;
            @media screen and (max-width: 1024px) {
              font-size: 16px;
            }
          }
        }
      }
    }

    .imageBox {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 0.8;
      @media screen and (max-width: 1024px) {
        flex: unset;
      }


      .counter__img-3 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 31.250vw; //600px;
        height: 31.250vw; //600px;
        margin-top: 0;

        @media screen and (max-width: 1024px) {
          width: 312px;
          height: 312px;
        }

      }
    }
  }

}

</style>