<template>
  <div>
    <top-hero
        title="NEWS"
        description="한솔 V FRONTIERS의 주요 기사들입니다"
        sub-description="다양한 프로그램과 콘텐츠 운영 소식들이 보도된 한솔 V FRONTIERS의 최근 기사를 확인해 보세요"
    />
    <news-program :news="news"/>
  </div>
</template>

<script>
import TopHero from '@/views/pages/components/TopHero.vue'
import NewsProgram from '@/views/pages/news/components/NewsProgram.vue'

export default {
  name: 'index',
  components: {
    TopHero,
    NewsProgram
  },
  data: () => ({
    news: []
  }),
  mounted () {
    this.$http.get('news')
        .then((res) => {
          this.news = res.data
        }).finally(() => {
      this.$emit('mounted')
    })

  },
  beforeDestroy () {
    this.$emit('destroy')
  }
}
</script>

<style scoped>

</style>
