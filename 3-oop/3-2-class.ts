{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
    static BEANS_GRAM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMachine(100);
  console.log(maker);
  console.log(maker.makeCoffee(2));

  const maker2 = new CoffeeMachine(40);
  console.log(maker2);
  console.log(maker2.makeCoffee(4));

  const maker3 = CoffeeMachine.makeMachine(20);
  console.log(maker3.makeCoffee(2));
}
