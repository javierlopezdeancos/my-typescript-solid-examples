import { CarWrong, CarOk, CarLogger } from './S';

// 💎 S OF SOLID (SINGLE RESPONSIBILITY)
const solidSectionNode = document.getElementById('S');

if (solidSectionNode) {
  solidSectionNode.innerHTML = `
    <header>
      <h2>S: Principio de responsabilidad única</h2>
    </header>
    <section>
      <p>Como su propio nombre indica, establece que una clase, componente o microservicio debe ser responsable de una sola cosa (el tan aclamado término “decoupled” en inglés). Si por el contrario, una clase tiene varias responsabilidades, esto implica que el cambio en una responsabilidad provocará la modificación en otra responsabilidad.</p>
    </section>
`;
}

// ❌ Wrong example
const myCarWrong = new CarWrong("Mercedes", "Blue");

console.log("❌");
myCarWrong.description();

// ✔️ Good example
const myCarOk = new CarOk("Mercedes", "Blue");
const myCarLogger = new CarLogger(myCarOk);

console.log("✔️");
myCarLogger.description();
