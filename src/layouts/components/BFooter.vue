<template>
  <footer>
    <div class="container">
      <div class="row w-100 d-flex justify-content-between flex-column pa-footer-wrapper">
        <div class="d-flex w-100 justify-content-between pa-footer-content">
          <div class="pa-footer-img d-flex justify-content-start w-50 align-items-center">
            <a href="http://www.hansol.com/home/" target="_blank">
              <img src="~@/assets/images/hansolWhiteLogo.png" alt="" class="hansol-logo">
            </a>
            <div class="d-flex justify-content-center align-items-center">
              <img src="~@/assets/images/FooterX.svg" alt="">
            </div>
            <a href="https://bluepoint.ac/" target="_blank">
              <img src="~@/assets/images/bluepointCi.svg" alt="" class="blue-logo">
              <!--              <img-->
              <!--                  src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d528e73a-b959-4c56-aa32-452b367a7868/%EC%9E%90%EC%82%B0_1.svg"-->
              <!--                  alt="">-->
            </a>
          </div>
          <div class="d-flex flex-column w-25">
            <div class="pa-footer-title">최근 뉴스</div>
            <a
                target="_blank"
                class="py-3"
                v-for="newsOne in news"
                :key="newsOne.id"
                :href="newsOne.link"
            >
              {{ newsOne.title }}
            </a>
          </div>
          <div class="d-flex flex-column w-25 pl-5">
            <div class="d-flex flex-column">
              <div class="pa-footer-title">
                BLUEPOINT
              </div>
              <p>
                본사 | 대전광역시 유성구 어은로 58번길 58
              </p>
              <p>
                서울 | 강남구 역삼로 172 MARU360 4층
              </p>
            </div>
            <div class="d-flex flex-column pa-footer-title">
              <div>블루포인트 오픈이노베이션팀</div>
              <a href="mailto:steve@bluepoint.ac">steve@bluepoint.ac</a>
            </div>
          </div>
        </div>
        <div class="col-12 text-center my-2 pt-5 pb-4 pa-footer-copyright">
          <p>Copyright © {{ (new Date).getFullYear() }} - All Rights Reserved</p>
        </div>
      </div>
    </div>
    <div class="pa-back-to-top-wrap">
      <a class="pa-back-to-top" href="#top"><span class="pa-back-to-top"></span></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'BFooter',
  data: () => ({
    news: []
  }),
  methods: {
    show(what) {
      switch (what) {
        case 0:
          this.$vs.notify({
            title: '0',
            text: navigator.userAgent,
            color: 'primary',
            position: 'top-right'
          })
          break
        case 1:
          this.$vs.notify({
            title: '1',
            text: navigator.vendor,
            color: 'primary',
            position: 'top-right'
          })
          break
        case 2:
          this.$vs.notify({
            title: '2',
            text: window.opera,
            color: 'primary',
            position: 'top-right'
          })
          break
      }
    }
  },
  created() {
    this.$http.get('/news', {
      params: {
        count: 3
      }
    })
        .then((res) => {
          this.news = res.data
        })
  }
}
</script>

<style lang="css">
footer {
  position: relative;
  background-color: #111;
}

footer p {
  font-size: 12px;
  font-weight: 400;
  color: #87A1AD;
  padding-bottom: 12px;
  padding-left: 12px;
  margin-bottom: 0;

}

footer a {
  color: #87A1AD;
  font-size: 12px;
  /*padding: 0 12px 12px;*/
}

footer a img.blue-logo {
  padding-bottom: 16px !important;
}

section.pa-main-footer {
  background: #091015;
  padding: 60px 20px 40px;
}

.pa-footer-wrapper {
  padding-top: 30px;
}

.pa-footer-img > div img {
  width: 18px !important;
  height: 18px !important;
  margin-bottom: 12px;
}

.pa-footer-img img {
  transition: all .2s linear;
  height: auto !important;
}

.pa-footer-img .hansol-logo {
  max-width: 130px
}

.pa-footer-img .blue-logo {
  max-width: 160px;
}


.pa-footer-img img:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 1);
  transform: translateY(-10%);
  transition: all .2s;
}

.pa-footer-img > div img {
  width: 50px;
  height: 50px;
  margin-bottom: 12px;
}

.pa-footer-img > div img:hover {
  box-shadow: none;
  pointer-events: none;
}

.pa-footer-copyright {
  padding: 0 !important;
}

.pa-footer-copyright p {
  margin: 0;
}

.pa-footer-title {
  font-weight: 600;
  font-size: 14px;
  padding-bottom: 8px;
}

@media all and (min-width: 992px) and (max-width: 1199px) {
  .pa-footer-wrapper {
    padding-top: 30px;
  }

  .pa-footer-img img {
    width: 160px;
    height: 35px;
    transition: all .2s
  }

  .pa-footer-img img:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 1);
    transform: translateY(-10%);
    transition: all .2s;
  }

  .pa-footer-img > div img {
    width: 35px;
    height: 35px;
    margin-bottom: 12px;
  }

  .pa-footer-img > div img:hover {
    box-shadow: none;
    pointer-events: none;
  }

  .pa-footer-copyright {
    padding: 0 !important;
  }

  .pa-footer-copyright p {
    margin: 0;
  }

  .pa-footer-title {
    font-weight: 600;
    font-size: 14px;
    padding-bottom: 8px;
  }
}

@media all and (min-width: 768px) and (max-width: 991px) {
  /* Footer */
  .pa-footer-wrapper {
    padding-top: 30px;
  }

  .pa-footer-img > div img {
    width: 25px;
    height: 25px;
    margin-bottom: 12px;
  }

  .pa-footer-img img {
    width: 120px;
    height: 25px;
    transition: all .2s
  }

  .pa-footer-img img:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 1);
    transform: translateY(-10%);
    transition: all .2s;
  }

  .pa-footer-img > div img {
    width: 50px;
    height: 50px;
    margin-bottom: 12px;
  }

  .pa-footer-img > div img:hover {
    box-shadow: none;
    pointer-events: none;
  }

  .pa-footer-copyright {
    padding: 0 !important;
  }

  .pa-footer-copyright p {
    margin: 0;
  }

  .pa-footer-title {
    font-weight: 600;
    font-size: 12px;
    padding-bottom: 4px;
  }
}

@media all and (min-width: 576px) and (max-width: 767px) {
  .pa-footer-wrapper {
    padding-top: 25px;
  }

  .pa-footer-content {
    flex-direction: column;
  }

  .pa-footer-content > div {
    width: 100% !important;
  }

  .pa-footer-img {
    justify-content: center !important;
  }

  .pa-footer-img > div img {
    width: 35px;
    height: 35px;
    margin-bottom: 12px;
  }

  .pa-footer-img img {
    width: 130px;
    height: 35px;
    transition: all .2s
  }

  .pa-footer-img img:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 1);
    transform: translateY(-10%);
    transition: all .2s;
  }

  .pa-footer-img > div img {
    width: 50px;
    height: 50px;
    margin-bottom: 12px;
  }

  .pa-footer-img > div img:hover {
    box-shadow: none;
    pointer-events: none;
  }

  .pa-footer-copyright {
    padding: 0 !important;
  }

  .pa-footer-copyright p {
    margin: 0;
  }

  .pa-footer-title {
    font-weight: 600;
    font-size: 14px;
    padding-bottom: 8px;
  }

  .pa-benefits-item {
    animation: scaleUP 5s linear forwards;
    transform-origin: center;
  }


}

@media all and (max-width: 575px) {
  .pa-footer-wrapper {
    padding: 30px 16px 0;
    margin: 0;
  }

  .pa-footer-content {
    flex-direction: column;
  }

  .pa-footer-content > div {
    width: 100% !important;
  }

  .pa-footer-img {
    justify-content: center !important;
  }

  .pa-footer-img img {
    width: 100px;
    height: 25px;
    transition: all .2s
  }

  .pa-footer-img img:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 1);
    transform: translateY(-10%);
    transition: all .2s;
  }

  .pa-footer-img > div img {
    width: 25px;
    height: 25px;
    margin-bottom: 12px;
  }

  .pa-footer-img > div img:hover {
    box-shadow: none;
    pointer-events: none;
  }

  .pa-footer-copyright {
    padding: 0 !important;
  }

  .pa-footer-copyright p {
    margin: 0;
  }

  .pa-footer-title {
    font-weight: 600;
    font-size: 12px;
    padding-bottom: 8px;
  }
}
</style>
