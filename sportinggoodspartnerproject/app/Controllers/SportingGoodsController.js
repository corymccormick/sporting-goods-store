import { ProxyState } from "../AppState.js";
import { sportingGoodsService } from "../Services/SportingGoodsService.js";


//Private
function _draw() {
    let sportingGoods = ProxyState.sportingGoods;
    let template = ''
    sportingGoods.forEach(sportingGoods => {
        template += sportingGoods.Template
    })

    document.getElementById("sportingGoods").innerHTML = Template


}

//Public
export default class SportingGoodsController {
    constructor() {
        ProxyState.on("sportingGoods", _draw);
        _draw()
    }

    //not adding new? adding to shopping cart
}