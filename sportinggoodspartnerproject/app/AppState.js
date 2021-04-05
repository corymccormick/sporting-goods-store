import SportingGood from "./Models/SportingGood.js"
import shoppingCartGood from "./Models/ShoppingCartGood"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {sportingGoods[]} */
  sportingGoods = [
    new SportingGood('Baseball Bat', 150, 'Professionally made oak wood bat', 'imgUrl'),
    new SportingGood('Hockey Stick', 1000, 'Signed and endorsed by Wayne Gretzky', 'imgUrl'),
    new SportingGood('Rock Climbing Wall', 500, 'Multisurfaced wall with various holds', 'imgUrl')
  ]
  /** @type {shoppingCartGoods[]} */
  shoppingCartGoods = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
