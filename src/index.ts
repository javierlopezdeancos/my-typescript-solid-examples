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
