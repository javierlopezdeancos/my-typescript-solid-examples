# 💎 O OF SOLID (OPEN CLOSE)

This principle suggests that *"software entities (class, modules and functions should be open to extend, but close to be modify"*.

## ❌ BAD EXAMPLE

> This function is not ready to extend another brand into cars array, then we should modify with other if `printAveragePriceWrong` function.

```ts
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

export function printAveragePriceWrong(cars: Car[]): void {
  for (let c = 0; c <= Car.length; c++) {
    const car = cars[c];

    if (car.brand === "Mercedes")
      console.log(18000);
    } else if (car.brand === "Citroen") {
      console.log(25000);
    } else if (car.brand === "Peugeot") {
      console.log(15000);
    }
  }
}
```

## ✔️  GOOD EXAMPLE

  > In this case we have two classes with split responsibilities.
  `CarLogger` has the responsibility to log in console some actions
  to car injected by params.

```ts
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

// This is ready to extend brandCars with other brand cars
// without need to touch any line in `printAveragePriceOk` function
export function printAveragePriceOk(cars: IBrandCar[]): void {
  for (let c = 0; c < brandCars.length; c++) {
    const car = brandCars[c];
    console.log(car.averagePrice);
  }
}
```
