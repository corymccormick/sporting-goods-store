import ShoppingCartGoodsController from "./Controllers/ShoppingCartGoodsController.js";
import SportingGoodsController from "./Controllers/SportingGoodsController.js";

class App {
  sportingGoodsController = new SportingGoodsController();
  shoppingCartGoodsController = new ShoppingCartGoodsController
}

window["app"] = new App();
