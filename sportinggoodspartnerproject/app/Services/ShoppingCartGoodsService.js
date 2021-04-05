import { ProxyState } from "../AppState.js";
import ShoppingCartGood from "../Models/ShoppingCartGood.js";
import { saveState } from "../Utils/LocalStorage.js"


//shoppingCartGoods or sportingGoods??????
class ShoppingCartGoodsService {
    sportingGood = shoppingCartGood
    deleteShoppingCartGood(id, price) {
        ProxyState.shoppingCartGoods = ProxyState.shoppingCartGoods.filter(scg => scg.id != id)
        saveState()
    }
    addShoppingCartGood(id) {
        ProxyState.sportingGoods = [...ProxyState.sportingGoods, new SportingGood(newSportingGood.name, newSportingGood.price, newSportingGood.description, newSportingGood.imgUrl)]
        saveState()
    }
}

export const shoppingCartGoodsService = new ShoppingCartGoodsService();