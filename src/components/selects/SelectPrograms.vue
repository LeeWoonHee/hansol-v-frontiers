<template>
  <v-select
      v-if="withProject"
      :options="options"
      label="name"
      v-model="localValue"
  >
    <template #option="data">
      <span>{{ `${data.project.name}-${data.name}` }}</span>
    </template>
    <div slot="no-options">죄송합니다. 일치하는 항목이 없습니다.</div>
  </v-select>
  <v-select
      v-else
      :options="options"
      label="name"
      v-model="localValue"
  >
    <div slot="no-options">죄송합니다. 일치하는 항목이 없습니다.</div>
  </v-select>
</template>

<script>
import vSelect from 'vue-select'
import _ from 'lodash'

export default {
  props: {
    value: {
      type: Object,
      default: null
    },
    withProject: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value: {
      deep: true,
      handler (val) {
        if (val) {
          this.localValue = val
        }
      }
    },
    localValue: {
      deep: true,
      handler (val) {
        this.$emit('input', val)
      }
    }
  },
  name: 'SelectProjects',
  components: {
    'v-select': vSelect
  },
  data: () => ({
    localValue: null,
    options: []
  }),
  methods: {
    fetch: _.debounce(function (q) {
      this.$http.get('/resources/programs', {
        params: {
          query: q
        }
      })
          .then((res) => {
            this.options = res.data
          })
    }, 250)
  },
  created () {
    this.$http.get('/resources/programs', {
      params: {
        withProject: this.withProject
      }
    })
        .then((res) => {
          this.options = res.data
          if (this.value) this.localValue = this.value
        })
  }
}
</script>

<style scoped lang="scss">
.v-select::v-deep {
  min-width: 100px;
}
</style>
