// This principle suggests that “many client specific interfaces are better
// than one general interface”. This is the first principle which is applied
// on interface, all the above three principles applies on classes.
// Let’s take following example to understand this principle.

// ❌ As we can see in this example, Parrot not swim, the penguin not fly and the toucan can't swim.
//    Client classes are depending on all methods from IBird that not use.

interface IBird {
  fly: () => void;
  eat: () => void;
  swim: () => void;
}

class Parrot implements IBird {
  public fly() {
    //...
  }

  public eat() {
    //..
  }

  public swim() {
    //..
  }
}

class Toucan implements IBird {
  public fly() {
    //...
  }

  public eat() {
    //..
  }

  public swim() {
    //..
  }
}

class Penguin implements IBird {
  public fly() {
    //...
  }

  public eat() {
    //..
  }

  public swim() {
    //..
  }
}

// ✔️ Segregating IAve into more specifics interfaces we could dettach this clients classes dependency.

interface IBirdOk {
  eat: () => void;
}

interface IFlyBird extends IBirdOk {
  fly: () => void;
}

interface ISwimBird extends IBirdOk {
  swim: () => void;
}

class ParrotOk implements IFlyBird {
  public fly() {
    //...
  }

  public eat() {
    //..
  }
}

class ToucanOk implements IFlyBird {
  public fly() {
    //...
  }

  public eat() {
    //..
  }
}

class PenguinOk implements ISwimBird {
  public eat() {
    //..
  }

  public swim() {
    //..
  }
}
