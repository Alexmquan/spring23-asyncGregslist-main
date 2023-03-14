import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { housesService } from "../Services/HousesService.js";
import { Pop } from "../Utils/Pop.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";
import { carsService } from "../Services/CarsService.js";

function _drawHouses() {
  let houses = appState.houses
  let template = ''
  houses.forEach(h => template += h.CarTemplate)
  setHTML('listings', template)

}



export class HousesController {
  constructor() {
    this.viewHouses()
    appState.on('houses', _drawHouses)
  }

  async createHouse() {
    try {
      event.preventDefault()
      const form = event.target
      const formData = getFormData(form)
      console.log('testing create house')
      await housesService.createHouse(formData)
      bootstrap.Modal.getOrCreateInstance('#create-modal').hide()
      form.reset()
      Pop.toast(`Created new home listing`, "success")
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
  viewHouses() {
    console.log("testing viewHouses")
    this.getAllHouses()
    setHTML('form', House.HouseForm())
  }

  async getAllHouses() {
    try {
      await housesService.getAllHouses()
    }
    catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async deleteHouse(id) {
    if (await Pop.confirm("Are you sure you want to delete this listing?")) {
      try {
        await housesService.deleteHouse(id)
        Pop.toast('Deleting your home listing', 'warning')
      } catch (error) {
        console.error(error)
        Pop.error(error)
      }
    }
  }

  openEditHouseForm(id) {
    let house = appState.houses.find(h => h.id == id)
  }





}