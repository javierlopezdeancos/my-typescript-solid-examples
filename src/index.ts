import {
  CarWrong as SingleResponsibilityCarWrong,
  CarOk as SingleResponsibilityCarOk,
  CarLogger as SingleResponsibilityCarLogger
} from './S';
import {
  cars as openCloseCars,
  printAveragePriceWrong as openClosePrintAveragePriceWrong,
  brandCars as openCloseBrandCars,
  printAveragePriceOk as openClosePrintAveragePriceOk,
} from './O';
import {
  brandCars as liskovSubstitutionBrandCars,
  printSeatsWrong as liskovSubstitutionPrintSeatsWrong,
  printSeatsOk as liskovSubstitutionPrintSeatsOk,
} from './L';

// 💎 S OF SOLID (SINGLE RESPONSIBILITY)
const solidSectionSNode = document.getElementById('S');

if (solidSectionSNode) {
  solidSectionSNode.innerHTML = `
    <header>
      <h2>S: Principio de responsabilidad única</h2>
    </header>
    <section>
      <p>Como su propio nombre indica, establece que una clase, componente o microservicio debe ser responsable de una sola cosa (el tan aclamado término “decoupled” en inglés). Si por el contrario, una clase tiene varias responsabilidades, esto implica que el cambio en una responsabilidad provocará la modificación en otra responsabilidad.</p>
    </section>
  `;
}

// ❌ Wrong example
const myCarWrong = new SingleResponsibilityCarWrong("Mercedes", "Blue");

console.log("❌");
myCarWrong.description();

// ✔️ Good example
const myCarOk = new SingleResponsibilityCarOk("Mercedes", "Blue");
const myCarLogger = new SingleResponsibilityCarLogger(myCarOk);

console.log("✔️");
myCarLogger.description();

// 💎 O OF SOLID (OPEN CLOSED PRINCIPLE)
const solidSectionONode = document.getElementById('O');

if (solidSectionONode) {
  solidSectionONode.innerHTML = `
    <header>
      <h2>O: Principio abierto/cerrado</h2>
    </header>
    <section>
      <p>
        Establece que las entidades software (clases, módulos y funciones) deberían estar abiertos para su extensión, pero cerrados para su modificación.
      </p>
    </section>
  `;
}

// ❌ Wrong example
console.log("❌");
openClosePrintAveragePriceWrong(openCloseCars);

// ✔️ Good example
console.log("✔️");
openClosePrintAveragePriceOk(openCloseBrandCars);

// 💎 L OF SOLID (LISKOV SUBSTITUTION PRINCIPLE)
const solidSectionLNode = document.getElementById('L');

if (solidSectionLNode) {
  solidSectionLNode.innerHTML = `
    <header>
      <h1>L: Principio de substitución de Liskov</h1>
    </header>
    <main>
      <p>
        Declara que una subclase debe ser sustituible por su super clase, y si al hacer esto, el programa falla, estaremos violando este principio.
      </p>
      <p>
        Cumpliendo con este principio se confirmará que nuestro programa tiene una jerarquía de clases fácil de entender y un código reusable.
      </p>
    </main>
  `;
}

// ❌ Wrong example
console.log("❌");
liskovSubstitutionPrintSeatsWrong(liskovSubstitutionBrandCars);

// ✔️ Good example
console.log("✔️");
liskovSubstitutionPrintSeatsOk(liskovSubstitutionBrandCars);


const solidSectionINode = document.getElementById('I');

if (solidSectionINode) {
  solidSectionINode.innerHTML = `
    <header>
      <h2>I: Principio de segregación de interfaz</h2>
    </header>
    <main>
      <p>
        Este principio establece que los clientes no deberían verse forzados a depender de interfaces que no usan.
      </p>
      <p>
        Dicho de otra manera, cuando un cliente depende de una clase que implementa una interfaz cuya funcionalidad
        este cliente no usa, pero que otros clientes sí usan, este cliente estará siendo afectado por los cambios
        que fuercen otros clientes en dicha interfaz.
      </p>
    </main>
  `;
}
