// This principle suggests that “parent classes should be easily
// substituted with their child classes without blowing up the application”.

class Car {
  private _wheels: string = "4";

  constructor(
    private _brand: string,
    private _color: string,
    private _seats: number
  ) {}

  get brand(): string {
    return this._brand;
  }

  get wheels(): string {
    return this._wheels;
  }

  get color(): string {
    return this._color;
  }

  get seats(): number {
    return this._seats;
  }
}

interface IBrandCar extends Car {
  averagePrice: number;
}

class Mercedes extends Car implements IBrandCar {
  private _averagePrice: number = 18000;

  constructor(color: string, seats: number) {
    super("Mercedes", color, seats);
  }

  get averagePrice() {
    return this._averagePrice;
  }
}

class Citroen extends Car implements IBrandCar {
  public _averagePrice: number = 25000;

  constructor(color: string, seats: number) {
    super("Citroen", color, seats);
  }

  get averagePrice() {
    return this._averagePrice;
  }
}

class Peugeot extends Car implements IBrandCar {
  public _averagePrice: number = 15000;

  constructor(color: string, seats: number) {
    super("Peugeot", color, seats);
  }

  get averagePrice() {
    return this._averagePrice;
  }
}

export const brandCars: IBrandCar[] = [
  new Mercedes("Blue", 6),
  new Citroen("Red", 5),
  new Peugeot("Yellow", 4)
];

function printMercedesSeats(mercedes: Mercedes) {
  console.log(mercedes.seats);
}

function printCitroenSeats(citroen: Citroen) {
  console.log(citroen.seats);
}

function printPeugeotSeats(peugeot: Peugeot) {
  console.log(peugeot.seats);
}

// ❌ If we replace the cars array pass by a sub cass brand card array
//    as citroens = Citroen[] this function will be break

export function printSeatsWrong(cars: Car[]): void {
  for (let c = 0; c < cars.length; c++) {
    const car = cars[c];

    if (car instanceof Mercedes) {
      printMercedesSeats(car);
    } else if (car instanceof Citroen) {
      printCitroenSeats(car);
    } else if (car instanceof Peugeot) {
      printPeugeotSeats(car);
    }
  }
}

// ✔️ In this case we could replace the cars array pass by a sub cass brand card array
//    as citroens = Citroen[] without broke

/*
const citroens: Citroen[] = [
  new Citroen("Red", 5),
  new Citroen("Blue", 4)
 ];

export function printSeatsOk(citroens: Citroen[]): void {
  for (let c = 0; c < citroens.length; c++) {
    const car = cars[c];
    console.log(car.seats);
  }
}
*/

export function printSeatsOk(cars: Car[]): void {
  for (let c = 0; c < cars.length; c++) {
    const car = cars[c];
    console.log(car.seats);
  }
}
