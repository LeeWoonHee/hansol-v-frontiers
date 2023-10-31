<template>
  <section class="hero__area-3 dark">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="heroArea">
            <div class="sec-title-wrapper">
              <h3 class="sec-title title-left">{{ title }}</h3>
            </div>
            <div class="hero__text-3">
              <p class="hero__text-animation">{{ description }}</p>
              <p class="hero__subtext-animation">{{ subDescription }}</p>
            </div>
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
  </section>
</template>

<script>
export default {
  name: 'TopHero',
  props: {
    title: {
      type: String,
      default: 'PROGRAM'
    },
    description: {
      type: String,
      default: '한솔 V FRONTIERS가 진행해온 프로그램들입니다'
    },
    subDescription: {
      type: String,
      default: '한솔그룹과 블루포인트가 진행해온 다양한 프로그램과 후기를 확인해 보세요.'
    },
    afterBar: {
      type: String,
      default: null
    }
  }
}
</script>

<style
    scoped
    lang="scss"
>
.hero__area-3::v-deep {
  padding-bottom: 221px;
  background-image: url("~@/assets/images/programImages/programHeaderImage.png");
  width: 100%;

  .container {
    //margin: 0 208px;

    .heroArea {

      .sec-title {
        font-weight: 700;
        font-size: 60px;
        line-height: 75px;
        padding-top: 0;
        margin-bottom: 57px;
        position: relative;

        //&::after {
        //  content: "";
        //  position: absolute;
        //  width: 239px;
        //  height: 1px;
        //  background-color: #D8D8D8;
        //  bottom: 50%;
        //  left: 400px;
        //}
      }

      .hero__text-3 {
        padding-top: 0;
        max-width: 903px;

        .hero__text-animation {
          font-weight: 600;
          font-size: 40px;
          line-height: 50px;
          color: #D8D8D8;
          padding-bottom: 10px;
        }

        .hero__subtext-animation {
          font-size: 20px;
          font-weight: 600;
          line-height: 25px;
        }
      }
    }
  }

  .hero3-img-ani {
    .hero3-img {
      opacity: 0.6;
      top: 144px;
      right: 0;
    }
  }

  @media screen and (max-width: 1024px) {
    padding-bottom: 0;
    .container {
      //margin: 0 208px;

      .heroArea {

        .sec-title {
          font-weight: 700;
          font-size: 60px;
          line-height: 75px;
          padding-top: 0;
          margin-bottom: 57px;
          position: relative;

          //&::after {
          //  content: "";
          //  position: absolute;
          //  width: 239px;
          //  height: 1px;
          //  background-color: #D8D8D8;
          //  bottom: 50%;
          //  left: 400px;
          //}
        }

        .hero__text-3 {
          padding-top: 0;
          max-width: 903px;

          .hero__text-animation {
            font-weight: 600;
            font-size: 40px;
            line-height: 50px;
            color: #D8D8D8;
            padding-bottom: 10px;
          }

          .hero__subtext-animation {
            font-size: 20px;
            font-weight: 600;
            line-height: 25px;
          }
        }
      }
    }
  }
}
</style>
