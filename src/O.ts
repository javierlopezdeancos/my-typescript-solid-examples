// The software entities (class, modules and functions)
// should be open to extend, but close to be modify.

class Car {
  private _wheels: string = "4";

  constructor(private _brand: string, private _color?: string) {}

  get brand(): string {
    return this._brand;
  }

  get wheels(): string {
    return this._wheels;
  }

  get color(): string | undefined {
    return this._color;
  }
}

export const cars: Car[] = [
  new Car("Mercedes", "Blue"),
  new Car("Citroen", "Red"),
  new Car("Peugeot", "Yellow")
];

// ❌ This function is not ready to extend another brand into cars array,
//    then we should modify with other if function.

export function printAveragePriceWrong(cars: Car[]): void {
  for (let c = 0; c < cars.length; c++) {
    const car = cars[c];

    if (car.brand === "Mercedes") {
      console.log(18000);
    } else if (car.brand === "Citroen") {
      console.log(25000);
    } else if (car.brand === "Peugeot") {
      console.log(15000);
    }
  }
}

// ✔️ In this case we have
//    * A base `Car` class
//    * A class by `Brand` that implements the `IBrandCar` interface
//    Both classes have split responsibilities.

interface IBrandCar extends Car {
  averagePrice: number;
}

class Mercedes extends Car implements IBrandCar {
  private _averagePrice: number = 18000;

  constructor(color?: string) {
    super("Mercedes", color);
  }

  get averagePrice() {
    return this._averagePrice;
  }
}

class Citroen extends Car implements IBrandCar {
  public _averagePrice: number = 25000;

  constructor(color?: string) {
    super("Citroen", color);
  }

  get averagePrice() {
    return this._averagePrice;
  }
}

class Peugeot extends Car implements IBrandCar {
  public _averagePrice: number = 15000;

  constructor(color?: string) {
    super("Peugeot", color);
  }

  get averagePrice() {
    return this._averagePrice;
  }
}

export const brandCars: IBrandCar[] = [
  new Mercedes("Blue"),
  new Citroen("Red"),
  new Peugeot("Yellow")
];

// ✔️ * This is ready to extend brandCars with other brand car
//    without need to touch any line in
//    `printAveragePriceOk` function
//.   * We can replace IBrandCar that we pass as param by a child class
//    as `Mercedes[]` or `Citroen[]` without break the function.

/*
export function printAveragePriceOk(cars: Citroen[]): void {
  for (let c = 0; c < cars.length; c++) {
    const car = cars[c];
    console.log(car.averagePrice);
  }
}
*/

export function printAveragePriceOk(cars: IBrandCar[]): void {
  for (let c = 0; c < cars.length; c++) {
    const car = cars[c];
    console.log(car.averagePrice);
  }
}


