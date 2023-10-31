<template>
  <!-- Hero area start -->
  <section class="hero__area-3">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="hero__inner-3">
            <div class="sec-title-wrapper">
              <h3 class="sec-title title-left pb-20 lg:pb-40">BEYOND THE</h3>
              <h3 class="sec-title title-right">FRONTIERS</h3>
            </div>
            <div class="hero__text-3">
              <div class="pb-20 pt-20 lg:pt-0">
                <img
                    src="@/assets/images/logo/whitebox-hansol-logo.svg"
                    alt=""
                >
              </div>
              <span>
                한솔그룹과 블루포인트가 함께 지원하는 액셀러레이팅<br>
                프로그램 한솔 V FRONTIERS에 참여할<br>
                유망 스타트업을 찾습니다.
              </span>
            </div>
            <div class="scroll-down">
              <button><img
                  src="@/assets/imgs/icon/arrow-down-sm.png"
                  alt="arrow icon"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-obj">
      <!--      <img src="@/assets/images/pages/main/vfrontiersAnimationV2.gif" alt="" class="w-full lg:w-2/5">-->
      <video
          autoplay
          loop
          muted
          class="obj-video"
      >
        <source
            src="@/assets/videos/hero-animation.mp4"
            type="video/mp4"
            class="w-full lg:w-2/5"
        >
      </video>
    </div>
  </section>
  <!-- Hero area end -->
</template>

<script>
export default {
  name: 'HeroArea3',
}
</script>

<style
    scoped
    lang="scss"
>
.hero__area-3::v-deep {
  position: relative;
  background: url("~@/assets/images/pages/main/mainHeroBg.png") no-repeat center center/cover;

  &::after {
    content: none;
  }

  .hero__text-3 {
    img {
      width: 294px;
      height: 45px;
      @media screen and (max-width: 1024px) {
        width: 230px;
        height: 35px;
      }
    }

    span {
      //기존 비어있음
      font-size: 18px !important;
      font-weight: 600 !important;
      color: #EEE !important;
      @media screen and (max-width: 1024px) {
        font-size: 14px !important;
      }
    }

  }

  @media screen and (max-width: 1024px) {
    height: calc(var(--vh, 1vh) * 100);
  }

  .container {
    max-width: 80%;

    @media screen and (max-width: 1024px) {
      max-width: 100%;
      padding: 0 14px;
    }

    .hero__inner-3 {
      max-width: 86%;
      @media screen and (max-width: 1024px) {
        max-width: 100%;
      }
    }

    .scroll-down {
      margin-top: 0;
    }
  }

  .main-obj {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    bottom: 6.406vw; //123px
    right: 4.427vw; //85px

    @media screen and (max-width: 1024px) {
      bottom: 30.667vw;
      left: 0;
      right: 0;
    }

    .obj-video {
      width: auto;
      @media screen and (max-width: 1024px) {
        width: 100%;
      }
    }
  }

}

</style>
