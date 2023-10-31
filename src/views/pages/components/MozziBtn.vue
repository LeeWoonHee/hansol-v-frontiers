<template>
  <div
      class="hs-btn_wrapper "
      :style="{'--to-color': toColor, '--from-color': fromColor, '--color': color}"
  >
    <router-link
        tag="button"
        :to="to"
        class="wc-btn-primary btn-hover"
        v-if="to"
    ><span></span>
      <div>
        <slot></slot>
        <i
            :class="icon"
        ></i>
      </div>
    </router-link>
    <button @click="(e) => $emit('click',e)" v-else class="wc-btn-primary btn-hover">
      <div>
        <slot></slot>
        <i
            :class="icon"
        ></i>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'MozziBtn',
  props: {
    icon: {
      type: String,
      default: 'fa-solid fa-arrow-right'
    },
    to: {
      type: String,
      default: ''
    },
    fromColor: {
      type: String,
      default: '#000'
    },
    toColor: {
      type: String,
      default: '#0C6DFF'
    },
    color: {
      type: String,
      default: '#fff'
    }
  }
}
</script>

<style
    scoped
    lang="scss"
>
.hs-btn_wrapper::v-deep {
  margin-top: 0;
  border-radius: 74px !important;
  width: auto !important;
  height: 55px;


  .wc-btn-primary {
    width: 265px;
    height: 55px;
    border-radius: 74px !important;
    background: var(--from-color);
    font-size: 16px;
    font-weight: 700;
    color: var(--color);
    z-index: 101;
    cursor: pointer;

    &:hover {
      border: 1px solid var(--to-color);

    }

    span {
      background-color: var(--to-color);
      z-index: 100;
    }

    div {
      z-index: 101;
      font-size: 16px;
      font-weight: 700;
    }
  }
}
</style>
