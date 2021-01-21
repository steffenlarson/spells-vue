import { AppState } from '../AppState'
import { dndapi } from './AxiosService'

class DndSpellsService {
  async getSpells() {
    const res = await dndapi.get('spells')
    console.log(res)
    AppState.spells = res.data
  }
}
export const dndSpellsService = new DndSpellsService()
