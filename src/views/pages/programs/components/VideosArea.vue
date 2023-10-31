<template>
  <section class="faq__area dark">
    <div class="container g-0 line pb-140">
      <div class="line-3"></div>
      <div class="row">
        <div class="faqImageBox col-xxl-6 col-xl-6 col-lg-6 col-md-6">
          <div class="faq__img">
            <img
                src="@/assets/images/programImages/videoImage.png"
                alt="FAQ Image"
                data-speed="auto"
            >
          </div>
          <p>한솔 V FRONTIERS는 각 산업을 선도할 수 있는 혁신적인 스타트업을 발굴하고 지원하여 탄탄한 산업 생태계를 구축해 나가는 것을 목표로 합니다.</p>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
          <div class="faq__content">
            <h2 class="faqMainTitle">VIDEOS</h2>
            <h3 class="faq__title title-anim">프로그램 진행 영상</h3>
            <div class="faq__list">
              <div
                  class="accordion"
                  id="accordionExample"
              >
                <div class="faqItem">
                  <h2>
                    2기 메인 영상
                  </h2>
                </div>
                <div class="faqItem">
                  <h2>
                    모집/선발 스케치 영상
                  </h2>
                </div>
                <div class="faqItem">
                  <h2>
                    프로그램 스케치 영상
                  </h2>
                </div>
                <div class="faqItem">
                  <h2>
                    설명회 영상
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "VideosArea",
  data: () => ( {
    isRed: false
  } )
}
</script>

<style
    scoped
    lang="scss"
>
.faq__area::v-deep {
  background:#1E1E1E;
  .container {
    max-width: 1400px;
    padding-top:164px;
    padding-bottom:156px;
    &:before {
      background-color: #898989;
    }

    &:after {
      background-color: #898989;
    }

    .line-3 {
      background-color: #898989;
    }
    .faqImageBox{
      padding-left:calc((var(--bs-gutter-x) * .5) + 12px);
      .faq__img{
        width:763px;
        height:430px;
        margin-bottom: 29px;
        img{
          width:763px;
          height:430px;
        }
      }
      p{
        max-width:540px;
        font-weight:400;
        font-size: 16px;
        line-height: 24px;
        color: #C8C8C8;
      }
    }

    .faq__content {
      padding-left:150px;
      .faqMainTitle {
        color: #0C6DFF;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 8px;
      }

      .faq__title {
        margin-bottom: 46px;
      }

      .faq__list {
        border-top: 1px solid #898989;
        padding-top:31px;
        .faqItem {
          margin-bottom:28px;
          h2 {
            color: #898989;
            font-size: 20px;
            font-weight: 600;
            line-height: 25px;
            cursor: pointer;
          }
        }
      }
    }
  }
}

</style>