
// ❌ Class should have one responsabilitiy in this case
//    only build a car with their characteristics but not
//    have any log method in console, this should be other
//    responsability.

export class CarWrong {
  private _wheels: string = "4";

  constructor(private _brand: string, private _color: string) {}

  get brand(): string {
    return this._brand;
  }

  get wheels(): string {
    return this._wheels;
  }

  get color(): string {
    return this._color;
  }

  public description(): void {
    console.log(`My ${this.brand} is ${this.color}`);
  }
}

// ✔️ In this case we have two classes with splited responsabilies.
//    CarLogger has the responsability to log in console some actions
//    to car injected by params.

export class CarOk {
  private _wheels: string = "4";

  constructor(private _brand: string, private _color: string) {}

  get brand(): string {
    return this._brand;
  }

  get wheels(): string {
    return this._wheels;
  }

  get color(): string {
    return this._color;
  }
}

export class CarLogger {
  constructor(private car: CarOk) {}

  public description(): void {
    console.log(`My ${this.car.brand} is ${this.car.color}`);
  }
}
