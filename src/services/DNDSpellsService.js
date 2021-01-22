import { AppState } from '../AppState'
import { dndapi } from './AxiosService'

class DndSpellsService {
  async getSpells() {
    const res = await dndapi.get('spells')
    // console.log(res.data.results)
    AppState.spells = res.data.results
  }

  async getOne(index) {
    const res = await dndapi.get('spells/' + index)
    AppState.activeSpell = res.data
    // console.log(res.data)
  }
}
export const dndSpellsService = new DndSpellsService()
