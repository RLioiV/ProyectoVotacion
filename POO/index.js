const e = require("express");

class Pregunta {
    constructor(pregunta, alternativas) {
        this.pregunta = pregunta;
        this.alternativas = alternativas.map((alternativa) => {alternativa.trim ()});
        this.resultado = {};
    }
}


mostrarResultados() {
    console.log(`Resultados para la pregunta: "${this.textoPregunta}":`);
    this.opciones.forEach((opcion) => {
      console.log(`Opción "${opcion}": ${this.resultados[opcion] || 0} votos`);
    });
  }


class Encuesta {
    constructor() {
        this.preguntas = [];
    }
}

class encuesta {
    constructor() {
        this.preguntas = [];
    }


    ejecutar() {
        let seguirVotando = true;
        while (seguirVotando) {
            this.preguntas.forEach((pregunta) => this.votar(pregunta));
            seguirVotando = confirm("¿Desea seguir votando?");
        }
        this.mostrarResultadosFinales();
    }

    votar(pregunta) {
        const opcionSeleccionada = prompt(
            `Pregunta: ${
              pregunta.textoPregunta
            }\nSeleccione una opción (${pregunta.opciones.join(", ")}):`
          );
          if (opcionSeleccionada !== null) {
            pregunta.agregarVoto(opcionSeleccionada.trim());
            console.log("opciones selecciones", opcionSeleccionada);
            console.log("Resultados finales de la encuesta:");
            this.preguntas.forEach((pregunta) => pregunta.mostrarResultados());
          } else {
            console.log("Votación cancelada.");
          }
    }
}

const encuesta = new Encuesta();

encuesta.preguntas = [
    new Question("¿Cuál es la capital de Francia?", ["París", "Londres", "Roma"], "París", "París"),
    new Question("¿Cuál es la capital de Inglaterra?", ["Madrid", "Londres", "Berlín"], "Londres", "Berlín"),
    new Question("¿Cuál es la capital de España?", ["Madrid", "Barcelona", "Sevilla"], "Madrid", "Madrid"),
    new Question("¿Cuál es la capital de Italia?", ["Milán", "Roma", "Nápoles"], "Roma", "Milán"),
    new Question("¿Cuál es la capital de Alemania?", ["Hamburgo", "Berlín", "Múnich"], "Berlín", "Berlín"),
    new Question("¿Cuál es la capital de Rusia?", ["Moscú", "San Petersburgo", "Sochi"], "Moscú", "San Petersburgo"),
    new Question("¿Cuál es la capital de Japón?", ["Osaka", "Tokio", "Yokohama"], "Tokio", "Tokio"),
    new Question("¿Cuál es la capital de Australia?", ["Sydney", "Melbourne", "Canberra"], "Canberra", "Sydney"),
  ];
  
  encuesta.ejecutar();