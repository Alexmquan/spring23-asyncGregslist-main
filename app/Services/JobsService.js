import { appState } from "../AppState.js";

const sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api',
  timeout: 5000
})

class JobsService {

}

export const jobsService = new JobsService();