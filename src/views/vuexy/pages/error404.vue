<!-- =========================================================================================
    File Name: Error404.vue
    Description: 404 Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="h-screen flex w-full ">
    <div
        class="relative flex items-center error justify-center flex-col sm:w-1/2 md:w-3/5 lg:w-3/4 xl:w-1/2 mx-auto text-center"
    >
      <div class="error-logo-box">
        <img
            src="@/assets/images/errorImages/error-logo.svg"
            alt="error-logo"
            class="w-full blex"
        >
      </div>
      <div class="error-text-box">
        <h1 class="error-h1">404</h1>
        <h2 class="error-h2">죄송합니다. 요청하신 페이지를 찾을 수 없습니다</h2>
        <div class="error-text">
          <p>잘못된 주소를 입력하셨거나, 찾으시는 페이지의 주소가 변경,</p>
          <p>삭제되어 찾을 수 없습니다.</p>
        </div>


        <!--   buttons     -->
        <div class="error-btn-wrapper w-full blex">

          <div class="error-btn w-2/5 blex-right mr-8 btn-404-left ">
            <vs-button
                class="btn-404"
                to="/"
            >이전 페이이지<i><img
                src="~@/assets/images/black-arrow.svg"
                alt="black arrow"
            /></i>
            </vs-button>
          </div>

          <div class="error-btn w-2/5 blex-left ml-8 btn-404-right">
            <vs-button
                class="btn-404 "
                to="/"
            >홈으로 가기<i><img
                src="~@/assets/images/white-arrow.svg"
                alt="white arrow"
            /></i>
            </vs-button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "error404",
  beforeDestroy() {
    this.$emit( 'destroy' )
  },
  mounted() {
    this.$emit( 'mounted' )
  },

}
</script>

<style
    scoped
    lang="scss"
>
.h-screen::v-deep {
  background-image: url('~@/assets/images/errorImages/error-bg.png');

  .error-logo-box {
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    opacity: .2;
    top: 25%;
  }

  .error-text-box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  .error-h1 {
    width: 100%;
    font-size: 170px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 30px;
    line-height: 212px;
    position: relative;

    @media screen and (max-width: 1024px) {
      font-size: 80px;
      margin-bottom: 8px;
      line-height:1;
      margin-top:205px;
    }

    &:before {
      content: '';
      display: block;
      width: 77px;
      height: 1px;
      background-color: #ffffff;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      @media screen and (max-width: 1024px) {
        display: none;
      }
    }
  }


  .error-h2 {
    width: 100%;
    font-size: 30px;
    font-weight: 700;
    color: #D8D8D8;
    margin-bottom: 14px;
    @media screen and (max-width: 1024px) {
      font-size: 16px;
      margin-bottom: 10px;
    }
  }

  .error-text {
    width: 100%;
    margin-bottom: 52px;
    @media screen and (max-width: 1024px) {
      margin-bottom: 37px;
    }

    p {
      font-size: 18px;
      font-weight: 600;
      color: #A7A7A7;
      line-height: 22px;
      @media screen and (max-width: 1024px) {
        font-size: 13px;
      }
    }
  }

  .error-btn-wrapper {

    .btn-404 {
      width: 178px;
      height: 55px;
      border-radius: 74px;
      font-weight: 700;
      font-size: 16px;
      @media screen and (max-width: 1024px) {
        font-size: 15px;
      }
    }

    .btn-404-left {
      .vs-button-filled {
        background: #FFFFFF !important;
      }

      .btn-404 {
        color: #000;

        img {
          width: 12px;
          height: 12px;
          margin-left: 12px;
        }
      }
    }

    .btn-404-right {
      .vs-button-filled {
        background: rgba(0,0,0,0) !important;

      }

      .btn-404 {
        border: 1px solid #898989;

        img {
          width: 12px;
          height: 12px;
          margin-left: 12px;
        }
      }
    }
  }

}


</style>

