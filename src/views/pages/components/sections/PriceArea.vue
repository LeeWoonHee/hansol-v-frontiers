<template>
  <!-- Price area start -->
  <section class="price__area pt-130 pb-140">
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="sec-title-wrapper">
            <h2 class="sec-sub-title title-anim">Pricing Table</h2>
            <h3 class="sec-title title-anim">Be kind to your <br>mind</h3>
          </div>
          <div class="faq__list-3">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Design should enrich our day
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                     data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <p>Our design services starts and ends with a best-in-class experience strategy that builds
                      brands. Through a process of iteration and prototyping design interfaces that bring joy to
                      people</p>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Bring their individual experience and creative
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                     data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <p>This is the second item's accordion body. It is hidden by default, until the
                      collapse plugin adds the appropriate classes that we use to style each element. These
                      classes.</p>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Human centred design to challenges
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                     data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <p>Our design services starts and ends with a best-in-class experience strategy that builds
                      brands. Through a process of iteration and prototyping design interfaces that bring joy to
                      people</p>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Design should enrich our day
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                     data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <p>Our design services starts and ends with a best-in-class experience strategy that builds
                      brands. Through a process of iteration and prototyping design interfaces that bring joy to
                      people</p>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Developing core web applications
                  </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                     data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <p>Our design services starts and ends with a best-in-class experience strategy that builds
                      brands. Through a process of iteration and prototyping design interfaces that bring joy to
                      people</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="price__table">
            <div class="price__item animation_from_bottom">
              <div class="price__icon"><span><i class="fa-solid fa-check"></i></span></div>
              <div class="price__info">
                <h2 class="price__type">Yearly</h2>
                <h3 class="price__title">14 days free</h3>
                <p>Subscription fee is $129.99 USD and automatically renews each year.</p>
              </div>
              <div class="price__amount">
                <h4 class="best-value">Best Value</h4>
                <p>$129<span> .99</span></p>
              </div>
            </div>

            <div class="price__item animation_from_top">
              <div class="price__icon"><span><i class="fa-solid fa-check"></i></span></div>
              <div class="price__info">
                <h2 class="price__type">Monthly</h2>
                <h3 class="price__title">7 days free</h3>
                <p>Subscription fee is $12.99 USD and automatically renews each year.</p>
              </div>
              <div class="price__amount">
                <p>$12<span> .99</span></p>
              </div>
            </div>
          </div>
          <div class="price__btn btn_wrapper">
            <a href="contact.html" class="wc-btn-black btn-hover btn-item"><span></span> Try it <br>Free Now <i
                class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Price area end -->
</template>

<script>
export default {
  name: 'PriceArea'
}
</script>

<style scoped>

</style>
