export default {
  inserted: (el, binding, vnode) => {
    // for wrapper
    // vnode.componentInstance.$on('name of your emitted event', data => { ... });
    if (vnode.componentInstance) {
      vnode.componentInstance.$emit('full-mounted', vnode); // use {detail:} to be uniform
    } else {
      vnode.elm.dispatchEvent(new CustomEvent('full-mounted', vnode));
    }
  },
  unbind: (el, binding, vnode) => {
    // for wrapper
    // vnode.componentInstance.$on('name of your emitted event', data => { ... });
    if (vnode.componentInstance) {
      vnode.componentInstance.$emit('full-beforeDestroy', vnode); // use {detail:} to be uniform
    } else {
      vnode.elm.dispatchEvent(new CustomEvent('full-beforeDestroy', vnode));
    }
  },
  // emit: (vnode, name, data) => {
  //   const handlers = (vnode.data && vnode.data.on) ||
  //     (vnode.componentOptions && vnode.componentOptions.listeners);
  //
  //   handlers && handlers[name] && handlers[name].fns(data)
  //
  //   //emit(vnode, 'bar' , {some: 'event', data: 'here'});
  // }
}
