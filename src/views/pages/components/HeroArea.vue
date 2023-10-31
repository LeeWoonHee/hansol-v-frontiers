<template>
  <section class="dark hero__area-3">
    <div class="heroContainer container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="heroArea">
            <div class="sec-title-wrapper">
              <h3 class="sec-title title-left">BEYOND THE</h3>
              <h3 class="sec-title heroAreaBotTitle">FRONTIERS</h3>
            </div>
            <div class="sec-sub-title">
              <img
              src="@/assets/images/logo/hansolBluePointLogo.svg"
              alt="hansol bluepoint logo"
              >
            </div>
            <div class="hero__text-3">
              <p class="hero__text-animation">Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet, </p>
            </div>
            <div class="scroll-down down-scroll">
              <button><img
                  class="downScrollIcon"
                  src="@extra/home-7/white-scroll.png"
                  alt="arrow icon"
              ></button>

            </div>
          </div>
        </div>
      </div>
    </div>
    <!--    <div class="wrapper">-->
    <!--      <div class="video-info">-->
    <!--        <div class="video-intro">-->
    <!--          <input-->
    <!--              id="video_check"-->
    <!--              type="checkbox"-->
    <!--          >-->
    <!--          <div class="intro-title">-->
    <!--            <h4 class="video-title">Watch <span>video intro</span></h4>-->
    <!--            <h4 class="video-title close-video-title">Close <span>video intro</span></h4>-->
    <!--          </div>-->
    <div class="heroAreaVideo">
      <video
          class="heroVideo"
          src="@/assets/videos/heroAreaBackgroundVideo.mp4"
          loop
          muted
          autoplay
          playsinline
      ></video>
    </div>

    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->

    <!--    <div class="hero3-img-ani">-->
    <!--      <img-->
    <!--          src="@/assets/images/test-images/heroTest1.jpg"-->
    <!--          alt="Hero Image"-->
    <!--          class="hero3-img"-->
    <!--      >-->
    <!--    </div>-->
  </section>
</template>

<script>
export default {
  name: "HeroArea",
  mounted() {
  }
}
</script>

<style
    scoped
    lang="scss"
>
.hero__area-3::v-deep {
  position: relative;
  height: calc(var(--vh, 1vh) * 100);
  width:100%;

  .heroContainer {
    margin: 0 200px;

    .heroAreaBotTitle {
      text-align:right;

      .down-scroll{


      }
    }
  }
  .downScrollIcon{
    z-index: 10;
    margin-top:59px;
  }

  .heroAreaVideo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);

    .heroVideo {
      width: 100%;
      height: calc(var(--vh, 1vh) * 100);
    }
  }
}
</style>