class Cupcake {
  constructor(batter, icing, cost) {
    // accept arguments into the Cupcake class
    this.batter = batter;
    this.icing = icing;
    this.cost = cost;
  }

  getDescription() {
    return `A $${this.cost} ${this.batter} cupcake with ${this.icing} on top`;
  }
}

class CupcakeShop {
  constructor(location) {
    this.location = location;
    this.inventory = [];
    this.cash = 0;
  }

  getStatus() {
    return `The shop currently has $${this.cash} and ${this.inventory.length} cupcakes!`;
  }

  bakeBatch(numberOfCupcakes, batter, icing, price) {
    for (let i = 0; i < numberOfCupcakes; i++) {
      const newCupCake = new Cupcake(batter, icing, price);
      this.addToInventory(newCupCake);
    }
  }

  addToInventory(cupcake) {
    this.inventory.push(cupcake);
  }

  sellCupCake() {
    // check if there are cupcakes in the inventory before removing them
    if (this.inventory.length > 0) {
      const toSell = this.inventory.pop();
      console.log(toSell);
      this.cash = this.cash + toSell.cost;
      return toSell;
    } else {
      return `You have no cupcakes in inventory`;
    }
  }
}

const blueBerry = new Cupcake('blueberry', 'vanilla', 2.99);
const myShop = new CupcakeShop('123 N Main Street');
myShop.bakeBatch(10, 'vanilla', 'blueberry', 3.99);

console.log(blueBerry.getDescription());
console.log(blueBerry.cost);

console.log(myShop.location);
console.log(myShop.getStatus());
console.log(myShop.inventory.length);
console.log(myShop.sellCupCake());
