<template>
  <!-- Testimonial area start -->
  <section class="testimonial__area-4">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="testimonial__sec-title text-anim">
            <h2 class="sec-subtitle-6">REVIEWS</h2>
            <h3 class="sec-title-6 title-anim">프로그램 후기</h3>
            <p>한솔 V FRONTIERS는 각 산업을 선도할 수 있는<br class="block lg:hidden"> 혁신적인 스타트업을 발굴하고<br class="lg:block hidden">
              지원하여 탄탄한 산업 생태계를 구축해 나가는 것을 목표로 합니다.</p>
          </div>
        </div>
        <div
            class="swiper testimonial__slider-4"
            v-if="localReviews"
        >
          <div class="swiper-wrapper">
            <div
                class="swiper-slide testimonial__slide-4 swiper-slide-item"
                v-for="(review, index) in localReviews"
                :key="index"
            >
              <img
                  class="testimonial__img-4"
                  :src="review.thumbnail"
                  alt="Testimonial Image"
              >
              <div class="testimonial__info-4">
                <h4 class="testimonial__feedback-4">{{ review.title }}</h4>
                <p>{{ review.text }}</p>
              </div>
            </div>
          </div>

        </div>
        <div class="testimonial__btn-4">
          <div
              class="next-button swipper-btn"
              slot="button-next"
          >
            <div
                class="swiper-button-next"
                slot="button-next"
            ></div>
          </div>
          <div
              class="prev-button swipper-btn"
              slot="button-prev"
          >
            <div
                class="swiper-button-prev"
                slot="button-prev"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Testimonial area end -->
</template>

<script>
export default {
  name : 'TestimonialArea4',
  props: {
    reviews: {
      type   : Array,
      default: () => []
    },
  },
  watch: {
    reviews: {
      deep     : true,
      immediate: true,
      handler(val) {
        this.localReviews = val
      }
    }
  },
  data : () => ({
    localReviews: [],
  })
}
</script>

<style
    scoped
    lang="scss"
>
.testimonial__area-4::v-deep {
  background-color: #f4f4f4;
  padding: 120px 0;

  .container {
    position: relative;
  }

  .testimonial__btn-4 {
    position: absolute;
    width: 110%;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
    @media screen and (max-width: 1024px) {
      top: 70%;
      width:104%;
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
        width: 45px;
        height: 45px;
        top: 50%;
      }
    }

    .swipper-btn {
      .swiper-button-next {
        background: url('~@/assets/images/icons/rightCircleArrow.svg') no-repeat center center/contain;
      }

      .swiper-button-prev {
        background: url('~@/assets/images/icons/leftCircleArrow.svg') no-repeat center center/contain;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 80px 0;
  }


  .testimonial__sec-title {
    p {
      width: 100%;
      font-size: 0.833vw; //16px;
      max-width: 100%;
      color: #000;

      @media screen and (max-width: 1024px) {
        font-size: 16px;
      }
    }
  }

  .sec-subtitle-6 {
    border: unset;
    font-size: 0.833vw; //16px;
    font-weight: 700;
    color: #0C6DFF;
    width: 100%;

    @media screen and (max-width: 1024px) {
      font-size: 16px;
    }
  }

  .sec-title-6 {
    color: #000;
    font-weight: 700;
    font-size: 2.604vw; //50px;

    @media screen and (max-width: 1024px) {
      font-size: 32px;
      padding-top: 8px;
    }
  }

  .swiper-wrapper {
    .swiper-slide {
      background-color: #EEEEEE;
      color: #000;
      height: 410px !important;
      @media screen and (max-width: 767px) {
        height: 330px !important;
      }

      &:hover {
        cursor: pointer;
      }

      .testimonial__img-4 {
        background-color: #fff;
        border-radius: 50%;
        width: 85px;
        height: 85px;
        padding: 10px;
        margin-bottom: 20px;
        object-fit: contain;

        @media screen and (max-width: 1024px) {
          width: 74px;
          height: 74px;
        }
      }

      .testimonial__info-4 {
        p {
          color: #000;
          @media screen and (max-width: 1024px) {
            font-size: 14px;
          }
        }

        .testimonial__feedback-4 {
          background-color: transparent;
          color: #000;
          font-weight: 600;
          padding: 0;
          margin-bottom: 4px;
        }
      }
    }

  }

}
</style>
