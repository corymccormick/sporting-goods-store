export default class SportingGood {
    constructor(id = generateId(), name, price, description, imgUrl) {
        this.id = id
        this.name = name
        this.price = price
        this.description = description
        this.imgUrl = imgUrl
    }
    //STILL TO DO
    get Template() {

        return /*html*/`
      <div class="col-md-4 mb-3" >
    <div class="card shadow">
        <img class="card-img-top" src="//placehold.it/200x200" alt="">
            <div class="card-body">
                <h4 class="card-title">${this.name}</h4>
                <p class="card-text">${this.price.toFixed(2)} - ${this.description}</p>
            </div>
            <div class="px-3 pb-3 d-flex justify-content-between">
                <button type="button" class="btn btn-info"
                    onclick="app.shoppingCartGoodsController.addToCart('${this.id}')">ADD</button>
            </div>
    </div>
    </div>
        `
    }
}


