

export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
  }

  static HouseForm(house = {}) {
    return `
    <form onsubmit="app.housesController.${house.id ? `updateHouse('${house.id}')` : 'createHouse()'}" class="row bg-light">
            <div class="col-6 col-md-4">
              <label for="year">Year Built</label>
              <input type="number" id="year" name="year" class="form-control" placeholder="ex. 1995" min="0"
                max="5000" required value="${house.year || 1990}">
            </div>
            <div class="col-md-4">
              <label for="bedrooms">Bedrooms</label>
              <input type="number" id="bedrooms" name="bedrooms" class="form-control" placeholder="# of Bed" min="0"
                max="50" required value="${house.bedrooms || 0}>
            </div>
            <div class="col-md-4"> 
              <label for="bathrooms">Bathrooms</label>
              <input type="number" id="bathrooms" name="bathrooms" class="form-control" placeholder="# of Bath" min="0"
                max="50" required value="${house.bathrooms || 0}>
            </div>
            <div class="col-md-6">
              <label for="levels">Levels</label>
              <input type="number" id="levels" name="levels" class="form-control" min="0" max="200" placeholder="levels"
                required value="${house.levels || 1}>
            </div>
            <div class="col-md-6">
              <label for="price">Price</label>
              <input type="number" id="price" name="price" class="form-control" min="0" max="50000000"
                placeholder="ex: 500000" required value="${house.price || 1}>
            </div>
            <div class="col-12">
              <label for="description">Description</label>
              <input type="text" id="description" name="description" class="form-control" maxlength="100"
                placeholder="Describe your house" value="${house.description || ''}>
            </div>
            <div class="col-12">
              <label for="imgUrl">Image URL</label>
              <input type="url" id="imgUrl" name="imgUrl" class="form-control" maxlength="300"
                placeholder="Image URL here" value="${house.imgUrl || ''}>
            </div>
            <div class="p-2 text-end">
              <button type="button" class="btn">Cancel</button>
              <button class="btn btn-success">Submit</button>
            </div>
          </form>
    `
  }

  get CarTemplate() {
    return `
    <div class="col-4 col-med-4 p-3">
    <div class="card text-dark">
      <img src="${this.imgUrl}" alt="" height="400">
      <h4>${this.bedrooms} Bed |${this.bathrooms} Bath</h4>
      <h5>${this.levels} Stories | Built: ${this.year}</h5>
      <h5>Price: ${this.price}</h5>
      <p><b>Description:</b>${this.description}</p>
      <div class="justify-content-end d-flex p-2">
      <button class="btn selectable bg-warning mx-2 elevation-2" onclick="app.housesController.deleteHouse('${this.id}')"><i class="mdi mdi-delete"></i></button>
      <button class="btn selectable bg-success elevation-2"><i class="mdi mdi-pen"></i></button>
    </div>
    </div>
  </div>`
  }
}