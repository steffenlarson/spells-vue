<template>
  <div v-if="spell.name" class="SpellDetailsPage container-fluid">
    <div class="row p-4">
      <div class="col text-center">
        <h1>{{ spell.name }}</h1>
        <h2>Range: {{ spell.range }} | Duration: {{ spell.duration }}</h2>
      </div>
    </div>
    <div class="row p-4">
      <div class="col-6 text-center">
        <h2>
          {{ spell.school.name }} | <span v-if="spell.damage">{{ spell.damage.damage_type.name }}
          </span>
          <span v-else>Not applicable</span>
        </h2>
        <ul class="text-left">
          <li>Material: {{ spell.material }}</li>
          <li>Casting Time: {{ spell.casting_time }}</li>
          <li>Attack Type: {{ spell.attack_type }}</li>
        </ul>
      </div>
      <div class="col-6 text-center">
        <h4>{{ spell.desc }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { dndSpellsService } from '../services/DndSpellsService'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
export default {
  name: 'SpellDetailsPage',
  setup() {
    const route = useRoute()
    const state = reactive({
      loaded: false
    })
    onMounted(async() => {
      try {
        await dndSpellsService.getOne(route.params.index)
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      state,
      spell: computed(() => AppState.activeSpell)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
