<template>
  <section class="portfolio__area-4 dark">
    <div class="container-fluid line_4">
      <div class="row">
        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
          <div class="portfolio__sec-title text-anim">
            <h2 class="sec-subtitle-6">VIDEOS</h2>
            <h3 class="sec-title-6 title-anim">PROGRAM<br>ARCHIVE HISTORY</h3>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
        <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8 portfolioImgBox">
          <div class="portfolio__wrapper-4">
            <div class="swiper portfolio__slider-4">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="portfolio__item-4">
                    <a href="portfolio.html">
                      <!--                      <div class="portfolio__item-inner">-->
                      <!--                        <div class="portfolio__title-wrapper">-->
                      <!--                          <h4 class="portfolio__title-4">Lionpro Agency</h4>-->
                      <!--                          <h5 class="portfolio__subtitle-4">02 May 2021</h5>-->
                      <!--                        </div>-->
                      <!--                        <div class="portfolio__icon-link">-->
                      <!--                          <span class="portfolio__icon-4"><i class="fa-solid fa-arrow-right"></i></span>-->
                      <!--                        </div>-->
                      <!--                      </div>-->
                      <img
                          src="@/assets/images/programImages/videosImage.png"
                          alt="Portfolio Image"
                      >
                    </a>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="portfolio__item-4">
                    <a href="portfolio.html">
                      <!--                      <div class="portfolio__item-inner">-->
                      <!--                        <div class="portfolio__title-wrapper">-->
                      <!--                          <h4 class="portfolio__title-4">Lionpro Agency</h4>-->
                      <!--                          <h5 class="portfolio__subtitle-4">02 May 2021</h5>-->
                      <!--                        </div>-->
                      <!--                        <div class="portfolio__icon-link">-->
                      <!--                          <span class="portfolio__icon-4"><i class="fa-solid fa-arrow-right"></i></span>-->
                      <!--                        </div>-->
                      <!--                      </div>-->
                      <img
                          src="@extra/portfolio/4/2.jpg"
                          alt="Portfolio Image"
                      >
                    </a>
                  </div>
                </div>

                <!--                <div class="swiper-slide">-->
                <!--                  <div class="portfolio__item-4">-->
                <!--                    <a href="portfolio.html">-->
                <!--                      <div class="portfolio__item-inner">-->
                <!--                        <div class="portfolio__title-wrapper">-->
                <!--                          <h4 class="portfolio__title-4">Lionpro Agency</h4>-->
                <!--                          <h5 class="portfolio__subtitle-4">02 May 2021</h5>-->
                <!--                        </div>-->
                <!--                        <div class="portfolio__icon-link">-->
                <!--                          <span class="portfolio__icon-4"><i class="fa-solid fa-arrow-right"></i></span>-->
                <!--                        </div>-->
                <!--                      </div>-->
                <!--                      <img src="@extra/portfolio/4/1.jpg" alt="Portfolio Image">-->
                <!--                    </a>-->
                <!--                  </div>-->
                <!--                </div>-->
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>

    <div class="portfolio__slider-4-nav">
      <div class="swiper-button-prev-4"><i class="fa-solid fa-arrow-left"></i></div>
      <div class="swiper-button-next-4"><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "VideosProgramArea"
}
</script>

<style
    scoped
    lang="scss"
>
.portfolio__area-4::v-deep {
  font-family: 'SUIT';
  font-style: normal;
  padding-top: 170px;
  padding-bottom: 172px;
  padding-left: 167px;

  .container-fluid {
    .portfolio__sec-title {

      .sec-subtitle-6 {
        color: #0C6DFF;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        margin-bottom: 8px;
      }

      .sec-title-6 {
        font-size: 50px;
        font-weight: 700;
        line-height: 62px;
        margin-bottom: 30px;
      }

      p {
        max-width: 480px;
      }
    }

    .portfolioImgBox {

      .portfolio__wrapper-4 {
        position: relative;

        .swiper-wrapper {

          .portfolio__item-4 {
            img {
              width: 560px;
              height: 700px;
            }
          }
        }
      }
    }
  }

  .portfolio__slider-4-nav {


    .swiper-button-prev-4 {
      color: #C0C0C0;
      display: flex;

    }

    .swiper-button-next-4 {
      color: #C0C0C0;
    }
  }

}

.swiper-slide {
  width: 375.5px;
  margin-right: 120px;
}
</style>