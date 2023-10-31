<template>
  <div class="poster-area">

    <div class="w-full lg:w-4/5 blex-top flex-wrap lg:flex-no-wrap px-24 lg:px-0 relative">
      <div class="w-full lg:w-2/5 blex-left items-start">
        <div class="sec-sub-title">
          POSTERS
        </div>
        <div class="sec-title">
          프로그램 홍보 포스터
        </div>
      </div>

      <div class="w-full lg:w-3/5 blex overflow-hidden lg:pl-0 pl-40">
        <swiper
            :options="{
                        slidesPerView: $store.state.windowWidth < 1200 ? 1.2 : 2.5,
                        spaceBetween: 20,
                        loop: false,
                        pagination: {
                          el: '.swiper-pagination',
                          clickable: true
                        },
                        navigation: {
                          nextEl: '.swiper-button-next',
                          prevEl: '.swiper-button-prev'
                        }
                      }">
          <swiper-slide
              v-for="(img, index) in posts"
              :key="img">
            <img @click="imageViewer = img" :src="img" alt="" class="w-full h-full object-cover cursor-pointer">
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>

  </div>


</template>

<script>
export default {
  name : "PosterArea",
  props: {
    posts: {
      type   : Array,
      default: () => []
    },
  },
  watch: {
    posts: {
      deep     : true,
      immediate: true,
      handler(val) {
        this.localPosts = val
      }
    }
  },
  data : () => ({
    localPosts : [],
    imageViewer: null
  })
}
</script>

<style scoped lang="scss">
.poster-area::v-deep {
  background-color: #0E0E0E;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  padding: 170px 0;

  @media screen and (max-width: 1024px) {
    padding: 80px 0;
  }


  .sec-sub-title {
    font-size: 0.833vw; //16px;
    font-weight: 700;
    color: #0C6DFF;
    width: 100%;
    display: flex;
    justify-content: flex-start;

    @media screen and (max-width: 1024px) {
      font-size: 16px;
      padding-bottom: 0;
    }
  }

  .sec-title {
    font-weight: 700;
    font-size: 2.604vw; //50px;
    color: #fff;

    @media screen and (max-width: 1024px) {
      font-size: 32px;
      padding-top: 8px;
      padding-bottom: 40px;
    }
  }

  .swiper-container {
    display: flex;
    jutify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;

    .swiper-wrapper {
      width: 23.229vw; //446px;
      height: 32.813vw; //630px;
      @media screen and (max-width: 1024px) {
        width: 219px; //446px;
        height: 309px; //630px;
      }

      .swiper-slide {
        width: 100% !important;
      }
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
      display: none;
    }

    .swiper-button-next,
    .swiper-button-prev {
      width: 3.125vw; //60px;
      height: 3.125vw; //60px;

      @media screen and (max-width: 1024px) {
        width: 34px;
        height: 34px;
        top: 60%;
      }
    }


    .swiper-button-next {
      right: 3%;
      background: url('~@/assets/images/icons/rightCircleArrow.svg') no-repeat center center/contain;
    }

    .swiper-button-prev {
      left: 30%;
      @media screen and (max-width: 1024px) {
        left: 3%;
      }
      background: url('~@/assets/images/icons/leftCircleArrow.svg') no-repeat center center/contain;
    }

  }

}

</style>