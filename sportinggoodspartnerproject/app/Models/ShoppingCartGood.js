import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/GenerateId.js";

export default class ShoppingCartGood {
    constructor(id, name, price, quantity) {
        this.id = sportingGoods.id
        this.name = name
        this.price = price
        this.quantity = quantity
    }


    get Template() {

        return /*Html*/`
    <div class="col border border-secondary">
        <h4>Cart</h4>
        <ol id="shoppingCartGoods">
        ${this.name} | ${this.quantity} | $${this.price}
        </ol>
        <div class="text-right">
            <h4>Total: $<span id="total">0.00</span></h4>
            <button type="button" class="btn btn-outline-success m-2" onclick="app.shoppingCartGoodsController.checkout('${this.id}', ${this.price})">Checkout</button>
        </div>
    </div>
        </div>
    `
    }
}