<template>
  <footer class="footer__area-3">
    <div class="footerTop">
      <div class="footer__logo-3 pt-120">
        <img
            src="@/assets/images/logo/hansolBluePointLogo.svg"
            alt="Footer Logo"
            class="footerLogo"
        >
        <p>
          Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit
          pretium sed non enim. Maecenas
        </p>
      </div>
      <!--        <div class="footer__social-3">-->
      <!--          <ul>-->
      <!--            <li><a href="#">facebook</a></li>-->
      <!--            <li><a href="#">Twitter</a></li>-->
      <!--            <li><a href="#">Linkedin</a></li>-->
      <!--            <li><a href="#">Instagram</a></li>-->
      <!--          </ul>-->
      <!--        </div>-->
      <div class="footerContact">
        <div class="footerContactTop">LET'S TALK</div>
        <div class="footerContactBottom">
          <div class="footerAdress">
            <p class="footerTitle">BLUEPOINT PARTNERS</p>
            <p class="footerSubTitle">
              <span class="adressAfter">본사</span>
              대전광역시 유성구 엑스포로 1, 엑스포타워 21층
            </p>
            <p class="footerSubTitle">
              <span class="adressAfter">서울</span>
              강남구 역삼로 165 팁스타운 S1 7층
            </p>
          </div>
          <div class="footerAdress">
            <p class="footerTitle">블루포인트파트너스 사업운영팀</p>
            <p class="footerSubTitle">
              oi-info@bluepoint.ac
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer__btm-3">
      <div class="container-fluid">
        <div class="row">
          <div class="footer__copyright-3">
            <!--    <p>© 2022 - 2025 | Alrights reserved by <a href="https://wealcoder.com/" target="_blank">Wealcoder</a></p>-->
            <p>
              Copyright © 2022. AllRights Reserved
            </p>
          </div>
          <!--          <div class="col-xxl-8 col-xl-8 col-lg-8">-->
          <!--            <div class="footer__nav-2">-->
          <!--              <ul class="footer-menu-2 menu-anim">-->
          <!--                <li><a href="about.html">about us</a></li>-->
          <!--                <li><a href="contact.html">contact</a></li>-->
          <!--                <li><a href="career.html">Career</a></li>-->
          <!--                <li><a href="faq.html">FAQs</a></li>-->
          <!--              </ul>-->
          <!--            </div>-->
          <!--          </div>-->
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "index"
}
</script>

<style
    scoped
    lang="scss"
>
footer::v-deep {
  padding: 0;

  .footerTop {
    display: flex;

    .footer__logo-3 {
      padding: 124px 270px 246px;
      border-right: 1px solid #2C2C2C;
      p{
        max-width:400px;
      }
    }

    .footerContact {
      flex:1;
      .footerContactTop {
        font-weight: 600;
        font-size: 140px;
        color: #ffffff;
        padding: 65px 178px 13px 109px;
        border-bottom: 1px solid #2C2C2C;
        width:100%;
      }

      .footerContactBottom {
        padding: 68px 686px 82px 109px;

        .footerAdress {

          p {
            color: #ffffff;
            padding-top: 7px;
          }

          .footerTitle {
            margin-top: 30px;
            font-weight: 700;
            font-size: 14px;
          }

          .footerSubTitle {
            font-weight: 400;
            font-size: 12px;
          }
        }
      }
    }
  }

  .footer__btm-3 {
    border-top:1px solid #2C2C2C;
    padding: 0;

    .container-fluid {
      padding: 0;

      .footer__copyright-3 {
        padding: 55px 246px 52px;

      }
    }
  }

}
</style>