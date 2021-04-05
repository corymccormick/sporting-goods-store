import { ProxyState } from "../AppState.js";
import SportingGood from "../Models/SportingGood.js"
import ShoppingCartGood from "../Models/ShoppingCartGood.js"

export function saveState() {
    localStorage.setItem('shoppingCart', JSON.stringify({
        sportingGoods: ProxyState.sportingGoods,
        shoppingCartGoods: ProxyState.shoppingCartGoods

    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('shoppingCart'))
    if (data) {
        ProxyState.sportingGoods = data.sportingGoods.map(sportingGood => new SportingGood(sportingGood.name, sportingGood.price, sportingGood.description, sportingGood.imgUrl));
        ProxyState.shoppingCartGoods = data.shoppingCartGoods.map(scg => new ShoppingCartGood(scg.name, scg.price, scg.quantity));
    }
}
