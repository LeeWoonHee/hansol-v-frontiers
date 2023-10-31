<template>
  <section class="blog__area-6 blog__animation">
    <div class="container g-0 line pt-110 pb-110">
      <span class="line-3"></span>
      <div class="row pb-130">
        <!--        <div class="col-xxl-8 col-xl-7 col-lg-6 col-md-6">-->
        <!--          <div class="sec-title-wrapper">-->
        <!--            <h2 class="sec-title-2 animation__char_come">We always <br>think</h2>-->
        <!--          </div>-->
        <!--        </div>-->
        <!--        <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-6">-->
        <!--          <div class="blog__text">-->
        <!--            <p>Crafting new bright brands, unique visual systems and digital experience focused on a wide range of-->
        <!--              original collabs. </p>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>

      <div class="row flex flex-wrap justify-center items-center">
        <div class="w-full blex-left">
          <div
              :class="selectedCategories === null ? 'text-black active' : 'text-dark-grey'"
              class="cursor-pointer font-bold text-sm lg:text-2xl mx-5 px-5 news-category"
              @click="selectedCategories = null"
          >
            전체
          </div>
          <div
              class="cursor-pointer font-bold text-sm lg:text-2xl mx-5 px-5 news-category"
              @click="selectedCategories = category.id"
              :class="selectedCategories === category.id ? 'text-black active' : 'text-dark-grey'"
              v-for="(category, index) in categories"
              :key="index"
          >
            {{ category.name }}
          </div>
        </div>
        <div
            class="w-full md:w-1/2 lg:w-1/3 p-10"
            v-for="item in filteredNews"
            :key="item.id"
        >
          <article class="blog__item">
            <div class="blog__img-wrapper">
              <a
                  target="_blank"
                  :href="item.link"
              >
                <div class="img-box">
                  <img
                      class="image-box__item"
                      :src="item.thumbnail"
                      alt="Blog Thumbnail"
                  >
                  <img
                      class="image-box__item"
                      :src="item.thumbnail"
                      alt="BLog Thumbnail"
                  >
                </div>
              </a>
            </div>
            <h4 class="blog__meta">
              <a
                  target="_blank"
                  class="text-primary font-medium"
                  :href="item.link"
              >
                {{ (item.category && item.category.name) || '프로그램 관련 소식' }}
              </a>
            </h4>
            <h5>
              <a
                  target="_blank"
                  :href="item.link"
                  class="blog__title font-bold text-black"
              >
                {{ item.title }}
              </a>
            </h5>
            <a
                target="_blank"
                :href="item.link"
                class="blog__btn text-deep-grey font-bold"
            >자세히 보기
              <mdicon name="arrowTopRight"></mdicon>
            </a>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NewsProgram',
  props: {
    news: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    selectedCategories: null
  }),
  computed: {
    categories () {
      const categories = []
      this.news.forEach((x) => {
        if (x.category && x.category.name) {
          categories.push(x.category)
        }
      })

      return categories
    },
    filteredNews () {
      if (this.selectedCategories !== null) {
        return this.news.filter(x => x.category_id === this.selectedCategories)
      }

      return this.news
    }
  }
}
</script>

<style scoped lang="scss">
section::v-deep {
  background-color: #F4F4F4 !important;

  .image-box__item {
    width: 100%;
    height: auto;
  }

  .line {
    &::before {
      background-color: rgba(137, 137, 137, 0.2) !important;
      width: 0.80px;
    }

    &::after {
      background-color: rgba(137, 137, 137, 0.2) !important;
      width: 0.80px;
    }
  }

  .line-3 {
    background-color: rgba(137, 137, 137, 0.2) !important;
    width: 0.80px;
  }

  .news-category {
    &.active {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      &::before {
        content: '';
        position: absolute;
        left: -5px;
        width: 8px;
        height: 8px;
        background-color: #0a0a0a;
        border-radius: 50%;
      }
    }
  }
}
</style>
