export default class Snacks {
  constructor(data) {
    this.name = data.name;
    this.price = data.price;
    this.amount = data.amount;
  }
  get Template() {
    return /*html*/ `
    <div class="card col-12 col-md-3">
      <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <h5>Amount Remaining: ${this.amount}</h5>
        <button onclick="app.snacksController.buySnack('${this.name}')">Buy ${this.name} - $${this.price}</button>
      </div>
    </div>
    `;
  }
}
