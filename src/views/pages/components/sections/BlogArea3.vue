<template>
  <!-- Blog area start -->
  <section class="blog__area-3 pb-140 blog__animation">

    <div class="row w-full blex pt-110 lg:pt-200 pb-0 lg:pb-80 px-24 lg:px-0">
      <div class="col-xxl-12">
        <div class="sec-title-wrapper text-anim">
          <h2 class="sec-sub-title">TARGETS</h2>
          <h3 class="sec-title title-anim">
            V FRONTIERS가<br>모집하는 분야입니다</h3>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="blex w-full">
        <!--        <div-->
        <!--            v-for="(type, index) in $store.state.program.types"-->
        <!--            :key="type.id"-->
        <!--            class="w-full lg:w-1/2 mb-80 lg:mb-120">-->
        <!--   더미용 데이터     -->
        <div
            v-for="(type, index) in types"
            :key="type.id"
            class="w-full lg:w-1/2 mb-100 lg:mb-120">
          <article class="blog__item-3">

            <div class="blog__img-wrapper-3">
              <a :href="type.link"
                 target="_blank">
                <div class="img-box">
                  <img class="image-box__item" :src="type.thumbnail || require('@/assets/imgs/blog/3/1.jpg')"
                       alt="Blog Thumbnail">
                  <img class="image-box__item" :src="type.thumbnail || require('@/assets/imgs/blog/3/1.jpg')"
                       alt="BLog Thumbnail">
                </div>
              </a>
            </div>

            <div class="blog__info-3">
              <h5>
                <a :href="type.link"
                   target="_blank"
                   class="blog__title-3">
                  {{ type.name || '-' }}
                </a>
              </h5>
              <h4 class="blog__meta">
                {{ type.description || '-' }}
              </h4>
              <div class="blex-left flex-no-wrap">
                <a :href="type.link"
                   target="_blank"
                   class="blog__btn">
                  협력계열사 : {{ type.category }}
                  <span><i
                      class="fa-solid fa-arrow-right"></i></span></a>
                <div class="ml-12 blex">
                  <img src="@/assets/images/icons/rightArrow.svg" alt="">
                </div>
              </div>
            </div>

          </article>
        </div>

      </div>
    </div>
  </section>
  <!-- Blog area end -->
</template>

<script>
export default {
  name: 'BlogArea3',
  data: () => ({
    types: [
      {
        thumbnail  : require('@/assets/images/pages/main/meta.jpg'),
        name       : '메타버스/블록체인',
        description: 'AR, VR, WEB 3.0, NFT(Non-fungible token) 등',
        category   : '한솔홀딩스',
        link       : 'http://hansol.com/gateway/'
      },
      {
        thumbnail  : require('@/assets/images/pages/main/life.jpg'),
        name       : '라이프 스타일',
        description: '홈인테리어, 이커머스, 스마트헬스, 스마트워크 등',
        category   : '한솔 홈데코',
        link       : 'https://www.hansolhomedeco.com/'
      },
      {
        thumbnail  : require('@/assets/images/pages/main/pet.jpg'),
        name       : '펫코노미',
        description: '펫푸드, 펫리빙, 펫테크 등',
        category   : '스티커스코퍼레이션',
        link       : 'https://www.drmamma.co.kr/'
      },
      {
        thumbnail  : require('@/assets/images/pages/main/smart.jpg'),
        name       : '스마트 모빌리티',
        description: '디지털물류, 마이크로 모빌리티, 교통관리 시스템 등',
        category   : '한솔 홀딩스, 한솔 로지스틱스',
        link       : 'https://www.hansollogistics.com/'
      },
      {
        thumbnail  : require('@/assets/images/pages/main/ict.jpg'),
        name       : 'ICT 서비스 & 솔루션',
        description: 'AI, IoT, Cloud service, 통신, 소프트웨어 등',
        category   : '한솔테크닉스, 한솔인티큐브, 한솔코에버',
        link       : 'http://www.hansoltechnics.com/kr/'
      },
      {
        thumbnail  : require('@/assets/images/pages/main/package.jpg'),
        name       : '차세대 패키징',
        description: '친환경 패키징, 재활용, 업사이클링 등',
        category   : '한솔제지',
        link       : 'http://www.hansolpaper.co.kr/main'
      },
      {
        thumbnail  : require('@/assets/images/pages/main/env.jpg'),
        name       : '친환경 소재',
        description: '지속가능 소재, 탈 플라스틱, 친환경 공정 등',
        category   : '한솔제지, 한솔홈데코, 한솔페이퍼텍',
        link       : 'https://www.hansolpapertech.co.kr/home/'
      }
    ]
  })
}
</script>

<style scoped lang="scss">
.blog__area-3::v-deep {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;

  .sec-title-wrapper {
    .sec-sub-title {
      color: #0C6DFF;
      font-weight: 700;
    }

    .sec-title {
      width: 100%;
      font-size: 2.604vw; //50px;
      line-height: 1.2;
      font-weight: 700;

      @media screen and (max-width: 1024px) {
        font-size: 32px;
      }
    }
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    max-width: 83%;
    margin: auto 0;

    @media screen and (max-width: 1024px) {
      max-width: 100%;
      padding: 0 24px;
    }

    .blog__item-3 {
      .blog__img-wrapper-3 {
        .img-box {
          width: 22.604vw; //434px;
          height: 22.604vw; //434px;

          @media screen and (max-width: 1024px) {
            width: 312px;
            height: 312px;
          }

          .image-box__item {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }

  }
}

</style>
