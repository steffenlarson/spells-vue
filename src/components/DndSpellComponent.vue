<template>
  <div class="DndSpellComponent">
    <router-link :to="{name:'ActiveSpell', params: {index:spell.index}}">
      <div class="card">
        <h4 class="card-title">
          {{ spell.name }}
        </h4>
      </div>
    </router-link>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  props: {
    spell: { type: Object, required: true }
  },
  name: 'DndSpellComponent',
  setup(props) {
    const state = reactive({
      account: computed(() => AppState.account)
    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
