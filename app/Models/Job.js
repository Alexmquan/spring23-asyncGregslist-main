

export class Job {
  constructor(data) {
    this.id = data.id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
  }

  get JobCard() {
    return `
    <div class="col-6 col-med-4 text-dark">
    <div class="card">
      <h4>${this.jobTitle}</h4>
      <h5>${this.company}</h5>
      <h5>${this.rate} | ${this.hours}</h5>
      <p><b>Description:</b> ${this.description}</p>
      <div class="justify-content-end d-flex">
        <button class="btn selectable bg-warning" onclick="app.jobsController.deleteJob('${this.id}')"><i
            class="mdi mdi-delete"></i></button>
        <button class="btn selectable bg-success" onclick="app.jobsController.openEditJobForm('${this.id}')"><i
            class="mdi mdi-pen"></i></button>
      </div>
    </div>
  </div>
    `
  }

  // job.id ? `updateJob('${job.id}')` : createJob()'

  static dynamicJobForm(job = {}) {
    return ` 
     <form onsubmit="app.jobsController.createJobs()"
     class="row bg-light">
    <div class="col-6">
      <label for="jobTitle">Job Title</label>
      <input type="text" name="jobTitle" id="jobTitle" class="form-control" placeholder="Job Title" required
        value="">
    </div>
    <div class="col-6">
      <label for="company">Company name</label>
      <input type="text" name="company" id="company" class="form-control" placeholder="Company Name" required
        value="">
    </div>
    <div class="col-6">
      <label for="hours">Hours</label>
      <input type="number" name="hours" id="hours" class="form-control" placeholder="hours" required value="">
    </div>
    <div class="col-6">
      <label for="rate">Rate</label>
      <input type="number" name="rate" id="rate" class="form-control" placeholder="rate" required value="">
    </div>
    <div class="col-12">
      <label for="description">Description</label>
      <input type="text" name="description" id="description" class="form-control" placeholder="Description"
        value="">
    </div>
    <div class="p-2 text-end">
      <button type="button" class="btn">Cancel</button>
      <button class="btn btn-success">Submit</button>
    </div>
  </form>
`
  }
}