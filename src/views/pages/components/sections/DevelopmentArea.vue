<template>
  <!-- Development area start -->
  <section class="development__area">
    <div class="container pt-60 lg:pt-130">

      <div class="w-full blex-top flex-wrap lg:flex-no-wrap">

        <div class="sec-title-wrapper">
          <div class="sec-sub-title">
            PICTURES
          </div>
          <h2 class="sec-title animation__char_come">프로그램 진행 사진</h2>
        </div>

        <div class="development__wrapper">
          <div class="development__content">
            <p>한솔 V FRONTIERS는 각 산업을 선도할 수 있는 혁신적인 스타트업을 발굴하고 지원하여 탄탄한 산업 생태계를
              구축해 나가는 것을 목표로 합니다.</p>
            <p>다양한 프로그램을 진행하며 블루포인트가 진행한
              다양한 프로젝트의 모습을 살펴보세요 .</p>
          </div>
          <!--  카테고리    -->
          <ul
              class="categories">
            <li
                class="image-category"
                :class="selected.photo === index ? 'clicked' : ''"
                v-for="(data, index) in localPhotos"
                :key="index"
                @click="selected.photo = index">
              {{ data.name }}
            </li>
            <!--            typeData[type - 1].photo-->
          </ul>
        </div>
      </div>
    </div>

    <!-- 슬라이더   -->
    <div class="w-full blex relative">
      <div class="w-full lg:w-7/10 blex overflow-hidden">
        <swiper
            :key="selected.photo"
            :options="{
                        slidesPerView: 1,
                        spaceBetween: 20,
                        loop: true,
                        pagination: {
                          el: '.swiper-pagination',
                          clickable: true
                        },
                        navigation: {
                          nextEl: '.swiper-button-next',
                          prevEl: '.swiper-button-prev'
                        }
                      }"
        >
          <swiper-slide
              v-for="(img, index) in localPhotos[selected.photo].links"
              :key="img"
          >
            <img @click="imageViewer = img" :src="img" alt="" class="w-full h-full object-cover cursor-pointer">
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>


  </section>
  <!-- Development area end -->
</template>

<script>
import 'swiper/swiper.min.css'

export default {
  name : 'DevelopmentArea',
  props: {
    photos: {
      type   : Array,
      default: () => []
    },
  },
  watch: {
    photos: {
      deep     : true,
      immediate: true,
      handler(val) {
        this.localPhotos = val
      }
    }
  },
  data : () => ({
    localPhotos: [],
    selected   : {
      photo: 0,
    },
    imageViewer: null
  })
}
</script>

<style scoped lang="scss">
.development__area::v-deep {
  background-color: #F4F4F4;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  jutify-content: center;
  align-items: center;
  padding-bottom: 260px;
  @media screen and (max-width: 1024px) {
    padding-bottom: 80px;
  }

  .container {
    max-width: 67%;
    @media screen and (max-width: 1024px) {
      max-width: 100%;
      padding: 0 24px;
    }
  }

  .sec-title-wrapper {
    width: 40%;

    @media screen and (max-width: 1024px) {
      width: 100%;
    }

    .sec-sub-title {
      font-size: 0.833vw; //16px;
      font-weight: 700;
      color: #0C6DFF;

      @media screen and (max-width: 1024px) {
        font-size: 16px;
      }
    }

    .sec-title {
      font-weight: 700;
      font-size: 2.604vw; //50px;
      color: #000;

      @media screen and (max-width: 1024px) {
        font-size: 32px;
        padding-top: 8px;
      }
    }
  }

  .development__wrapper {
    width: 60%;


    @media screen and (max-width: 1024px) {
      width: 100%;
    }

    .categories {
      display: flex;
      jsutify-content: flex-start;
      align-items: center;

      .image-category {
        padding-bottom:0;
        font-weight: 600;
        font-size: 1.042vw; //20px;
        color: #898989;
        transition: all .2s;
        position: relative;
        margin-right: 1.563vw; //30px;

        @media screen and (max-width: 1024px) {
          padding-bottom: 0;
          font-size: 16px;
          margin-left: 10px;
        }


        &:hover {
          cursor: pointer;
          color: #000;
          transition: all .2s;
        }

        &.clicked {
          color: #000;

          &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translate(-255%, -50%);
            background: #000;
            width: 4px;
            height: 4px;
            border-radius: 50%;
          }
        }
      }
    }

    .development__content {

      @media screen and (max-width: 1024px) {
        padding: 20px 0;
      }

      p {
        font-size: 0.833vw; //16px;
        color: #000;
        @media screen and (max-width: 1024px) {
          font-size: 14px;
        }
      }
    }

  }

  .swiper-container {
    display: flex;
    jutify-content: center;
    align-items: center;
    align-content: center;
    width: 66%;


    .swiper-wrapper {
      width: 36.458vw; //700px;
      height: 23.229vw; //350px;
      @media screen and (max-width: 1024px) {
        width: 224px;
        height: 134px;
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
      right: 10%;
      background: url('~@/assets/images/icons/rightCircleArrow.svg') no-repeat center center/contain;
      @media screen and (max-width: 1024px) {
        right: 3%;
      }
    }

    .swiper-button-prev {
      left: 10%;
      @media screen and (max-width: 1024px) {
        left: 3%;
      }
      background: url('~@/assets/images/icons/leftCircleArrow.svg') no-repeat center center/contain;
    }
  }

}

</style>
