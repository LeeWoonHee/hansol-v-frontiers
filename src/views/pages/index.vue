<template>
  <main>
    <hero-area3/>
    <!-- vfrontiers 소개 섹션   -->
    <about-area3/>
    <!-- 혜택 섹션   -->
    <benefit-area/>
    <!-- 모집 분야 섹션   -->
    <blog-area3/>
    <!-- 멘토링 소개 섹션   -->
    <mentoring-area/>
    <!-- 지원하기 섹션   -->
    <apply-area/>
    <!-- 기수별 역대 참여팀 정보 섹션   -->
    <alumni-area :companies="companies"/>
    <!-- 이전 프로그램 정보 섹션   -->
    <previous-events-area/>
  </main>
</template>

<script>

import HeroArea3 from './components/sections/HeroArea3'
import BrandArea from './components/sections/BrandArea'
import AboutArea3 from './components/sections/AboutArea3'
import BlogArea3 from './components/sections/BlogArea3'
import BenefitArea from './components/sections/BenefitArea'
import MentoringArea from './components/MentoringArea'
import ApplyArea from './components/ApplyArea'
import PreviousEventsArea from './components/PreviousEventsArea'
import AlumniArea from './components/AlumniArea'

export default {
  name      : 'index',
  components: {
    BlogArea3,
    AboutArea3,
    BrandArea,
    HeroArea3,
    BenefitArea,
    MentoringArea,
    ApplyArea,
    PreviousEventsArea,
    AlumniArea
  },
  data      : () => ({
    companies: []
  }),
  mounted() {
    // 더미 데이터 넣기 위해 잠시 주석 처리 하였습니다.
    this.$http.get('/resources/companies', {
      params: {
        program_id: 5
      }
    }).then((res) => {
      this.companies = res.data
    }).catch(() => {})
        .finally(() => {
          this.$emit('mounted')
        })

    // this.$emit('mounted')
  },
  beforeDestroy() {
    this.$emit('destroy')
  },
  // 지원하기 버튼 오픈 시
  // this.$analytics.fbq('track', 'SubmitApplication'); (편집됨)
}
</script>

<style scoped>

</style>
