import _snacksService from "../Services/SnacksService.js";
import _moneyService from "../Services/MoneyService.js";
import _store from "../store.js";

function _drawSnacks() {
  let template = "";
  let snacks = _store.State.snacks;

  snacks.forEach(snack => (template += snack.Template));
  document.getElementById("snacks-display").innerHTML = template;
}

function _drawQuarter() {
  let template = "";
  let money = _store.State.money;

  money.forEach(quarter => (template += quarter.Template));
  document.getElementById("money-display").innerHTML = template;
}

export default class SnacksController {
  constructor() {
    _drawSnacks();
    console.log("Snacks Controller is linked");
  }
  buySnack(snackType) {
    console.log(snackType);
    _snacksService.buySnack(snackType);
    _drawSnacks();
    _drawQuarter();
  }
}
