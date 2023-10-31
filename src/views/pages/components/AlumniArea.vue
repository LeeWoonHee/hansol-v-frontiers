<template>
  <section class="alumni-area dark">
    <div class="container py-80 lg:py-140">
      <div class="row">
        <div class="col-xxl-12">
          <h3>ALUMNI</h3>
          <h2 class="brand__title-3 title-anim">
            참여팀 정보
          </h2>
          <div class="w-full blex justify-center lg:justify-start">
            <div
                v-for="company in localCompanies"
                :key="company.id"
                @click="selectedCompany = company, popupActivo = true"
                class="brand__item-2 fade_bottom">
              <img :src="company.logo || require('@/assets/images/alumniArea3.png')" alt="Brand Logo"
                   class="object-contain p-4 blex">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 참여팀 클릭 시, 모달    -->
    <vs-popup
        v-if="selectedCompany"
        class="holamundo no-title" :active.sync="popupActivo">
      <div class="w-full blex flex-no-wrap py-60 px-20">
        <div class="w-1/2 blex pr-20">
          <img :src="selectedCompany.logo || require('@/assets/images/alumniArea3.png')" alt="Brand Logo" class="logo">
        </div>
        <div class="w-1/2 blex-left text-black">
          <div class="blex-left w-full">
            <div class="w-full blex-left text-base font-bold text-black">
              기업명
            </div>
            <div class="text-xs text-gray">
              {{ selectedCompany.name || '-' }}
            </div>
          </div>
          <div class="blex-left w-full py-20">
            <div class="w-full blex-left text-base font-bold text-black">
              비지니스 소개
            </div>
            <div class="text-xs text-gray">
              {{ selectedCompany.short_description || '-' }}
            </div>
          </div>
          <div class="blex-left w-full">
            <div class="w-full blex-left text-base font-bold text-black">
              홈페이지 링크
            </div>
            <div class="text-xs text-gray">
              {{ selectedCompany.homepage || '-' }}
            </div>
          </div>
        </div>
      </div>
    </vs-popup>

  </section>
</template>

<script>
export default {
  name : "AlumniArea",
  props: {
    companies: {
      type   : Array,
      default: () => []
    }
  },
  watch: {
    companies: {
      deep     : true,
      immediate: true,
      handler(val) {
        this.localCompanies = val
      }
    }
  },
  data : () => ({
    localCompanies : [],
    selectedCompany: null,
    popupActivo    : false,
  }),
}
</script>

<style scoped lang="scss">
.alumni-area::v-deep {
  padding: 9.635vw 0; //185px

  .container {
    max-width: 74%;

    @media screen and (max-width: 1024px) {
      max-width: 100%;
    }

    h3 {
      font-weight: 700;
      font-size: 1.042vw; //20px;
      line-height: 25px;
      text-align: center;
      color: #0C6DFF;
      margin-bottom: 8px;
      @media screen and (max-width: 1024px) {
        font-size: 16px;
      }
    }

    .brand__title-3 {
      font-weight: 700;
      font-size: 2.604vw; //50px;
      padding-bottom: 30px;
      @media screen and (max-width: 1024px) {
        font-size: 32px;
        padding-bottom: 40px;
      }
    }

    .brand__item-2 {
      background: #FFFFFF;
      oject-fit: contain;
      margin: 1.563vw 2.083vw; //30px // 40px

      @media screen and (max-width: 1024px) {
        margin: 20px;
      }

      &:hover {
        cursor: pointer;
      }

      img {
        width: 7.292vw; //140px;
        height: 4.479vw; //86px;
        object-fit: contain;

        @media screen and (max-width: 1024px) {
          width: 120px;
          height: 74px;
        }
      }
    }
  }

  .con-vs-popup {
    .vs-popup {

      .vs-popup--header {

        .vs-popup--title {
        }

        i {
        }
      }
    }
  }

}

.vs-popup--content {
  .logo {
    object-fit: contain !important;
    max-width: 100% !important;
    height: auto !important;
  }
}
</style>