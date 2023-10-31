<template>
  <div class="benefit-area">

    <div class="blex-top flex-wrap lg:flex-no-wrap w-full px-24 lg:px-0 lg:w-7/10">

      <div class="blex justify-center lg:justify-start w-full lg:w-2/5">
        <div class="sec-sub-title">
          BENEFITS
        </div>
        <div class="sec-title">
          V FRONTIERS에서만<br>
          드리는 혜택들입니다
        </div>
        <div class="sec-text">
          사업 성장을 위해 필요한 전문적인 교육부터<br>
          투자 유치 기회 및 멘토링 서비스를 제공합니다.
        </div>
      </div>

      <div class="w-9/10 lg:w-3/5 blex">
        <div class="blex flex-no-wrap w-full lg:w-1/2 lg:pb-60 pb-30">
          <div class="circle">
            01.
          </div>
          <div class="w-full blex-left">
            <div class="title">
              COLLABORATION WITH 한솔
            </div>
            <div class="sub-title">
              한솔그룹 계열사와 사업개발 및<br>기술창업 관련 협력 기회 제공
            </div>
          </div>
        </div>

        <div class="blex flex-no-wrap w-full lg:w-1/2 lg:pb-60 pb-30">
          <div class="circle">
            02.
          </div>
          <div class="w-full blex-left">
            <div class="title">
              블루포인트 ALUMNI 혜택
            </div>
            <div class="sub-title">
              네트워크, TIPS 지원 검토 등
            </div>
          </div>
        </div>

        <div class="blex flex-no-wrap w-full lg:w-1/2 lg:pb-60 pb-30">
          <div class="circle">
            03.
          </div>
          <div class="w-full blex-left">
            <div class="title">
              REWARD
            </div>
            <div class="sub-title">
              총 9,000만원의 상금
            </div>
          </div>
        </div>

        <div class="blex flex-no-wrap w-full lg:w-1/2 lg:pb-60 pb-30">
          <div class="circle">
            04.
          </div>
          <div class="w-full blex-left">
            <div class="title">
              ACCELERATING PROGRAM
            </div>
            <div class="sub-title">
              스타트업 캠프 및 <br class="block lg:hidden">전문 창업 교육
            </div>
          </div>
        </div>

        <div class="blex flex-no-wrap w-full lg:w-1/2 pb-30 lg:pb-0">
          <div class="circle">
            05.
          </div>
          <div class="w-full blex-left">
            <div class="title">
              FUNDING
            </div>
            <div class="sub-title">
              한솔그룹 및 블루포인트의<br> 투자 검토 기회 (최대 10억원)
            </div>
          </div>
        </div>

        <div class="blex flex-no-wrap w-full lg:w-1/2 pb-30 lg:pb-0">
          <div class="circle">
            06.
          </div>
          <div class="w-full blex-left">
            <div class="title">
              MENTORING
            </div>
            <div class="sub-title">
              블루포인트 심사역의 <br class="block lg:hidden">1:1 전담 멘토링
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BenefitArea"
}
</script>

<style scoped lang="scss">
.benefit-area::v-deep {
  width: 100%;
  padding: 11.979vw 0; //230px
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  .sec-sub-title {
    color: #0C6DFF;
    font-weight: 700;
    @media screen and (max-width: 1024px) {
      font-size: 16px;
    }
  }

  .sec-title {
    width: 100%;
    font-size: 2.604vw; //50px;
    line-height: 1.2;
    font-weight: 700;

    @media screen and (max-width: 1024px) {
      font-size: 32px;
      text-align: center;
    }
  }

  .sec-text {
    padding-top: 1.042vw; //20px;
    @media screen and (max-width: 1024px) {
      font-size: 14px;
      text-align: center;
      padding-top: 18px;
      padding-bottom: 30px;
    }
  }

  .circle {
    font-size: 1.042vw; //20px;
    min-width: 2.813vw; //54px;
    min-height: 2.813vw; //54px;
    margin-right: 1.250vw; //24px;
    border: 1px solid #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

    @media screen and (max-width: 1024px) {
      margin-right: 14px;
      font-size: 16px;
      min-width: 44px;
      min-height: 44px;
    }
  }

  .title {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    font-weight: 700;
    font-size: 0.938vw; //18px;
    @media screen and (max-width: 1024px) {
      font-size: 16px;
    }
  }

  .sub-title {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    font-size: 0.833vw; //16px;
    @media screen and (max-width: 1024px) {
      font-size: 16px;
    }
  }

}

</style>