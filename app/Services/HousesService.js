import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
const sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api',
  timeout: 5000
})
class HousesService {
  async getAllHouses() {
    const res = await sandbox.get('houses')
    //store all the imported API house data into new House model.
    appState.houses = res.data.map(h => new House(h))
  }

  async createHouse(formData) {
    const res = await sandbox.post('houses', formData)
    console.log('[creating house]', res.data)
    const newHouse = new House(res.data)
    appState.houses.push(newHouse)
    appState.emit('houses')
  }

  async deleteHouse(id) {
    await sandbox.delete(`houses/${id}`)
    appState.houses = appState.houses.filter(house => house.id != id)
  }

  async updateHouse(id, editData) {
    // debugger
    const res = await sandbox.put(`houses/${id}`, editData)
    const updateIndex = appState.houses.findIndex(h => h.id == id)
    appState.houses.splice(updateIndex, 1, new House(res.data))
    appState.emit('houses')
  }
}

export const housesService = new HousesService();  