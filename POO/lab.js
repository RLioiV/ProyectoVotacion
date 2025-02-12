// Clase Pregunta (POO)
class Pregunta {
  constructor(textoPregunta, opciones) {
    this.textoPregunta = textoPregunta;
    this.opciones = opciones.map((opcion) => opcion.trim());
    this.resultados = {}; // Inicia el objeto de resultados vacío
  }

  // Método para agregar un voto
  agregarVoto(opcionSeleccionada) {
    if (this.opciones.includes(opcionSeleccionada)) {
      this.resultados[opcionSeleccionada] =
        (this.resultados[opcionSeleccionada] || 0) + 1;
    } else {
      console.log("La opción seleccionada no es válida.");
    }
  }

  // Método para mostrar los resultados
  mostrarResultados() {
    console.log(`Resultados para la pregunta: "${this.textoPregunta}":`);
    this.opciones.forEach((opcion) => {
      console.log(`Opción "${opcion}": ${this.resultados[opcion] || 0} votos`);
    });
  }
}

// Clase Encuesta (POO)
class Encuesta {
  constructor() {
    this.preguntas = [];
  }

  // Método para agregar una pregunta a la encuesta
  agregarPregunta(textoPregunta, opciones) {
    const pregunta = new Pregunta(textoPregunta, opciones);
    this.preguntas.push(pregunta);
  }

  // Método para ejecutar la encuesta
  ejecutar() {
    let seguirVotando = true;
    while (seguirVotando) {
      this.preguntas.forEach((pregunta) => this.votar(pregunta));
      seguirVotando = confirm("¿Desea seguir votando?");
    }
    this.mostrarResultadosFinales();
  }

  // Método para manejar la votación de una pregunta (POO y PF)
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

  // Método para mostrar los resultados finales
  mostrarResultadosFinales() {
    console.log("Resultados finales de la encuesta:");
    this.preguntas.forEach((pregunta) => pregunta.mostrarResultados());
  }
}

// Función pura para crear una encuesta usando programación funcional (PF)
const crearEncuestaInteractiva = () => {
  const encuesta = new Encuesta();
  const numeroDePreguntas = parseInt(
    prompt("¿Cuántas preguntas desea realizar?")
  );

  for (let i = 0; i < numeroDePreguntas; i++) {
    const textoPregunta = prompt(`Ingrese la pregunta ${i + 1}:`);
    const opciones = prompt(
      `Ingrese las opciones para la pregunta ${i + 1} separadas por coma (,):`
    ).split(",");
    encuesta.agregarPregunta(textoPregunta, opciones);
  }

  return encuesta;
};

// Inicializar y ejecutar la encuesta
const encuesta = crearEncuestaInteractiva();
encuesta.ejecutar();
