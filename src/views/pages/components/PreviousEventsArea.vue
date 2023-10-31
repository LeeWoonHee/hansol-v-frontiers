<template>
  <section>
    <div class="previous-events-area wf_panel">
      <div class="container">
        <div class="row">
          <div class="col-xxl-12">
            <div class="cta__content-3">
              <p class="cta__sub-title-2">PREVIOUS EVENTS</p>
              <h2 class="cta__title-2">지난 프로그램이 <br class="block lg:hidden">궁금하신가요?</h2>
              <p class="cta__sub-title-3">V FRONTIERS에서는 매 기수 다양한 <br class="block lg:hidden">액셀러레이팅 프로그램을 <br class="block lg:hidden">진행하였습니다!</p>
              <div class="btn_wrapper">
                <router-link
                    to="/programs?type=1"
                    class="wc-btn-black btn-hover btn-item"
                >
                  <span></span>
                  <p class="lg:mr-12 mr-6" >
                  지난 프로젝트<br>보러가기
                </p>
                  <img src="@/assets/images/icons/previous-event-arrow.svg"/>
<!--                  <i class="fa-solid fa-arrow-right"></i>-->
                </router-link>
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
  name: 'PreviousEventsArea'
}
</script>

<style
    scoped
    lang="scss"
>
.previous-events-area::v-deep {
  .btn_wrapper a {
    display:flex;
    align-items: center;
    justify-content: center;
    p{
      font-weight:700;
      font-size:15px;
    }
  }

  background-color: #fff;
  padding: 250px 0;

  .cta__content-3{
    width:100%;
  }
  @media screen and (max-width: 1024px) {
    padding: 150px 24px;
  }

  .cta__sub-title-2 {
    color: #0C6DFF;
    font-size: 1.250vw; //24px;
    font-weight: 700;

    @media screen and (max-width: 1024px) {
      font-size: 16px;
    }
  }

  .cta__title-2 {
    font-weight: 700;
    font-size: 3.125vw; //60px;
    color: #1B1B1B;
    padding-bottom: 23px;
    @media screen and (max-width: 1024px) {
      font-size: 32px;
    }
  }

  .cta__sub-title-3 {
    font-size: 1.250vw; // 24px;
    font-weight: 500;
    color: #292929;
    padding-bottom: 59px;
    @media screen and (max-width: 1024px) {
      font-size: 16px;
    }
  }

  .btn_wrapper {
    width: 189px;
    height: 189px;
    @media screen and (max-width: 1024px) {
      width: 148px;
      height: 148px;
    }

    a {
      width: 189px;
      height: 189px;
      border-color: #898989;
      font-weight: 700;
      font-size: 15px;
      text-align: center;

      @media screen and (max-width: 1024px) {
        width: 148px;
        height: 148px;
        font-size: 14px;
      }

      &:visited {
        color: #898989;
      }

      &:hover {
        color: #000;
      }
    }

    .fa-arrow-right {
      rotate: -45deg;
      width: 10px;
      height: 10px;

    }
  }
}
</style>
