# 💎 D OF SOLID (DEPENDENCY INVERSION PRINCIPLE)

This principle suggest that *“classes should depend on abstraction but not on concretion”*. What does it mean that we should be having object of interface which helps us to communicate with the concrete classes. What do we gain from this is, we hide the actual implementation of class A from the class B. So if class A changes the class B doesn’t need to care or know about the changes.

## ❌ BAD EXAMPLE

> In this example our hight level module `GetServiceWrong` depends from a low level module `DatabaseServiceWrong`, should be the oposite direction of dependency.

```ts
export class DatabaseServiceWrong {
  //...
  public getNames(): string[] {
    return ["Frank", "James"];
  }
}

export class GetServiceWrong {
  constructor(private databaseService: DatabaseServiceWrong) {}

  public names(): string[] {
    return this.databaseService.getNames();
  }
}
```

## ✔️  GOOD EXAMPLE

> In this example our hight level module `GetServiceOk` depends from a more generic abstraction `DataSource`. No worries about what kind of implementation we need to get data `DatabaseServiceOk` or `APIService`, because both are implementing this `DataSource` abstraction interface and works well in our hight level module `GetServiceOk`.

```ts

interface DataSource {
  getNames: () => string[];
}

export class DatabaseServiceOk implements DataSource {
  //...
  public getNames(): string[] {
    return ["Frank", "James"];
  }
}

export class APIService implements DataSource {
  //...
  public getNames(): string[] {
    return ["Frank", "James"];
  }
}

export class GetServiceOk {
  constructor(private dataSource: DataSource) {}

  public names(): string[] {
    return this.dataSource.getNames();
  }
}
```
