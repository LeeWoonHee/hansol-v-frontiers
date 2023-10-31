<template>
  <section class="hero__area-3 dark">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="heroArea">
            <div class="sec-title-wrapper">
              <h3 class="sec-title title-left ">PROGRAM</h3>
            </div>
            <div class="hero__text-3">
              <p class="hero__text-animation">한솔 V FRONTIERS가 진행해온 프로그램들입니다</p>
              <p class="hero__subtext-animation">한솔그룹과 블루포인트가 진행해온 다양한 프로그램과<br class="lg:hidden block"> 후기를 확인해 보세요.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="hero3-img-ani">
        <img
            src="@/assets/images/programImages/programHeaderLogo.svg"
            alt="Hero Image"
            class="hero3-img"
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProgramTopSection"
}
</script>

<style
    scoped
    lang="scss"
>
.hero__area-3::v-deep {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 11.510vw; //221px;
  background-image: url("~@/assets/images/programImages/programHeaderImage.png");
  @media screen and (max-width: 1024px) {
    padding-bottom: 80px;
  }

  .container {
    max-width: 78%;

    @media screen and (max-width: 1024px) {
      max-width: 100%;
    }

    .heroArea {

      .sec-title {
        font-weight: 700;
        font-size: 60px;
        padding-top: 0;
        margin-bottom: 57px;
        position: relative;

        @media screen and (max-width: 1024px) {
          font-size: 32px;
        }

        &::after {
          content: "";
          position: absolute;
          width: 239px;
          height: 1px;
          background-color: #D8D8D8;
          bottom: 50%;
          left: 400px;

          @media screen and (max-width: 1024px) {
            bottom: -30px;
            width: 93px;
            left: 0;
          }

        }
      }

      .hero__text-3 {
        padding-top: 0;
        max-width: 47.031vw; //903px;
        @media screen and (max-width: 1024px) {
         max-width: 100%;
        }

        .hero__text-animation {
          font-weight: 600;
          font-size: 2.083vw; //40px;
          color: #D8D8D8;
          padding-bottom: 10px;

          @media screen and (max-width: 1024px) {
            font-size: 18px;
          }
        }

        .hero__subtext-animation {
          font-size: 1.042vw; //20px;
          font-weight: 600;
          color: #D0D0D0;

          @media screen and (max-width: 1024px) {
            font-size: 14px;
          }
        }
      }
    }
  }

  .hero3-img-ani {
    .hero3-img {
      opacity: 0.6;
      margin-right: 5.208vw; //100px;
      margin-bottom: 3.646vw; //l70px;
      width: 40%;
      @media screen and (max-width: 1024px) {
        width: 100%;
      }
    }
  }
}
</style>