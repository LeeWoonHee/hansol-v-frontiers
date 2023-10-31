<!-- =========================================================================================
    File Name: FeatherIcon.vue
    Description: Feather icon component. Creates feather icon based on 'icon' prop
    Component Name: FeatherIcon
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<script>
import * as icons from 'vue-feather-icons'

export default {
  functional:true,
  name: 'feather-icon',
  props: {
    icon: { required: true },
    svgClasses: { type: [String, Object, Array], default: '' },
    badge: {},
    badgeClasses: { type: [String, Object, Array], default: 'text-white' }
  },
  render (h, {props, data}) {
    // Add feather classes
    data.staticClass ? data.staticClass = `${data.staticClass} feather-icon select-none relative` : data.staticClass = 'feather-icon select-none relative'

    const svg = h(icons[props.icon], {class: props.svgClasses})
    const badgeEl = h('span', {staticClass: 'feather-icon-badge bg-primary h-5 w-5 absolute rounded-full text-xs flex items-center justify-center', class: props.badgeClasses, style: 'top: -7px; right: -5px'}, [props.badge])
    const children = [svg]
    if (props.badge) children.push(badgeEl)
    return h('span', data, children)
  }
}

</script>

<style lang="scss">
@import "@/assets/scss/vuexy/components/featherIcon.scss"
</style>
