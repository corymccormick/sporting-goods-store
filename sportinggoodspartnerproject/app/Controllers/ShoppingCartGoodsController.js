import { ProxyState } from "../AppState.js";
import { shoppingCartGoodsService } from "../Services/ShoppingCartGoodsService.js";

//drawing to the page?


function _draw() {
    let total = 0
    let template = ''
    AppState.shoppingCartGoods.forEach(scg => {
        template += scg.Template
        total += scg.price * scg.quantity
    })

    shoppingCartGoods.push(sportingGood)
    document.getElementById("total").innerHTML = Template
};

//Public
export default class ShoppingCartGoodsController {
    constructor() {
        // OH oh more magic. you still know.....
        // 1st argument is name of the property in the AppState to 'watch' for changes
        // 2nd argument: name of the function to run when 1st argument property changes
        ProxyState.on('total', _draw);

        // manually run draw the on page load
        _draw()
    }
}