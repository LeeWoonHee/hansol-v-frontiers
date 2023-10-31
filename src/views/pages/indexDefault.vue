<template>
  <main>
    <hero-area3/>
    <brand-area/>
    <about-area3/>
    <service-area3/>
    <portfolio-area3/>
    <testimonial-area3/>
    <workflow-area3/>
    <price-area/>
    <blog-area3/>
  </main>
</template>

<script>

import HeroArea3 from './components/sections/HeroArea3'
import BrandArea from './components/sections/BrandArea'
import AboutArea3 from './components/sections/AboutArea3'
import ServiceArea3 from './components/sections/ServiceArea3'
import PortfolioArea3 from './components/sections/PortfolioArea3'
import TestimonialArea3 from './components/sections/TestimonialArea3'
import WorkflowArea3 from './components/sections/WorkflowArea3'
import PriceArea from './components/sections/PriceArea'
import BlogArea3 from './components/sections/BlogArea3'

export default {
  name: 'index',
  components: {
    BlogArea3,
    PriceArea,
    WorkflowArea3, TestimonialArea3, PortfolioArea3, ServiceArea3, AboutArea3, BrandArea, HeroArea3
  },
  mounted () {
    this.$emit('mounted')
  },
  beforeDestroy () {
    this.$emit('destroy')
  }
}
</script>

<style scoped>

</style>
