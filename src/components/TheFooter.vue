<template>
  <!-- Footer area start -->
  <footer class="footer__area-3">
    <div class="footer__top-3">
      <div class="footer__top-wrapper-3">
        <div class="footer__logo-3">
          <img
              class="footer__logo-img"
              src="@/assets/images/logo/whitebox-hansol-logo.svg"
              alt="Footer Logo"
          >
        </div>
        <!--        <div class="footer__social-3">-->
        <!--          <ul>-->
        <!--            <li><a href="#">facebook</a></li>-->
        <!--            <li><a href="#">Twitter</a></li>-->
        <!--            <li><a href="#">Linkedin</a></li>-->
        <!--            <li><a href="#">Instagram</a></li>-->
        <!--          </ul>-->
        <!--        </div>-->
        <div class="footer__contact-3 footer-right">
          <!--          기존 let's talk-->
          <!--          <router-link-->
          <!--              class="end font-bold"-->
          <!--              to="/"-->
          <!--          >LET'S TALK-->
          <!--          </router-link>-->
          <!--          <div class="footer-right-top">-->
          <!--            LET'S TALK-->
          <!--          </div>-->
          <div class="w-full footer-right-bottom">
            <div class="w-full">
              <div class="w-full font-bold text-white">
                BLUEPOINT PARTNERS
              </div>
              <div class="w-full text-sm py-2 text-white">
                본사 | 대전광역시 유성구 엑스포로 1, 엑스포타워 21층
              </div>
              <div class="w-full text-sm text-white">
                서울 | 강남구 역삼로 172 MARU 360 4층
              </div>
            </div>
            <div class="w-full pt-10">
              <div class="w-full font-bold text-white">
                블루포인트파트너스 오픈이노베이션팀
              </div>
              <div class="w-full text-sm py-2 text-white">
                <a
                    class="text-sm footer-mail"
                    href="mailto:oi-info@bluepoint.ac"
                >oi-info@bluepoint.ac</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer__btm-3">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xxl-4 col-xl-4 col-lg-4">
            <div class="footer__copyright-3">
              <p class="text-sm">
                Copyright © 2023 . All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer area end -->
</template>

<script>
export default {
  name: 'TheFooter',
  mounted() {
    // await document.body.insertBefore(this.$el, document.body.firstChild)
    // await document.body.appendChild(this.$el)
    this.$emit('mounted')
  },
  beforeDestroy() {
    this.$emit('destroy')
  }
}
</script>

<style
    scoped
    lang="scss"
>
.footer__area-3::v-deep {
  .footer-mail {
    text-transform: lowercase !important;
  }

  .footer-right-top {
    display: flex;
    font-weight: 600;
    font-size: 9vw;
    color: #fff;
    text-align: center;
    justify-content: center;
    width: 100%;
    align-items: center;
  }

  .footer__logo-img {
    width: 416px;
    margin-bottom: 0;
    @media screen and (max-width: 1024px) {
      width: 100%;
      padding: 20px;
    }
  }

  .footer__copyright-3 {
    p {
      max-width: 100% !important;
    }
  }

  .footer__top-wrapper-3 {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    .footer-right {
      display: flex;
      flex-wrap: wrap;
      width: 55%;
      border-left-color: rgb(38, 38, 38);
      border-left-style: solid;
      border-left-width: 0.8px;
      padding: 50px 0 30px;
      justify-content: center;
      @media screen and (max-width:1024px) {
        padding:0 !important;
      }
      .footer-right-bottom {
        width: 100%;
        text-align: left;
        border-top-width: 0.8px;
        padding-left: 50px;
      }
    }

    @media screen and (max-width: 1024px) {

      .footer-right {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        border-top-color: rgb(38, 38, 38);
        border-top-style: solid;
        border-top-width: 0.8px;
        border-left: none;
        padding: 50px 0 30px;
        justify-content: center;
        margin-bottom:0;
        padding: 20px !important;

        .footer-right-bottom {
          width: 100%;
          text-align: left;
          border-top: none;
          padding: 0;
          font-size: 14px;

          .text-sm {
            font-size: 12px !important;
          }
        }
      }
    }
  }
}
</style>
