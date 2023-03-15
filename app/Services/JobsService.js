import { appState } from "../AppState.js";
import { Job } from "../Models/Job.js";

const sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api',
  timeout: 5000
})
class JobsService {
  async getAllJobs() {
    const res = await sandbox.get('jobs')
    appState.jobs = res.data.map(j => new Job(j))
  }


  async createJobs(formData) {
    const res = await sandbox.post('jobs', formData)
    const newJob = new Job(res.data)
    appState.jobs.push(newJob)
    appState.emit('jobs')
  }

  async deleteJob(id) {
    await sandbox.delete(`jobs/${id}`)
    appState.jobs = appState.jobs.filter(j => j.id != id)
  }

  async updateJob(id, editData) {
    const res = await sandbox.put(`jobs/${id}`, editData)
    const updateIndex = appState.jobs.findIndex(j => j.id == id)
    appState.jobs.splice(updateIndex, 1, new Job(res.data))
    appState.emit('jobs')
  }

}


export const jobsService = new JobsService();