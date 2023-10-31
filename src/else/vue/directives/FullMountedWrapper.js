export default {
  inserted: (el, binding, vnode) => {
    // for wrapper
    // vnode.componentInstance.$on('name of your emitted event', data => { ... });
    if (vnode.componentInstance) {
      vnode.componentInstance.$on('full-mounted', vnode)
      vnode.context.subscribeFullMountedCount = 0
    } else {
      el.addEventListener('full-mounted')
      vnode.elm.dispatchEvent(new CustomEvent('full-mounted', vnode))
      vnode.context.subscribeFullMountedCount = 0
    }
  },
  unbind: (el, binding, vnode) => {
    // for wrapper
    // vnode.componentInstance.$on('name of your emitted event', data => { ... });
    if (vnode.componentInstance) {
      vnode.componentInstance.$emit('full-beforeDestroy', vnode) // use {detail:} to be uniform
      vnode.context.subscribeFullMountedCount -= 1
    } else {
      vnode.elm.dispatchEvent(new CustomEvent('full-beforeDestroy', vnode))
      vnode.context.subscribeFullMountedCount -= 1
    }
  }
}
