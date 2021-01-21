<template>
  <div class="AllSpellsPage">
    <h5>{{}}</h5>
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
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
