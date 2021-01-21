<template>
  <div class="AllSpellsPage">
    <h1>Lecturn</h1>
    <div class="col-12">
      <DndSpellComponent v-for="spell in state.spells" :key="spell.id" :spell="spell" />
    </div>
  </div>
</template>

<script>
import { onMounted, computed, reactive } from 'vue'
import { dndSpellsService } from '../services/DndSpellsService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
export default {
  name: 'AllSpellsPage',
  setup() {
    const state = reactive({
      spells: computed(() => AppState.spells),
      user: computed(() => AppState.user)
    })
    onMounted(async() => {
      try {
        await dndSpellsService.getSpells()
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      state
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
