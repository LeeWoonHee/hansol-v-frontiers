<template>
  <section class="hero__area-3">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="heroArea">
            <div class="sec-title-wrapper">
              <h2 class="sec-sub-title">Digital</h2>
              <h3 class="sec-title title-left">Mark</h3>
              <h3 class="sec-title title-right">eting</h3>
            </div>
            <div class="hero__text-3">
              <p class="hero__text-animation">Static and dynamic secure code review can prevent a day before your
                product is even released. We can integrate with your dev environment</p>
            </div>
            <div class="scroll-down">
              <button><img
                  src="@extra/home-7/scroll.png"
                  alt="arrow icon"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="video-info">
        <div class="video-intro">
          <input
              id="video_check"
              type="checkbox"
          >
          <div class="intro-title">
            <h4 class="video-title">Watch <span>video intro</span></h4>
            <h4 class="video-title close-video-title">Close <span>video intro</span></h4>
          </div>
          <div class="video">
            <video
                src="@/assets/videos/hero-3.mp4"
                loop
                muted
                autoplay
                playsinline
            ></video>
          </div>

        </div>
      </div>
    </div>

    <div class="hero3-img-ani">
      <img
          src="@/assets/images/test-images/heroTest1.jpg"
          alt="Hero Image"
          class="hero3-img"
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "NewsTopSection"
}
</script>

<style scoped>

</style>