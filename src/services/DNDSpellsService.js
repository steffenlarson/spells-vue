import { AppState } from '../AppState'
import { dndapi } from './AxiosService'

class DndSpellsService {
  async getSpells() {
    const res = await dndapi.get('spells')
    console.log(res.data.results)
    AppState.spells = res.data.results
  }
}
export const dndSpellsService = new DndSpellsService()
