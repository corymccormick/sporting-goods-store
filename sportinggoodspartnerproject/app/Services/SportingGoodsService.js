import { ProxyState } from "../AppState.js";
import SportingGood from "../Models/SportingGood.js";

class SportingGoodsService {
    addSportingGood(id) {
        ProxyState.sportingGoods = [...ProxyState.sportingGoods, new SportingGood()]
    }
}

export const sportingGoodsService = new SportingGoodsService();