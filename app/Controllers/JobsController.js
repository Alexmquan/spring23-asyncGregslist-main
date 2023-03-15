import { appState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";
import { jobsService } from "../Services/JobsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Job } from "../Models/Job.js";
import { housesService } from "../Services/HousesService.js";

function _drawJobs() {
  let jobs = appState.jobs
  let template = ''
  jobs.forEach(j => template += j.JobCard)
  setHTML('listings', template)
}


export class JobsController {
  constructor() {
    this.viewJobs()
    appState.on('jobs', _drawJobs)
  }

  async createJobs() {
    try {
      event.preventDefault()
      const form = event.target
      const formData = getFormData(form)
      await jobsService.createJobs(formData)
      bootstrap.Modal.getOrCreateInstance('#create-modal').hide()
      form.reset()
      Pop.toast('Created new job listing', 'success')

    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  viewJobs() {
    this.getAllJobs()
    setHTML('form', Job.dynamicJobForm())
  }

  async getAllJobs() {
    try {
      await jobsService.getAllJobs()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async deleteJob(id) {
    if (await Pop.confirm("Are you sure you want to delete this listing?")) {
      try {
        jobsService.deleteJob(id)
        Pop.toast("You've just deleted your post", "success")
      } catch (error) {
        console.error(error)
        Pop.error(error)
      }
    }

  }

  openEditJobForm(id) {
    let job = appState.houses.find
  }



}